<?php

declare(strict_types=1);

namespace Bolt\Article;

use Bolt\Common\Json;
use Symfony\Component\Filesystem\Path;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TwigExtension extends AbstractExtension
{
    private const LANGS_DIR = 'assets/article/langs';

    public function __construct(
        private readonly ArticleConfig $articleConfig,
        private readonly RequestStack $requestStack,
        private readonly string $projectDir,
        private readonly string $publicFolder,
    ) {
    }

    public function getFunctions(): array
    {
        $safe = [
            'is_safe' => ['html'],
        ];

        return [
            new TwigFunction('article_settings', $this->articleSettings(...), $safe),
            new TwigFunction('article_includes', $this->articleIncludes(...), $safe),
        ];
    }

    public function articleSettings(): string
    {
        $settings = $this->articleConfig->getConfig();

        // The editor UI language always follows the current Bolt backend locale
        // (resolved per user by Bolt's LocaleSubscriber). It is intentionally not
        // configurable — set last so any stray `editor.lang` in config can't freeze
        // it. The matching langs/<code>.js is loaded by article_includes().
        $settings['editor'] ??= [];
        $settings['editor']['lang'] = $this->resolveLocale();

        return Json::json_encode($settings, JSON_HEX_QUOT | JSON_HEX_APOS);
    }

    public function articleIncludes(): string
    {
        $used = $this->articleConfig->getConfig()['plugins'];
        $plugins = collect($this->articleConfig->getPlugins());

        // The UI language file matching the resolved locale (see
        // resolveLocale()) is emitted FIRST, before the plugin
        // scripts below. Each plugin registers its own `translations.en`, which
        // deep-merges onto `ArticleEditor.lang.<code>`; loading the base language
        // first lets those merge in so the English fallback stays complete for
        // every enabled plugin. Exactly one file is loaded. When the locale resolves
        // to English (including the fallback), that file is langs/en.js, the
        // canonical, editable English set.
        $output = sprintf('<script src="%s"></script>', $this->langFilePath($this->resolveLocale()));

        foreach ($used as $item) {
            if (! is_string($item) || ! $plugins->get($item)) {
                continue;
            }

            foreach ($plugins->get($item) as $file) {
                if (Path::getExtension($file) === 'css') {
                    $output .= sprintf('<link rel="stylesheet" href="/assets/article/plugins/%s">', $file);
                }
                if (Path::getExtension($file) === 'js') {
                    $output .= sprintf('<script src="/assets/article/plugins/%s"></script>', $file);
                }
                $output .= "\n";
            }
        }

        return $output;
    }

    /**
     * The locale to use for the editor UI. Uses the current request locale, which
     * Bolt resolves per user in the backend (LocaleSubscriber sets it from the
     * user's `_backend_locale`).
     *
     * Bolt locales look like `pt_BR` / `zh-CN`, while the shipped language files
     * are lowercase with an underscore, e.g. `pt_br`. So the locale is normalized
     * first, then matched exactly, then by its bare language code (`de_AT` -> `de`).
     *
     * Falls back to English when there is no request (e.g. CLI / cache warmup) or
     * when we ship no matching langs/<code>.js. The fallback is essential: the
     * editor does NOT fall back on its own — set `editor.lang` to a locale whose
     * language table was never loaded and every toolbar label resolves to
     * `undefined`, rendering an empty editor UI. This is the only file existence
     * check: the result always names a shipped file, so article_includes() can
     * load it as is, and `editor.lang` in the settings names the table it loaded.
     */
    private function resolveLocale(): string
    {
        $locale = $this->requestStack->getCurrentRequest()?->getLocale() ?? '';
        $locale = mb_strtolower(str_replace('-', '_', $locale));

        foreach ([$locale, mb_strstr($locale, '_', true)] as $candidate) {
            if (is_string($candidate) && $this->hasLangFile($candidate)) {
                return $candidate;
            }
        }

        return 'en';
    }

    private function hasLangFile(string $locale): bool
    {
        $langsDir = Path::join($this->projectDir, $this->publicFolder, self::LANGS_DIR);
        $file = Path::join($langsDir, $locale . '.js');

        // The locale comes from the request, and Bolt accepts any `?_locale=` value. So it
        // must be a plain file name (no path segments) that stays inside the langs directory.
        return Path::isBasePath($langsDir, $file)
            && Path::getFilenameWithoutExtension($file, '.js') === $locale
            && is_file($file);
    }

    private function langFilePath(string $locale): string
    {
        return '/' . Path::join(self::LANGS_DIR, $locale . '.js');
    }
}
