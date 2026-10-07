/**
 * Croatian (hr) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleIncludes before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 *
 * Structure mirrors en.js: the core editor UI first, then one clearly labelled
 * group per plugin. Plugin strings are NOT merged into non-English locales at
 * runtime, so every plugin group must be carried here to be shown in Croatian.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['hr'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Uređivač obogaćenog teksta' },
        editor: { title: 'Članak', multiple: 'Više blokova' },
        placeholders: {
            figcaption: 'Unesite opis (neobavezno)',
            text: 'Upišite nešto...',
            code: 'Uredite za dodavanje koda...',
            layer: 'Pritisnite Enter za dodavanje teksta...'
        },
        popup: {
            link: 'Poveznica', add: 'Dodaj', grid: 'Mreža', back: 'Natrag',
            image: 'Slika', snippets: 'Isječci', 'add-image': 'Dodaj sliku'
        },
        shortcuts: {
            'meta-a': 'Odaberi tekst u bloku', 'meta-shift-a': 'Odaberi sve blokove',
            'meta-click': 'Odaberi više blokova', 'meta-z': 'Poništi', 'meta-shift-z': 'Ponovi',
            'meta-shift-m': 'Ukloni umetnuto oblikovanje', 'meta-b': 'Podebljano',
            'meta-i': 'Kurziv', 'meta-u': 'Podcrtano', 'meta-h': 'Eksponent',
            'meta-l': 'Indeks', 'meta-k': 'Poveznica', 'meta-alt-0': 'Normalan tekst',
            'meta-alt-1': 'Naslov 1', 'meta-alt-2': 'Naslov 2', 'meta-alt-3': 'Naslov 3',
            'meta-alt-4': 'Naslov 4', 'meta-alt-5': 'Naslov 5', 'meta-alt-6': 'Naslov 6',
            'meta-shift-7': 'Numerirani popis', 'meta-shift-8': 'Popis s oznakama',
            'meta-indent': 'Uvuci', 'meta-outdent': 'Smanji uvlačenje',
            'meta-shift-backspace': 'Izbriši blok', 'meta-shift-d': 'Dupliciraj blok',
            'meta-shift-up': 'Pomakni redak gore', 'meta-shift-down': 'Pomakni redak dolje'
        },
        headings: {
            h1: 'Naslov 1', h2: 'Naslov 2', h3: 'Naslov 3',
            h4: 'Naslov 4', h5: 'Naslov 5', h6: 'Naslov 6'
        },
        inline: { bold: 'Podebljano', italic: 'Kurziv', deleted: 'Precrtano' },
        list: {
            'unordered-list': 'Popis s oznakama', 'ordered-list': 'Numerirani popis',
            indent: 'Uvuci', outdent: 'Smanji uvlačenje'
        },
        link: {
            link: 'Poveznica', 'edit-link': 'Uredi poveznicu', unlink: 'Ukloni poveznicu',
            'link-in-new-tab': 'Otvori poveznicu u novoj kartici', save: 'Spremi',
            insert: 'Umetni', cancel: 'Odustani', text: 'Tekst', url: 'URL'
        },
        table: {
            width: 'Širina', nowrap: 'Bez prijeloma', save: 'Spremi', cancel: 'Odustani',
            'table-cell': 'Ćelija tablice', 'add-head': 'Dodaj zaglavlje',
            'remove-head': 'Ukloni zaglavlje', 'add-row-below': 'Dodaj redak ispod',
            'add-row-above': 'Dodaj redak iznad', 'remove-row': 'Ukloni redak',
            'add-column-after': 'Dodaj stupac desno', 'add-column-before': 'Dodaj stupac lijevo',
            'remove-column': 'Ukloni stupac'
        },
        image: {
            or: 'ili', 'alt-text': 'Alternativni tekst', save: 'Spremi', link: 'Poveznica',
            width: 'Širina', delete: 'Izbriši', cancel: 'Odustani', insert: 'Umetni',
            caption: 'Opis', 'link-in-new-tab': 'Otvori poveznicu u novoj kartici',
            'url-placeholder': 'Zalijepite URL slike...',
            'upload-new-placeholder': 'Povucite za prijenos nove slike<br>ili kliknite za odabir'
        },
        code: { code: 'Kod', insert: 'Umetni', save: 'Spremi', cancel: 'Odustani' },
        embed: {
            embed: 'Ugradi', caption: 'Opis', insert: 'Umetni', save: 'Spremi',
            cancel: 'Odustani',
            description: 'Zalijepite bilo koji embed/HTML kod ili unesite URL (samo Vimeo ili YouTube video)',
            'responsive-video': 'Responzivni video'
        },
        upload: { placeholder: 'Povucite za prijenos <br>ili kliknite za odabir' },
        templates: { templates: 'Predlošci' },
        snippets: { snippets: 'Isječci' },
        form: {
            link: 'Poveznica', url: 'URL', text: 'Tekst', name: 'Naziv',
            'alt-text': 'Alternativni tekst', image: 'Slika', upload: 'Prenesi',
            alignment: 'Poravnanje', outset: 'Izmak', valign: 'Okomito poravnanje'
        },
        buttons: {
            'mobile-view': 'Mobilni prikaz', cancel: 'Odustani', insert: 'Umetni',
            unlink: 'Ukloni poveznicu', save: 'Spremi', add: 'Dodaj',
            'transform-to-text': 'Pretvori u tekst', align: 'Poravnanje', valign: 'Okomito poravnanje',
            outset: 'Izmak', indent: 'Uvuci', outdent: 'Smanji uvlačenje', head: 'Zaglavlje',
            row: 'Redak', cell: 'Ćelija', html: 'HTML', templates: 'Predlošci',
            shortcuts: 'Tipkovnički prečaci', format: 'Format', bold: 'Podebljano', italic: 'Kurziv',
            deleted: 'Precrtano', underline: 'Podcrtano', table: 'Tablica', link: 'Poveznica',
            undo: 'Poništi', redo: 'Ponovi', style: 'Stil', config: 'Konfiguracija',
            settings: 'Postavke', text: 'Tekst', embed: 'Ugradi', grid: 'Mreža',
            image: 'Slika', list: 'Popis', delete: 'Izbriši', duplicate: 'Dupliciraj',
            sort: 'Sortiraj', edit: 'Uredi', inline: 'Umetnuto'
        },
        // Block labels. The last four are contributed by the `bulma-content`, `tags`,
        // `math` and `variable` plugins; the rest are core block types.
        blocks: {
            noneditable: 'Neuređivo', paragraph: 'Odlomak', heading: 'Naslov',
            image: 'Slika', figcaption: 'Opis slike', embed: 'Ugrađeni sadržaj',
            line: 'Linija', code: 'Kod', quote: 'Citat', quoteitem: 'Odlomak',
            snippet: 'Isječak', column: 'Stupac', grid: 'Mreža', list: 'Popis',
            table: 'Tablica', layer: 'Sloj', row: 'Redak', text: 'Tekst', cell: 'Ćelija',
            dlist: 'Definicijski popis', address: 'Adresa', form: 'Obrazac', card: 'Kartica',
            content: 'Sadržaj', tags: 'Oznake', math: 'Formula', variable: 'Varijabla'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Spremi', cancel: 'Odustani', 'edit-code': 'Uredi kod' },
        // buttonlink plugin
        buttonlink: { button: 'Gumb' },
        // carousel plugin
        carousel: { carousel: 'Karusel', save: 'Spremi', cancel: 'Odustani', insert: 'Umetni' },
        // clips plugin
        clips: { clips: 'Klipovi' },
        // counter plugin
        counter: { words: 'riječi', chars: 'znakova' },
        // filelink plugin
        filelink: {
            file: 'Datoteka', upload: 'Prenesi', title: 'Naslov', choose: 'Odaberi',
            placeholder: 'Povucite za prijenos datoteke<br>ili kliknite za odabir'
        },
        // handle plugin
        handle: { handle: 'Handle' },
        // icons plugin
        icons: { icons: 'Ikone' },
        // imageposition plugin
        imageposition: { 'image-position': 'Položaj slike' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Promjena veličine slike' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Umetnuto oblikovanje', underline: 'Podcrtano',
            superscript: 'Eksponent', subscript: 'Indeks', mark: 'Istaknuto',
            code: 'Kod', shortcut: 'Prečac', 'remove-format': 'Ukloni oblikovanje'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Stvori gumb', 'remove-button': 'Ukloni gumb',
            button: 'Gumb'
        },
        // math plugin
        math: {
            math: 'Formula', label: 'Unesite izraz', add: 'Dodaj',
            save: 'Spremi', cancel: 'Odustani'
        },
        // print plugin
        print: { print: 'Ispis' },
        // removeformat plugin
        removeformat: { removeformat: 'Ukloni oblikovanje' },
        // selector plugin
        selector: { selector: 'Selektor', save: 'Spremi', cancel: 'Odustani' },
        // slideshow plugin
        slideshow: { slideshow: 'Dijaprojekcija', save: 'Spremi', cancel: 'Odustani', insert: 'Umetni' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Posebni znakovi' },
        // style plugin
        style: { style: 'Stil', 'remove-style': 'Ukloni stil' },
        // tags plugin
        tags: {
            tags: 'Oznake', add: 'Dodaj', save: 'Spremi', cancel: 'Odustani',
            label: 'Dodajte oznake odvojene zarezima'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'Slijeva nadesno', rtl: 'Zdesna nalijevo' },
        // variable plugin
        variable: { variable: 'Varijabla' }
    };
})(ArticleEditor);
