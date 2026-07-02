/**
 * Czech (cs) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleLangInclude before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['cs'] = {
        accessibility: { 'help-label': 'Textový editor' },
        editor: { title: 'Článek', multiple: 'Vícenásobné' },
        placeholders: {
            figcaption: 'Zadejte popisek (nepovinné)',
            text: 'Začněte psát...',
            code: 'Upravte pro přidání kódu...',
            layer: 'Stiskněte Enter pro přidání nového textu...'
        },
        popup: {
            link: 'Odkaz', add: 'Přidat', grid: 'Mřížka', back: 'Zpět',
            image: 'Obrázek', snippets: 'Úryvky', 'add-image': 'Přidat obrázek'
        },
        shortcuts: {
            'meta-a': 'Vybrat text v bloku', 'meta-shift-a': 'Vybrat všechny bloky',
            'meta-click': 'Vybrat více bloků', 'meta-z': 'Zpět', 'meta-shift-z': 'Znovu',
            'meta-shift-m': 'Odebrat vložené formátování', 'meta-b': 'Tučné',
            'meta-i': 'Kurzíva', 'meta-u': 'Podtržené', 'meta-h': 'Horní index',
            'meta-l': 'Dolní index', 'meta-k': 'Odkaz', 'meta-alt-0': 'Normální text',
            'meta-alt-1': 'Nadpis 1', 'meta-alt-2': 'Nadpis 2', 'meta-alt-3': 'Nadpis 3',
            'meta-alt-4': 'Nadpis 4', 'meta-alt-5': 'Nadpis 5', 'meta-alt-6': 'Nadpis 6',
            'meta-shift-7': 'Číslovaný seznam', 'meta-shift-8': 'Odrážkový seznam',
            'meta-indent': 'Odsadit', 'meta-outdent': 'Zrušit odsazení',
            'meta-shift-backspace': 'Smazat blok', 'meta-shift-d': 'Duplikovat blok',
            'meta-shift-up': 'Posunout řádek nahoru', 'meta-shift-down': 'Posunout řádek dolů'
        },
        headings: {
            h1: 'Nadpis 1', h2: 'Nadpis 2', h3: 'Nadpis 3',
            h4: 'Nadpis 4', h5: 'Nadpis 5', h6: 'Nadpis 6'
        },
        inline: { bold: 'Tučné', italic: 'Kurzíva', deleted: 'Přeškrtnuté' },
        list: {
            'unordered-list': 'Odrážkový seznam', 'ordered-list': 'Číslovaný seznam',
            indent: 'Odsadit', outdent: 'Zrušit odsazení'
        },
        link: {
            link: 'Odkaz', 'edit-link': 'Upravit odkaz', unlink: 'Zrušit odkaz',
            'link-in-new-tab': 'Otevřít odkaz v nové kartě', save: 'Uložit',
            insert: 'Vložit', cancel: 'Zrušit', text: 'Text', url: 'URL'
        },
        table: {
            width: 'Šířka', nowrap: 'Nezalamovat', save: 'Uložit', cancel: 'Zrušit',
            'table-cell': 'Buňka tabulky', 'add-head': 'Přidat záhlaví',
            'remove-head': 'Odebrat záhlaví', 'add-row-below': 'Přidat řádek pod',
            'add-row-above': 'Přidat řádek nad', 'remove-row': 'Odebrat řádek',
            'add-column-after': 'Přidat sloupec za', 'add-column-before': 'Přidat sloupec před',
            'remove-column': 'Odebrat sloupec'
        },
        image: {
            or: 'nebo', 'alt-text': 'Alternativní text', save: 'Uložit', link: 'Odkaz',
            width: 'Šířka', delete: 'Smazat', cancel: 'Zrušit', insert: 'Vložit',
            caption: 'Popisek', 'link-in-new-tab': 'Otevřít odkaz v nové kartě',
            'url-placeholder': 'Vložte URL obrázku...',
            'upload-new-placeholder': 'Přetáhněte pro nahrání nového obrázku<br>nebo klikněte pro výběr'
        },
        code: { code: 'Kód', insert: 'Vložit', save: 'Uložit', cancel: 'Zrušit' },
        embed: {
            embed: 'Vložený obsah', caption: 'Popisek', insert: 'Vložit', save: 'Uložit',
            cancel: 'Zrušit',
            description: 'Vložte libovolný embed/HTML kód nebo zadejte URL (pouze video Vimeo nebo YouTube)',
            'responsive-video': 'Responzivní video'
        },
        upload: { placeholder: 'Přetáhněte pro nahrání <br>nebo klikněte pro výběr' },
        templates: { templates: 'Šablony' },
        snippets: { snippets: 'Úryvky' },
        form: {
            link: 'Odkaz', url: 'URL', text: 'Text', name: 'Název',
            'alt-text': 'Alternativní text', image: 'Obrázek', upload: 'Nahrát',
            alignment: 'Zarovnání', outset: 'Přesah', valign: 'Svislé zarovnání'
        },
        buttons: {
            'mobile-view': 'Mobilní zobrazení', cancel: 'Zrušit', insert: 'Vložit',
            unlink: 'Zrušit odkaz', save: 'Uložit', add: 'Přidat',
            'transform-to-text': 'Převést na text', align: 'Zarovnání', valign: 'Svislé zarovnání',
            outset: 'Přesah', indent: 'Odsadit', outdent: 'Zrušit odsazení', head: 'Záhlaví',
            row: 'Řádek', cell: 'Buňka', html: 'HTML', templates: 'Šablony',
            shortcuts: 'Klávesové zkratky', format: 'Formát', bold: 'Tučné', italic: 'Kurzíva',
            deleted: 'Přeškrtnuté', underline: 'Podtržené', table: 'Tabulka', link: 'Odkaz',
            undo: 'Zpět', redo: 'Znovu', style: 'Styl', config: 'Konfigurace',
            settings: 'Nastavení', text: 'Text', embed: 'Vložený obsah', grid: 'Mřížka',
            image: 'Obrázek', list: 'Seznam', delete: 'Smazat', duplicate: 'Duplikovat',
            sort: 'Seřadit', edit: 'Upravit', inline: 'Vložené'
        },
        blocks: {
            noneditable: 'Needitovatelné', paragraph: 'Odstavec', heading: 'Nadpis',
            image: 'Obrázek', figcaption: 'Popisek obrázku', embed: 'Vložený obsah',
            line: 'Čára', code: 'Kód', quote: 'Citace', quoteitem: 'Odstavec',
            snippet: 'Úryvek', column: 'Sloupec', grid: 'Mřížka', list: 'Seznam',
            table: 'Tabulka', layer: 'Vrstva', row: 'Řádek', text: 'Text', cell: 'Buňka',
            dlist: 'Definiční seznam', address: 'Adresa', form: 'Formulář', card: 'Karta',
            tags: 'Štítky'
        },
        blockcode: { save: 'Uložit', cancel: 'Zrušit', 'edit-code': 'Upravit kód' },
        buttonlink: { button: 'Tlačítko' },
        inlineformat: {
            'inline-format': 'Vložené formátování', underline: 'Podtržené',
            superscript: 'Horní index', subscript: 'Dolní index', mark: 'Zvýraznění',
            code: 'Kód', shortcut: 'Zkratka', 'remove-format': 'Odebrat formátování'
        },
        tags: {
            tags: 'Štítky', add: 'Přidat', save: 'Uložit', cancel: 'Zrušit',
            label: 'Přidejte štítky oddělené čárkou'
        },
        imageposition: { 'image-position': 'Pozice obrázku' },
        filelink: {
            file: 'Soubor', upload: 'Nahrát', title: 'Název', choose: 'Vybrat',
            placeholder: 'Přetáhněte pro nahrání souboru<br>nebo klikněte pro výběr'
        },
        removeformat: { removeformat: 'Odebrat formátování' },
        imageresize: { 'image-resize': 'Změna velikosti obrázku' }
    };
})(ArticleEditor);
