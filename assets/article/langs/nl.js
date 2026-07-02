/**
 * Dutch (nl) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleLangInclude before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 *
 * Structure mirrors en.js: the core editor UI first, then one clearly labelled
 * group per plugin. Plugin strings are NOT merged into non-English locales at
 * runtime, so every plugin group must be carried here to be shown in Dutch.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['nl'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Rich text-editor' },
        editor: { title: 'Artikel', multiple: 'Meerdere' },
        placeholders: {
            figcaption: 'Voer bijschrift in (optioneel)',
            text: 'Typ iets...',
            code: 'Bewerk om code toe te voegen...',
            layer: 'Druk op Enter om nieuwe tekst toe te voegen...'
        },
        popup: {
            link: 'Link', add: 'Toevoegen', grid: 'Raster', back: 'Terug',
            image: 'Afbeelding', snippets: 'Fragmenten', 'add-image': 'Afbeelding toevoegen'
        },
        shortcuts: {
            'meta-a': 'Tekst in het blok selecteren', 'meta-shift-a': 'Alle blokken selecteren',
            'meta-click': 'Meerdere blokken selecteren', 'meta-z': 'Ongedaan maken', 'meta-shift-z': 'Opnieuw',
            'meta-shift-m': 'Inline-opmaak verwijderen', 'meta-b': 'Vet',
            'meta-i': 'Cursief', 'meta-u': 'Onderstrepen', 'meta-h': 'Bovenindex',
            'meta-l': 'Onderindex', 'meta-k': 'Link', 'meta-alt-0': 'Normale tekst',
            'meta-alt-1': 'Kop 1', 'meta-alt-2': 'Kop 2', 'meta-alt-3': 'Kop 3',
            'meta-alt-4': 'Kop 4', 'meta-alt-5': 'Kop 5', 'meta-alt-6': 'Kop 6',
            'meta-shift-7': 'Genummerde lijst', 'meta-shift-8': 'Ongenummerde lijst',
            'meta-indent': 'Inspringen', 'meta-outdent': 'Inspringing verkleinen',
            'meta-shift-backspace': 'Blok verwijderen', 'meta-shift-d': 'Blok dupliceren',
            'meta-shift-up': 'Regel omhoog verplaatsen', 'meta-shift-down': 'Regel omlaag verplaatsen'
        },
        headings: {
            h1: 'Kop 1', h2: 'Kop 2', h3: 'Kop 3',
            h4: 'Kop 4', h5: 'Kop 5', h6: 'Kop 6'
        },
        inline: { bold: 'Vet', italic: 'Cursief', deleted: 'Doorgehaald' },
        list: {
            'unordered-list': 'Ongenummerde lijst', 'ordered-list': 'Genummerde lijst',
            indent: 'Inspringen', outdent: 'Inspringing verkleinen'
        },
        link: {
            link: 'Link', 'edit-link': 'Link bewerken', unlink: 'Link verwijderen',
            'link-in-new-tab': 'Link openen in nieuw tabblad', save: 'Opslaan',
            insert: 'Invoegen', cancel: 'Annuleren', text: 'Tekst', url: 'URL'
        },
        table: {
            width: 'Breedte', nowrap: 'Niet afbreken', save: 'Opslaan', cancel: 'Annuleren',
            'table-cell': 'Tabelcel', 'add-head': 'Kop toevoegen',
            'remove-head': 'Kop verwijderen', 'add-row-below': 'Rij onder toevoegen',
            'add-row-above': 'Rij boven toevoegen', 'remove-row': 'Rij verwijderen',
            'add-column-after': 'Kolom rechts toevoegen', 'add-column-before': 'Kolom links toevoegen',
            'remove-column': 'Kolom verwijderen'
        },
        image: {
            or: 'of', 'alt-text': 'Alternatieve tekst', save: 'Opslaan', link: 'Link',
            width: 'Breedte', delete: 'Verwijderen', cancel: 'Annuleren', insert: 'Invoegen',
            caption: 'Bijschrift', 'link-in-new-tab': 'Link openen in nieuw tabblad',
            'url-placeholder': 'Plak URL van afbeelding...',
            'upload-new-placeholder': 'Sleep om een nieuwe afbeelding te uploaden<br>of klik om te selecteren'
        },
        code: { code: 'Code', insert: 'Invoegen', save: 'Opslaan', cancel: 'Annuleren' },
        embed: {
            embed: 'Insluiten', caption: 'Bijschrift', insert: 'Invoegen', save: 'Opslaan',
            cancel: 'Annuleren',
            description: 'Plak embed-/HTML-code of voer de URL in (alleen Vimeo- of YouTube-video)',
            'responsive-video': 'Responsieve video'
        },
        upload: { placeholder: 'Sleep om te uploaden <br>of klik om te selecteren' },
        templates: { templates: 'Sjablonen' },
        snippets: { snippets: 'Fragmenten' },
        form: {
            link: 'Link', url: 'URL', text: 'Tekst', name: 'Naam',
            'alt-text': 'Alternatieve tekst', image: 'Afbeelding', upload: 'Uploaden',
            alignment: 'Uitlijning', outset: 'Uitstekend', valign: 'Verticale uitlijning'
        },
        buttons: {
            'mobile-view': 'Mobiele weergave', cancel: 'Annuleren', insert: 'Invoegen',
            unlink: 'Link verwijderen', save: 'Opslaan', add: 'Toevoegen',
            'transform-to-text': 'Omzetten naar tekst', align: 'Uitlijning', valign: 'Verticale uitlijning',
            outset: 'Uitstekend', indent: 'Inspringen', outdent: 'Inspringing verkleinen', head: 'Kop',
            row: 'Rij', cell: 'Cel', html: 'HTML', templates: 'Sjablonen',
            shortcuts: 'Sneltoetsen', format: 'Opmaak', bold: 'Vet', italic: 'Cursief',
            deleted: 'Doorgehaald', underline: 'Onderstrepen', table: 'Tabel', link: 'Link',
            undo: 'Ongedaan maken', redo: 'Opnieuw', style: 'Stijl', config: 'Configuratie',
            settings: 'Instellingen', text: 'Tekst', embed: 'Insluiten', grid: 'Raster',
            image: 'Afbeelding', list: 'Lijst', delete: 'Verwijderen', duplicate: 'Dupliceren',
            sort: 'Sorteren', edit: 'Bewerken', inline: 'Inline'
        },
        // Block labels. The last two are contributed by the `math` and `variable`
        // plugins; the rest are core block types.
        blocks: {
            noneditable: 'Niet bewerkbaar', paragraph: 'Alinea', heading: 'Kop',
            image: 'Afbeelding', figcaption: 'Afbeeldingsbijschrift', embed: 'Insluiting',
            line: 'Lijn', code: 'Code', quote: 'Citaat', quoteitem: 'Alinea',
            snippet: 'Fragment', column: 'Kolom', grid: 'Raster', list: 'Lijst',
            table: 'Tabel', layer: 'Laag', row: 'Rij', text: 'Tekst', cell: 'Cel',
            dlist: 'Definitielijst', address: 'Adres', form: 'Formulier', card: 'Kaart',
            tags: 'Tags', math: 'Wiskunde', variable: 'Variabele'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Opslaan', cancel: 'Annuleren', 'edit-code': 'Code bewerken' },
        // buttonlink plugin
        buttonlink: { button: 'Knop' },
        // carousel plugin
        carousel: { carousel: 'Carrousel', save: 'Opslaan', cancel: 'Annuleren', insert: 'Invoegen' },
        // clips plugin
        clips: { clips: 'Clips' },
        // counter plugin
        counter: { words: 'woorden', chars: 'tekens' },
        // filelink plugin
        filelink: {
            file: 'Bestand', upload: 'Uploaden', title: 'Titel', choose: 'Kiezen',
            placeholder: 'Sleep om een bestand te uploaden<br>of klik om te selecteren'
        },
        // handle plugin
        handle: { handle: 'Handgreep' },
        // icons plugin
        icons: { icons: 'Pictogrammen' },
        // imageposition plugin
        imageposition: { 'image-position': 'Afbeeldingspositie' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Afbeelding schalen' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Inline-opmaak', underline: 'Onderstrepen',
            superscript: 'Bovenindex', subscript: 'Onderindex', mark: 'Markeren',
            code: 'Code', shortcut: 'Sneltoets', 'remove-format': 'Opmaak verwijderen'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Knop maken', 'remove-button': 'Knop verwijderen',
            button: 'Knop'
        },
        // math plugin
        math: {
            math: 'Wiskunde', label: 'Typ een expressie', add: 'Toevoegen',
            save: 'Opslaan', cancel: 'Annuleren'
        },
        // print plugin
        print: { print: 'Afdrukken' },
        // removeformat plugin
        removeformat: { removeformat: 'Opmaak verwijderen' },
        // selector plugin
        selector: { selector: 'Selector', save: 'Opslaan', cancel: 'Annuleren' },
        // slideshow plugin
        slideshow: { slideshow: 'Diavoorstelling', save: 'Opslaan', cancel: 'Annuleren', insert: 'Invoegen' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Speciale tekens' },
        // style plugin
        style: { style: 'Stijl', 'remove-style': 'Stijl verwijderen' },
        // tags plugin
        tags: {
            tags: 'Tags', add: 'Toevoegen', save: 'Opslaan', cancel: 'Annuleren',
            label: 'Voeg door komma’s gescheiden tags toe'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'Van links naar rechts', rtl: 'Van rechts naar links' },
        // variable plugin
        variable: { variable: 'Variabele' }
    };
})(ArticleEditor);
