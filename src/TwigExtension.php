<?php

declare(strict_types=1);

namespace Bolt\Article;

use Bolt\Common\Json;
use Symfony\Component\Filesystem\Path;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TwigExtension extends AbstractExtension
{
    public function __construct(
        private readonly ArticleConfig $articleConfig,
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

        return Json::json_encode($settings, JSON_HEX_QUOT | JSON_HEX_APOS);
    }

    public function articleIncludes(): string
    {
        $used = $this->articleConfig->getConfig()['plugins'];
        $plugins = collect($this->articleConfig->getPlugins());

        // The UI language file matching the resolved locale (see
        // ArticleConfig::resolveLocale) is emitted FIRST, before the plugin
        // scripts below. Each plugin registers its own `translations.en`, which
        // deep-merges onto `ArticleEditor.lang.<code>`; loading the base language
        // first lets those merge in so the English fallback stays complete for
        // every enabled plugin. English is included on purpose (langs/en.js is the
        // canonical, editable English set). Unsupported locales are skipped.
        $output = $this->articleLangInclude();

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
     * A `<script>` tag for the Article UI language file matching the configured
     * locale, or an empty string when we ship no translation for that locale (it
     * then falls back to the editor's built-in English). English is included on
     * purpose: langs/en.js is the canonical, editable English set.
     */
    private function articleLangInclude(): string
    {
        $lang = $this->articleConfig->getConfig()['editor']['lang'] ?? 'en';

        if (! is_string($lang) || $lang === '') {
            return '';
        }

        $relative = sprintf('/assets/article/langs/%s.js', $lang);
        $absolute = $this->projectDir . '/' . $this->publicFolder . $relative;

        if (! is_file($absolute)) {
            return '';
        }

        return sprintf('<script src="%s"></script>', $relative) . "\n";
    }
}
