/**
 * Slovenian (sl) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleIncludes before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 *
 * Structure mirrors en.js: the core editor UI first, then one clearly labelled
 * group per plugin. Plugin strings are NOT merged into non-English locales at
 * runtime, so every plugin group must be carried here to be shown in Slovenian.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['sl'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Urejevalnik obogatenega besedila' },
        editor: { title: 'Članek', multiple: 'Več blokov' },
        placeholders: {
            figcaption: 'Vnesite napis (neobvezno)',
            text: 'Vnesite besedilo...',
            code: 'Uredite za dodajanje kode...',
            layer: 'Pritisnite Enter za dodajanje besedila...'
        },
        popup: {
            link: 'Povezava', add: 'Dodaj', grid: 'Mreža', back: 'Nazaj',
            image: 'Slika', snippets: 'Izrezki', 'add-image': 'Dodaj sliko'
        },
        shortcuts: {
            'meta-a': 'Izberi besedilo v bloku', 'meta-shift-a': 'Izberi vse bloke',
            'meta-click': 'Izberi več blokov', 'meta-z': 'Razveljavi', 'meta-shift-z': 'Uveljavi',
            'meta-shift-m': 'Odstrani oblikovanje v vrstici', 'meta-b': 'Krepko',
            'meta-i': 'Ležeče', 'meta-u': 'Podčrtano', 'meta-h': 'Nadpisano',
            'meta-l': 'Podpisano', 'meta-k': 'Povezava', 'meta-alt-0': 'Običajno besedilo',
            'meta-alt-1': 'Naslov 1', 'meta-alt-2': 'Naslov 2', 'meta-alt-3': 'Naslov 3',
            'meta-alt-4': 'Naslov 4', 'meta-alt-5': 'Naslov 5', 'meta-alt-6': 'Naslov 6',
            'meta-shift-7': 'Oštevilčen seznam', 'meta-shift-8': 'Neoštevilčen seznam',
            'meta-indent': 'Povečaj zamik', 'meta-outdent': 'Zmanjšaj zamik',
            'meta-shift-backspace': 'Izbriši blok', 'meta-shift-d': 'Podvoji blok',
            'meta-shift-up': 'Premakni vrstico navzgor', 'meta-shift-down': 'Premakni vrstico navzdol'
        },
        headings: {
            h1: 'Naslov 1', h2: 'Naslov 2', h3: 'Naslov 3',
            h4: 'Naslov 4', h5: 'Naslov 5', h6: 'Naslov 6'
        },
        inline: { bold: 'Krepko', italic: 'Ležeče', deleted: 'Prečrtano' },
        list: {
            'unordered-list': 'Neoštevilčen seznam', 'ordered-list': 'Oštevilčen seznam',
            indent: 'Povečaj zamik', outdent: 'Zmanjšaj zamik'
        },
        link: {
            link: 'Povezava', 'edit-link': 'Uredi povezavo', unlink: 'Odstrani povezavo',
            'link-in-new-tab': 'Odpri povezavo v novem zavihku', save: 'Shrani',
            insert: 'Vstavi', cancel: 'Prekliči', text: 'Besedilo', url: 'URL'
        },
        table: {
            width: 'Širina', nowrap: 'Brez preloma', save: 'Shrani', cancel: 'Prekliči',
            'table-cell': 'Celica tabele', 'add-head': 'Dodaj glavo tabele',
            'remove-head': 'Odstrani glavo tabele', 'add-row-below': 'Dodaj vrstico spodaj',
            'add-row-above': 'Dodaj vrstico zgoraj', 'remove-row': 'Odstrani vrstico',
            'add-column-after': 'Dodaj stolpec desno', 'add-column-before': 'Dodaj stolpec levo',
            'remove-column': 'Odstrani stolpec'
        },
        image: {
            or: 'ali', 'alt-text': 'Nadomestno besedilo', save: 'Shrani', link: 'Povezava',
            width: 'Širina', delete: 'Izbriši', cancel: 'Prekliči', insert: 'Vstavi',
            caption: 'Napis', 'link-in-new-tab': 'Odpri povezavo v novem zavihku',
            'url-placeholder': 'Prilepite URL slike...',
            'upload-new-placeholder': 'Povlecite za nalaganje nove slike<br>ali kliknite za izbiro'
        },
        code: { code: 'Koda', insert: 'Vstavi', save: 'Shrani', cancel: 'Prekliči' },
        embed: {
            embed: 'Vdelava', caption: 'Napis', insert: 'Vstavi', save: 'Shrani',
            cancel: 'Prekliči',
            description: 'Prilepite poljubno vdelano/HTML kodo ali vnesite URL (samo video Vimeo ali YouTube)',
            'responsive-video': 'Odziven video'
        },
        upload: { placeholder: 'Povlecite za nalaganje <br>ali kliknite za izbiro' },
        templates: { templates: 'Predloge' },
        snippets: { snippets: 'Izrezki' },
        form: {
            link: 'Povezava', url: 'URL', text: 'Besedilo', name: 'Ime',
            'alt-text': 'Nadomestno besedilo', image: 'Slika', upload: 'Naloži',
            alignment: 'Poravnava', outset: 'Odmik navzven', valign: 'Navpična poravnava'
        },
        buttons: {
            'mobile-view': 'Mobilni pogled', cancel: 'Prekliči', insert: 'Vstavi',
            unlink: 'Odstrani povezavo', save: 'Shrani', add: 'Dodaj',
            'transform-to-text': 'Pretvori v besedilo', align: 'Poravnava', valign: 'Navpična poravnava',
            outset: 'Odmik navzven', indent: 'Povečaj zamik', outdent: 'Zmanjšaj zamik', head: 'Glava tabele',
            row: 'Vrstica', cell: 'Celica', html: 'HTML', templates: 'Predloge',
            shortcuts: 'Bližnjice na tipkovnici', format: 'Oblika', bold: 'Krepko', italic: 'Ležeče',
            deleted: 'Prečrtano', underline: 'Podčrtano', table: 'Tabela', link: 'Povezava',
            undo: 'Razveljavi', redo: 'Uveljavi', style: 'Slog', config: 'Konfiguracija',
            settings: 'Nastavitve', text: 'Besedilo', embed: 'Vdelava', grid: 'Mreža',
            image: 'Slika', list: 'Seznam', delete: 'Izbriši', duplicate: 'Podvoji',
            sort: 'Razvrsti', edit: 'Uredi', inline: 'V vrstici'
        },
        // Block labels. The last four are contributed by the `bulma-content`, `tags`,
        // `math` and `variable` plugins; the rest are core block types.
        blocks: {
            noneditable: 'Neurejljivo', paragraph: 'Odstavek', heading: 'Naslov',
            image: 'Slika', figcaption: 'Napis slike', embed: 'Vdelava',
            line: 'Črta', code: 'Koda', quote: 'Citat', quoteitem: 'Odstavek',
            snippet: 'Izrezek', column: 'Stolpec', grid: 'Mreža', list: 'Seznam',
            table: 'Tabela', layer: 'Plast', row: 'Vrstica', text: 'Besedilo', cell: 'Celica',
            dlist: 'Seznam definicij', address: 'Kontaktni naslov', form: 'Obrazec', card: 'Kartica',
            content: 'Vsebina', tags: 'Oznake', math: 'Formula', variable: 'Spremenljivka'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Shrani', cancel: 'Prekliči', 'edit-code': 'Uredi kodo' },
        // buttonlink plugin
        buttonlink: { button: 'Gumb' },
        // carousel plugin
        carousel: { carousel: 'Vrtiljak', save: 'Shrani', cancel: 'Prekliči', insert: 'Vstavi' },
        // clips plugin
        clips: { clips: 'Posnetki' },
        // counter plugin
        counter: { words: 'besed', chars: 'znakov' },
        // filelink plugin
        filelink: {
            file: 'Datoteka', upload: 'Naloži', title: 'Naslov', choose: 'Izberi',
            placeholder: 'Povlecite za nalaganje datoteke<br>ali kliknite za izbiro'
        },
        // handle plugin
        handle: { handle: 'Handle' },
        // icons plugin
        icons: { icons: 'Ikone' },
        // imageposition plugin
        imageposition: { 'image-position': 'Položaj slike' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Spreminjanje velikosti slike' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Oblikovanje v vrstici', underline: 'Podčrtano',
            superscript: 'Nadpisano', subscript: 'Podpisano', mark: 'Označeno',
            code: 'Koda', shortcut: 'Bližnjica', 'remove-format': 'Odstrani oblikovanje'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Ustvari gumb', 'remove-button': 'Odstrani gumb',
            button: 'Gumb'
        },
        // math plugin
        math: {
            math: 'Formula', label: 'Vnesite izraz', add: 'Dodaj',
            save: 'Shrani', cancel: 'Prekliči'
        },
        // print plugin
        print: { print: 'Natisni' },
        // removeformat plugin
        removeformat: { removeformat: 'Odstrani oblikovanje' },
        // selector plugin
        selector: { selector: 'Selektor', save: 'Shrani', cancel: 'Prekliči' },
        // slideshow plugin
        slideshow: { slideshow: 'Diaprojekcija', save: 'Shrani', cancel: 'Prekliči', insert: 'Vstavi' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Posebni znaki' },
        // style plugin
        style: { style: 'Slog', 'remove-style': 'Odstrani slog' },
        // tags plugin
        tags: {
            tags: 'Oznake', add: 'Dodaj', save: 'Shrani', cancel: 'Prekliči',
            label: 'Dodajte oznake, ločene z vejicami'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'Od leve proti desni', rtl: 'Od desne proti levi' },
        // variable plugin
        variable: { variable: 'Spremenljivka' }
    };
})(ArticleEditor);
