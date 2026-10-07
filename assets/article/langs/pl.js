/**
 * Polish (pl) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleIncludes before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 *
 * Structure mirrors en.js: the core editor UI first, then one clearly labelled
 * group per plugin. Plugin strings are NOT merged into non-English locales at
 * runtime, so every plugin group must be carried here to be shown in Polish.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['pl'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Edytor tekstu sformatowanego' },
        editor: { title: 'Artykuł', multiple: 'Wiele bloków' },
        placeholders: {
            figcaption: 'Wpisz podpis (opcjonalnie)',
            text: 'Wpisz coś...',
            code: 'Edytuj, aby dodać kod...',
            layer: 'Naciśnij Enter, aby dodać tekst...'
        },
        popup: {
            link: 'Link', add: 'Dodaj', grid: 'Siatka', back: 'Wstecz',
            image: 'Obraz', snippets: 'Fragmenty', 'add-image': 'Dodaj obraz'
        },
        shortcuts: {
            'meta-a': 'Zaznacz tekst w bloku', 'meta-shift-a': 'Zaznacz wszystkie bloki',
            'meta-click': 'Zaznacz wiele bloków', 'meta-z': 'Cofnij', 'meta-shift-z': 'Ponów',
            'meta-shift-m': 'Usuń formatowanie w tekście', 'meta-b': 'Pogrubienie',
            'meta-i': 'Kursywa', 'meta-u': 'Podkreślenie', 'meta-h': 'Indeks górny',
            'meta-l': 'Indeks dolny', 'meta-k': 'Link', 'meta-alt-0': 'Zwykły tekst',
            'meta-alt-1': 'Nagłówek 1', 'meta-alt-2': 'Nagłówek 2', 'meta-alt-3': 'Nagłówek 3',
            'meta-alt-4': 'Nagłówek 4', 'meta-alt-5': 'Nagłówek 5', 'meta-alt-6': 'Nagłówek 6',
            'meta-shift-7': 'Lista numerowana', 'meta-shift-8': 'Lista punktowana',
            'meta-indent': 'Zwiększ wcięcie', 'meta-outdent': 'Zmniejsz wcięcie',
            'meta-shift-backspace': 'Usuń blok', 'meta-shift-d': 'Duplikuj blok',
            'meta-shift-up': 'Przenieś wiersz w górę', 'meta-shift-down': 'Przenieś wiersz w dół'
        },
        headings: {
            h1: 'Nagłówek 1', h2: 'Nagłówek 2', h3: 'Nagłówek 3',
            h4: 'Nagłówek 4', h5: 'Nagłówek 5', h6: 'Nagłówek 6'
        },
        inline: { bold: 'Pogrubienie', italic: 'Kursywa', deleted: 'Przekreślenie' },
        list: {
            'unordered-list': 'Lista punktowana', 'ordered-list': 'Lista numerowana',
            indent: 'Zwiększ wcięcie', outdent: 'Zmniejsz wcięcie'
        },
        link: {
            link: 'Link', 'edit-link': 'Edytuj link', unlink: 'Usuń link',
            'link-in-new-tab': 'Otwórz link w nowej karcie', save: 'Zapisz',
            insert: 'Wstaw', cancel: 'Anuluj', text: 'Tekst', url: 'URL'
        },
        table: {
            width: 'Szerokość', nowrap: 'Bez zawijania', save: 'Zapisz', cancel: 'Anuluj',
            'table-cell': 'Komórka tabeli', 'add-head': 'Dodaj wiersz nagłówka',
            'remove-head': 'Usuń wiersz nagłówka', 'add-row-below': 'Dodaj wiersz poniżej',
            'add-row-above': 'Dodaj wiersz powyżej', 'remove-row': 'Usuń wiersz',
            'add-column-after': 'Dodaj kolumnę po prawej', 'add-column-before': 'Dodaj kolumnę po lewej',
            'remove-column': 'Usuń kolumnę'
        },
        image: {
            or: 'lub', 'alt-text': 'Tekst alternatywny', save: 'Zapisz', link: 'Link',
            width: 'Szerokość', delete: 'Usuń', cancel: 'Anuluj', insert: 'Wstaw',
            caption: 'Podpis', 'link-in-new-tab': 'Otwórz link w nowej karcie',
            'url-placeholder': 'Wklej URL obrazu...',
            'upload-new-placeholder': 'Przeciągnij, aby przesłać nowy obraz<br>lub kliknij, aby wybrać'
        },
        code: { code: 'Kod', insert: 'Wstaw', save: 'Zapisz', cancel: 'Anuluj' },
        embed: {
            embed: 'Osadź', caption: 'Podpis', insert: 'Wstaw', save: 'Zapisz',
            cancel: 'Anuluj',
            description: 'Wklej dowolny kod osadzania/HTML lub wpisz URL (tylko film Vimeo lub YouTube)',
            'responsive-video': 'Responsywne wideo'
        },
        upload: { placeholder: 'Przeciągnij, aby przesłać <br>lub kliknij, aby wybrać' },
        templates: { templates: 'Szablony' },
        snippets: { snippets: 'Fragmenty' },
        form: {
            link: 'Link', url: 'URL', text: 'Tekst', name: 'Nazwa',
            'alt-text': 'Tekst alternatywny', image: 'Obraz', upload: 'Prześlij',
            alignment: 'Wyrównanie', outset: 'Wysunięcie', valign: 'Wyrównanie pionowe'
        },
        buttons: {
            'mobile-view': 'Widok mobilny', cancel: 'Anuluj', insert: 'Wstaw',
            unlink: 'Usuń link', save: 'Zapisz', add: 'Dodaj',
            'transform-to-text': 'Przekształć na tekst', align: 'Wyrównanie', valign: 'Wyrównanie pionowe',
            outset: 'Wysunięcie', indent: 'Zwiększ wcięcie', outdent: 'Zmniejsz wcięcie', head: 'Wiersz nagłówka',
            row: 'Wiersz', cell: 'Komórka', html: 'HTML', templates: 'Szablony',
            shortcuts: 'Skróty klawiaturowe', format: 'Format', bold: 'Pogrubienie', italic: 'Kursywa',
            deleted: 'Przekreślenie', underline: 'Podkreślenie', table: 'Tabela', link: 'Link',
            undo: 'Cofnij', redo: 'Ponów', style: 'Styl', config: 'Konfiguracja',
            settings: 'Ustawienia', text: 'Tekst', embed: 'Osadź', grid: 'Siatka',
            image: 'Obraz', list: 'Lista', delete: 'Usuń', duplicate: 'Duplikuj',
            sort: 'Sortuj', edit: 'Edytuj', inline: 'W tekście'
        },
        // Block labels. The last four are contributed by the `bulma-content`, `tags`,
        // `math` and `variable` plugins; the rest are core block types.
        blocks: {
            noneditable: 'Nieedytowalne', paragraph: 'Akapit', heading: 'Nagłówek',
            image: 'Obraz', figcaption: 'Podpis obrazu', embed: 'Osadzenie',
            line: 'Linia', code: 'Kod', quote: 'Cytat', quoteitem: 'Akapit',
            snippet: 'Fragment', column: 'Kolumna', grid: 'Siatka', list: 'Lista',
            table: 'Tabela', layer: 'Warstwa', row: 'Wiersz', text: 'Tekst', cell: 'Komórka',
            dlist: 'Lista definicji', address: 'Adres', form: 'Formularz', card: 'Karta',
            content: 'Treść', tags: 'Tagi', math: 'Wzór', variable: 'Zmienna'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Zapisz', cancel: 'Anuluj', 'edit-code': 'Edytuj kod' },
        // buttonlink plugin
        buttonlink: { button: 'Przycisk' },
        // carousel plugin
        carousel: { carousel: 'Karuzela', save: 'Zapisz', cancel: 'Anuluj', insert: 'Wstaw' },
        // clips plugin
        clips: { clips: 'Klipy' },
        // counter plugin
        counter: { words: 'słów', chars: 'znaków' },
        // filelink plugin
        filelink: {
            file: 'Plik', upload: 'Prześlij', title: 'Tytuł', choose: 'Wybierz',
            placeholder: 'Przeciągnij, aby przesłać plik<br>lub kliknij, aby wybrać'
        },
        // handle plugin
        handle: { handle: 'Handle' },
        // icons plugin
        icons: { icons: 'Ikony' },
        // imageposition plugin
        imageposition: { 'image-position': 'Pozycja obrazu' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Zmiana rozmiaru obrazu' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Formatowanie w tekście', underline: 'Podkreślenie',
            superscript: 'Indeks górny', subscript: 'Indeks dolny', mark: 'Wyróżnienie',
            code: 'Kod', shortcut: 'Skrót', 'remove-format': 'Usuń formatowanie'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Utwórz przycisk', 'remove-button': 'Usuń przycisk',
            button: 'Przycisk'
        },
        // math plugin
        math: {
            math: 'Wzór', label: 'Wpisz wyrażenie', add: 'Dodaj',
            save: 'Zapisz', cancel: 'Anuluj'
        },
        // print plugin
        print: { print: 'Drukuj' },
        // removeformat plugin
        removeformat: { removeformat: 'Usuń formatowanie' },
        // selector plugin
        selector: { selector: 'Selektor', save: 'Zapisz', cancel: 'Anuluj' },
        // slideshow plugin
        slideshow: { slideshow: 'Pokaz slajdów', save: 'Zapisz', cancel: 'Anuluj', insert: 'Wstaw' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Znaki specjalne' },
        // style plugin
        style: { style: 'Styl', 'remove-style': 'Usuń styl' },
        // tags plugin
        tags: {
            tags: 'Tagi', add: 'Dodaj', save: 'Zapisz', cancel: 'Anuluj',
            label: 'Dodaj tagi oddzielone przecinkami'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'Od lewej do prawej', rtl: 'Od prawej do lewej' },
        // variable plugin
        variable: { variable: 'Zmienna' }
    };
})(ArticleEditor);
