/**
 * Slovak (sk) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleIncludes before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 *
 * Structure mirrors en.js: the core editor UI first, then one clearly labelled
 * group per plugin. Plugin strings are NOT merged into non-English locales at
 * runtime, so every plugin group must be carried here to be shown in Slovak.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['sk'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Editor formátovaného textu' },
        editor: { title: 'Článok', multiple: 'Viac blokov' },
        placeholders: {
            figcaption: 'Zadajte popis (voliteľné)',
            text: 'Začnite písať...',
            code: 'Upravte na pridanie kódu...',
            layer: 'Stlačte Enter na pridanie textu...'
        },
        popup: {
            link: 'Odkaz', add: 'Pridať', grid: 'Mriežka', back: 'Späť',
            image: 'Obrázok', snippets: 'Úryvky', 'add-image': 'Pridať obrázok'
        },
        shortcuts: {
            'meta-a': 'Vybrať text v bloku', 'meta-shift-a': 'Vybrať všetky bloky',
            'meta-click': 'Vybrať viac blokov', 'meta-z': 'Späť', 'meta-shift-z': 'Znova',
            'meta-shift-m': 'Odstrániť znakové formátovanie', 'meta-b': 'Tučné',
            'meta-i': 'Kurzíva', 'meta-u': 'Podčiarknuté', 'meta-h': 'Horný index',
            'meta-l': 'Dolný index', 'meta-k': 'Odkaz', 'meta-alt-0': 'Normálny text',
            'meta-alt-1': 'Nadpis 1', 'meta-alt-2': 'Nadpis 2', 'meta-alt-3': 'Nadpis 3',
            'meta-alt-4': 'Nadpis 4', 'meta-alt-5': 'Nadpis 5', 'meta-alt-6': 'Nadpis 6',
            'meta-shift-7': 'Číslovaný zoznam', 'meta-shift-8': 'Odrážkový zoznam',
            'meta-indent': 'Odsadiť', 'meta-outdent': 'Zrušiť odsadenie',
            'meta-shift-backspace': 'Odstrániť blok', 'meta-shift-d': 'Duplikovať blok',
            'meta-shift-up': 'Presunúť riadok nahor', 'meta-shift-down': 'Presunúť riadok nadol'
        },
        headings: {
            h1: 'Nadpis 1', h2: 'Nadpis 2', h3: 'Nadpis 3',
            h4: 'Nadpis 4', h5: 'Nadpis 5', h6: 'Nadpis 6'
        },
        inline: { bold: 'Tučné', italic: 'Kurzíva', deleted: 'Prečiarknuté' },
        list: {
            'unordered-list': 'Odrážkový zoznam', 'ordered-list': 'Číslovaný zoznam',
            indent: 'Odsadiť', outdent: 'Zrušiť odsadenie'
        },
        link: {
            link: 'Odkaz', 'edit-link': 'Upraviť odkaz', unlink: 'Zrušiť odkaz',
            'link-in-new-tab': 'Otvoriť odkaz na novej karte', save: 'Uložiť',
            insert: 'Vložiť', cancel: 'Zrušiť', text: 'Text', url: 'URL'
        },
        table: {
            width: 'Šírka', nowrap: 'Nezalamovať', save: 'Uložiť', cancel: 'Zrušiť',
            'table-cell': 'Bunka tabuľky', 'add-head': 'Pridať hlavičku',
            'remove-head': 'Odstrániť hlavičku', 'add-row-below': 'Pridať riadok nižšie',
            'add-row-above': 'Pridať riadok vyššie', 'remove-row': 'Odstrániť riadok',
            'add-column-after': 'Pridať stĺpec vpravo', 'add-column-before': 'Pridať stĺpec vľavo',
            'remove-column': 'Odstrániť stĺpec'
        },
        image: {
            or: 'alebo', 'alt-text': 'Alternatívny text', save: 'Uložiť', link: 'Odkaz',
            width: 'Šírka', delete: 'Odstrániť', cancel: 'Zrušiť', insert: 'Vložiť',
            caption: 'Popis', 'link-in-new-tab': 'Otvoriť odkaz na novej karte',
            'url-placeholder': 'Vložte URL obrázka...',
            'upload-new-placeholder': 'Presuňte sem nový obrázok na nahratie<br>alebo kliknite na výber'
        },
        code: { code: 'Kód', insert: 'Vložiť', save: 'Uložiť', cancel: 'Zrušiť' },
        embed: {
            embed: 'Vložený obsah', caption: 'Popis', insert: 'Vložiť', save: 'Uložiť',
            cancel: 'Zrušiť',
            description: 'Vložte ľubovoľný embed/HTML kód alebo zadajte URL (iba video Vimeo alebo YouTube)',
            'responsive-video': 'Responzívne video'
        },
        upload: { placeholder: 'Presuňte sem na nahratie <br>alebo kliknite na výber' },
        templates: { templates: 'Šablóny' },
        snippets: { snippets: 'Úryvky' },
        form: {
            link: 'Odkaz', url: 'URL', text: 'Text', name: 'Názov',
            'alt-text': 'Alternatívny text', image: 'Obrázok', upload: 'Nahrať',
            alignment: 'Zarovnanie', outset: 'Presah', valign: 'Zvislé zarovnanie'
        },
        buttons: {
            'mobile-view': 'Mobilné zobrazenie', cancel: 'Zrušiť', insert: 'Vložiť',
            unlink: 'Zrušiť odkaz', save: 'Uložiť', add: 'Pridať',
            'transform-to-text': 'Previesť na text', align: 'Zarovnanie', valign: 'Zvislé zarovnanie',
            outset: 'Presah', indent: 'Odsadiť', outdent: 'Zrušiť odsadenie', head: 'Hlavička',
            row: 'Riadok', cell: 'Bunka', html: 'HTML', templates: 'Šablóny',
            shortcuts: 'Klávesové skratky', format: 'Formát', bold: 'Tučné', italic: 'Kurzíva',
            deleted: 'Prečiarknuté', underline: 'Podčiarknuté', table: 'Tabuľka', link: 'Odkaz',
            undo: 'Späť', redo: 'Znova', style: 'Štýl', config: 'Konfigurácia',
            settings: 'Nastavenia', text: 'Text', embed: 'Vložený obsah', grid: 'Mriežka',
            image: 'Obrázok', list: 'Zoznam', delete: 'Odstrániť', duplicate: 'Duplikovať',
            sort: 'Zoradiť', edit: 'Upraviť', inline: 'Znakové'
        },
        // Block labels. The last four are contributed by the `bulma-content`, `tags`,
        // `math` and `variable` plugins; the rest are core block types.
        blocks: {
            noneditable: 'Neupraviteľné', paragraph: 'Odsek', heading: 'Nadpis',
            image: 'Obrázok', figcaption: 'Popis obrázka', embed: 'Vložený obsah',
            line: 'Čiara', code: 'Kód', quote: 'Citát', quoteitem: 'Odsek',
            snippet: 'Úryvok', column: 'Stĺpec', grid: 'Mriežka', list: 'Zoznam',
            table: 'Tabuľka', layer: 'Vrstva', row: 'Riadok', text: 'Text', cell: 'Bunka',
            dlist: 'Definičný zoznam', address: 'Adresa', form: 'Formulár', card: 'Karta',
            content: 'Obsah', tags: 'Štítky', math: 'Vzorec', variable: 'Premenná'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Uložiť', cancel: 'Zrušiť', 'edit-code': 'Upraviť kód' },
        // buttonlink plugin
        buttonlink: { button: 'Tlačidlo' },
        // carousel plugin
        carousel: { carousel: 'Karusel', save: 'Uložiť', cancel: 'Zrušiť', insert: 'Vložiť' },
        // clips plugin
        clips: { clips: 'Klipy' },
        // counter plugin
        counter: { words: 'slov', chars: 'znakov' },
        // filelink plugin
        filelink: {
            file: 'Súbor', upload: 'Nahrať', title: 'Názov', choose: 'Vybrať',
            placeholder: 'Presuňte súbor na nahratie<br>alebo kliknite na výber'
        },
        // handle plugin
        handle: { handle: 'Handle' },
        // icons plugin
        icons: { icons: 'Ikony' },
        // imageposition plugin
        imageposition: { 'image-position': 'Pozícia obrázka' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Zmena veľkosti obrázka' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Znakové formátovanie', underline: 'Podčiarknuté',
            superscript: 'Horný index', subscript: 'Dolný index', mark: 'Zvýraznenie',
            code: 'Kód', shortcut: 'Skratka', 'remove-format': 'Odstrániť formátovanie'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Vytvoriť tlačidlo', 'remove-button': 'Odstrániť tlačidlo',
            button: 'Tlačidlo'
        },
        // math plugin
        math: {
            math: 'Vzorec', label: 'Zadajte výraz', add: 'Pridať',
            save: 'Uložiť', cancel: 'Zrušiť'
        },
        // print plugin
        print: { print: 'Tlač' },
        // removeformat plugin
        removeformat: { removeformat: 'Odstrániť formátovanie' },
        // selector plugin
        selector: { selector: 'Selektor', save: 'Uložiť', cancel: 'Zrušiť' },
        // slideshow plugin
        slideshow: { slideshow: 'Prezentácia', save: 'Uložiť', cancel: 'Zrušiť', insert: 'Vložiť' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Špeciálne znaky' },
        // style plugin
        style: { style: 'Štýl', 'remove-style': 'Odstrániť štýl' },
        // tags plugin
        tags: {
            tags: 'Štítky', add: 'Pridať', save: 'Uložiť', cancel: 'Zrušiť',
            label: 'Pridajte štítky oddelené čiarkou'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'Zľava doprava', rtl: 'Sprava doľava' },
        // variable plugin
        variable: { variable: 'Premenná' }
    };
})(ArticleEditor);
