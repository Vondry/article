/**
 * Russian (ru) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleIncludes before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 *
 * Structure mirrors en.js: the core editor UI first, then one clearly labelled
 * group per plugin. Plugin strings are NOT merged into non-English locales at
 * runtime, so every plugin group must be carried here to be shown in Russian.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['ru'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Редактор форматированного текста' },
        editor: { title: 'Статья', multiple: 'Несколько блоков' },
        placeholders: {
            figcaption: 'Введите подпись (необязательно)',
            text: 'Введите текст...',
            code: 'Отредактируйте, чтобы добавить код...',
            layer: 'Нажмите Enter, чтобы добавить текст...'
        },
        popup: {
            link: 'Ссылка', add: 'Добавить', grid: 'Сетка', back: 'Назад',
            image: 'Изображение', snippets: 'Фрагменты', 'add-image': 'Добавить изображение'
        },
        shortcuts: {
            'meta-a': 'Выбрать текст в блоке', 'meta-shift-a': 'Выбрать все блоки',
            'meta-click': 'Выбрать несколько блоков', 'meta-z': 'Отменить', 'meta-shift-z': 'Повторить',
            'meta-shift-m': 'Удалить встроенное форматирование', 'meta-b': 'Жирный',
            'meta-i': 'Курсив', 'meta-u': 'Подчёркнутый', 'meta-h': 'Надстрочный',
            'meta-l': 'Подстрочный', 'meta-k': 'Ссылка', 'meta-alt-0': 'Обычный текст',
            'meta-alt-1': 'Заголовок 1', 'meta-alt-2': 'Заголовок 2', 'meta-alt-3': 'Заголовок 3',
            'meta-alt-4': 'Заголовок 4', 'meta-alt-5': 'Заголовок 5', 'meta-alt-6': 'Заголовок 6',
            'meta-shift-7': 'Нумерованный список', 'meta-shift-8': 'Маркированный список',
            'meta-indent': 'Увеличить отступ', 'meta-outdent': 'Уменьшить отступ',
            'meta-shift-backspace': 'Удалить блок', 'meta-shift-d': 'Дублировать блок',
            'meta-shift-up': 'Переместить строку вверх', 'meta-shift-down': 'Переместить строку вниз'
        },
        headings: {
            h1: 'Заголовок 1', h2: 'Заголовок 2', h3: 'Заголовок 3',
            h4: 'Заголовок 4', h5: 'Заголовок 5', h6: 'Заголовок 6'
        },
        inline: { bold: 'Жирный', italic: 'Курсив', deleted: 'Зачёркнутый' },
        list: {
            'unordered-list': 'Маркированный список', 'ordered-list': 'Нумерованный список',
            indent: 'Увеличить отступ', outdent: 'Уменьшить отступ'
        },
        link: {
            link: 'Ссылка', 'edit-link': 'Редактировать ссылку', unlink: 'Удалить ссылку',
            'link-in-new-tab': 'Открыть ссылку в новой вкладке', save: 'Сохранить',
            insert: 'Вставить', cancel: 'Отмена', text: 'Текст', url: 'URL'
        },
        table: {
            width: 'Ширина', nowrap: 'Без переноса', save: 'Сохранить', cancel: 'Отмена',
            'table-cell': 'Ячейка таблицы', 'add-head': 'Добавить строку заголовка',
            'remove-head': 'Удалить строку заголовка', 'add-row-below': 'Добавить строку ниже',
            'add-row-above': 'Добавить строку выше', 'remove-row': 'Удалить строку',
            'add-column-after': 'Добавить столбец справа', 'add-column-before': 'Добавить столбец слева',
            'remove-column': 'Удалить столбец'
        },
        image: {
            or: 'или', 'alt-text': 'Альтернативный текст', save: 'Сохранить', link: 'Ссылка',
            width: 'Ширина', delete: 'Удалить', cancel: 'Отмена', insert: 'Вставить',
            caption: 'Подпись', 'link-in-new-tab': 'Открыть ссылку в новой вкладке',
            'url-placeholder': 'Вставьте URL изображения...',
            'upload-new-placeholder': 'Перетащите, чтобы загрузить новое изображение<br>или нажмите, чтобы выбрать'
        },
        code: { code: 'Код', insert: 'Вставить', save: 'Сохранить', cancel: 'Отмена' },
        embed: {
            embed: 'Встраивание', caption: 'Подпись', insert: 'Вставить', save: 'Сохранить',
            cancel: 'Отмена',
            description: 'Вставьте любой embed/HTML-код или введите URL (только видео Vimeo или YouTube)',
            'responsive-video': 'Адаптивное видео'
        },
        upload: { placeholder: 'Перетащите для загрузки <br>или нажмите, чтобы выбрать' },
        templates: { templates: 'Шаблоны' },
        snippets: { snippets: 'Фрагменты' },
        form: {
            link: 'Ссылка', url: 'URL', text: 'Текст', name: 'Название',
            'alt-text': 'Альтернативный текст', image: 'Изображение', upload: 'Загрузить',
            alignment: 'Выравнивание', outset: 'Вынос', valign: 'Вертикальное выравнивание'
        },
        buttons: {
            'mobile-view': 'Мобильный вид', cancel: 'Отмена', insert: 'Вставить',
            unlink: 'Удалить ссылку', save: 'Сохранить', add: 'Добавить',
            'transform-to-text': 'Преобразовать в текст', align: 'Выравнивание', valign: 'Вертикальное выравнивание',
            outset: 'Вынос', indent: 'Увеличить отступ', outdent: 'Уменьшить отступ', head: 'Строка заголовка',
            row: 'Строка', cell: 'Ячейка', html: 'HTML', templates: 'Шаблоны',
            shortcuts: 'Сочетания клавиш', format: 'Формат', bold: 'Жирный', italic: 'Курсив',
            deleted: 'Зачёркнутый', underline: 'Подчёркнутый', table: 'Таблица', link: 'Ссылка',
            undo: 'Отменить', redo: 'Повторить', style: 'Стиль', config: 'Конфигурация',
            settings: 'Настройки', text: 'Текст', embed: 'Встраивание', grid: 'Сетка',
            image: 'Изображение', list: 'Список', delete: 'Удалить', duplicate: 'Дублировать',
            sort: 'Сортировать', edit: 'Редактировать', inline: 'Встроенный'
        },
        // Block labels. The last four are contributed by the `bulma-content`, `tags`,
        // `math` and `variable` plugins; the rest are core block types.
        blocks: {
            noneditable: 'Нередактируемый', paragraph: 'Абзац', heading: 'Заголовок',
            image: 'Изображение', figcaption: 'Подпись к изображению', embed: 'Встраивание',
            line: 'Линия', code: 'Код', quote: 'Цитата', quoteitem: 'Абзац',
            snippet: 'Фрагмент', column: 'Столбец', grid: 'Сетка', list: 'Список',
            table: 'Таблица', layer: 'Слой', row: 'Строка', text: 'Текст', cell: 'Ячейка',
            dlist: 'Список определений', address: 'Адрес', form: 'Форма', card: 'Карточка',
            content: 'Содержимое', tags: 'Теги', math: 'Формула', variable: 'Переменная'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Сохранить', cancel: 'Отмена', 'edit-code': 'Редактировать код' },
        // buttonlink plugin
        buttonlink: { button: 'Кнопка' },
        // carousel plugin
        carousel: { carousel: 'Карусель', save: 'Сохранить', cancel: 'Отмена', insert: 'Вставить' },
        // clips plugin
        clips: { clips: 'Клипы' },
        // counter plugin
        counter: { words: 'слов', chars: 'символов' },
        // filelink plugin
        filelink: {
            file: 'Файл', upload: 'Загрузить', title: 'Название', choose: 'Выбрать',
            placeholder: 'Перетащите файл для загрузки<br>или нажмите, чтобы выбрать'
        },
        // handle plugin
        handle: { handle: 'Handle' },
        // icons plugin
        icons: { icons: 'Иконки' },
        // imageposition plugin
        imageposition: { 'image-position': 'Позиция изображения' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Изменение размера изображения' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Встроенное форматирование', underline: 'Подчёркнутый',
            superscript: 'Надстрочный', subscript: 'Подстрочный', mark: 'Выделение',
            code: 'Код', shortcut: 'Сочетание клавиш', 'remove-format': 'Удалить форматирование'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Создать кнопку', 'remove-button': 'Удалить кнопку',
            button: 'Кнопка'
        },
        // math plugin
        math: {
            math: 'Формула', label: 'Введите выражение', add: 'Добавить',
            save: 'Сохранить', cancel: 'Отмена'
        },
        // print plugin
        print: { print: 'Печать' },
        // removeformat plugin
        removeformat: { removeformat: 'Удалить форматирование' },
        // selector plugin
        selector: { selector: 'Селектор', save: 'Сохранить', cancel: 'Отмена' },
        // slideshow plugin
        slideshow: { slideshow: 'Слайд-шоу', save: 'Сохранить', cancel: 'Отмена', insert: 'Вставить' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Специальные символы' },
        // style plugin
        style: { style: 'Стиль', 'remove-style': 'Удалить стиль' },
        // tags plugin
        tags: {
            tags: 'Теги', add: 'Добавить', save: 'Сохранить', cancel: 'Отмена',
            label: 'Добавьте теги, разделенные запятыми'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'Слева направо', rtl: 'Справа налево' },
        // variable plugin
        variable: { variable: 'Переменная' }
    };
})(ArticleEditor);
