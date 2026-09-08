/**
 * Italian (it) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleLangInclude before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 *
 * Structure mirrors en.js: the core editor UI first, then one clearly labelled
 * group per plugin. Plugin strings are NOT merged into non-English locales at
 * runtime, so every plugin group must be carried here to be shown in Italian.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['it'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Editor di testo avanzato' },
        editor: { title: 'Articolo', multiple: 'Selezione multipla' },
        placeholders: {
            figcaption: 'Inserisci didascalia (opzionale)',
            text: 'Scrivi qualcosa...',
            code: 'Modifica per aggiungere codice...',
            layer: 'Premi Invio per aggiungere del testo...'
        },
        popup: {
            link: 'Link', add: 'Aggiungi', grid: 'Griglia', back: 'Indietro',
            image: 'Immagine', snippets: 'Frammenti', 'add-image': 'Aggiungi immagine'
        },
        shortcuts: {
            'meta-a': 'Seleziona il testo nel blocco', 'meta-shift-a': 'Seleziona tutti i blocchi',
            'meta-click': 'Seleziona più blocchi', 'meta-z': 'Annulla', 'meta-shift-z': 'Ripeti',
            'meta-shift-m': 'Rimuovi formato in linea', 'meta-b': 'Grassetto',
            'meta-i': 'Corsivo', 'meta-u': 'Sottolineato', 'meta-h': 'Apice',
            'meta-l': 'Pedice', 'meta-k': 'Link', 'meta-alt-0': 'Testo normale',
            'meta-alt-1': 'Titolo 1', 'meta-alt-2': 'Titolo 2', 'meta-alt-3': 'Titolo 3',
            'meta-alt-4': 'Titolo 4', 'meta-alt-5': 'Titolo 5', 'meta-alt-6': 'Titolo 6',
            'meta-shift-7': 'Elenco ordinato', 'meta-shift-8': 'Elenco non ordinato',
            'meta-indent': 'Aumenta rientro', 'meta-outdent': 'Riduci rientro',
            'meta-shift-backspace': 'Elimina blocco', 'meta-shift-d': 'Duplica blocco',
            'meta-shift-up': 'Sposta riga in alto', 'meta-shift-down': 'Sposta riga in basso'
        },
        headings: {
            h1: 'Titolo 1', h2: 'Titolo 2', h3: 'Titolo 3',
            h4: 'Titolo 4', h5: 'Titolo 5', h6: 'Titolo 6'
        },
        inline: { bold: 'Grassetto', italic: 'Corsivo', deleted: 'Barrato' },
        list: {
            'unordered-list': 'Elenco non ordinato', 'ordered-list': 'Elenco ordinato',
            indent: 'Aumenta rientro', outdent: 'Riduci rientro'
        },
        link: {
            link: 'Link', 'edit-link': 'Modifica link', unlink: 'Rimuovi link',
            'link-in-new-tab': 'Apri link in una nuova scheda', save: 'Salva',
            insert: 'Inserisci', cancel: 'Annulla', text: 'Testo', url: 'URL'
        },
        table: {
            width: 'Larghezza', nowrap: 'Non andare a capo', save: 'Salva', cancel: 'Annulla',
            'table-cell': 'Cella tabella', 'add-head': 'Aggiungi intestazione',
            'remove-head': 'Rimuovi intestazione', 'add-row-below': 'Aggiungi riga sotto',
            'add-row-above': 'Aggiungi riga sopra', 'remove-row': 'Rimuovi riga',
            'add-column-after': 'Aggiungi colonna dopo', 'add-column-before': 'Aggiungi colonna prima',
            'remove-column': 'Rimuovi colonna'
        },
        image: {
            or: 'o', 'alt-text': 'Testo alternativo', save: 'Salva', link: 'Link',
            width: 'Larghezza', delete: 'Elimina', cancel: 'Annulla', insert: 'Inserisci',
            caption: 'Didascalia', 'link-in-new-tab': 'Apri link in una nuova scheda',
            'url-placeholder': 'Incolla URL dell’immagine...',
            'upload-new-placeholder': 'Trascina per caricare una nuova immagine<br>o fai clic per selezionare'
        },
        code: { code: 'Codice', insert: 'Inserisci', save: 'Salva', cancel: 'Annulla' },
        embed: {
            embed: 'Incorpora', caption: 'Didascalia', insert: 'Inserisci', save: 'Salva',
            cancel: 'Annulla',
            description: 'Incolla qualsiasi codice embed/HTML o inserisci l’URL (solo video Vimeo o YouTube)',
            'responsive-video': 'Video responsive'
        },
        upload: { placeholder: 'Trascina per caricare <br>o fai clic per selezionare' },
        templates: { templates: 'Template' },
        snippets: { snippets: 'Frammenti' },
        form: {
            link: 'Link', url: 'URL', text: 'Testo', name: 'Nome',
            'alt-text': 'Testo alternativo', image: 'Immagine', upload: 'Carica',
            alignment: 'Allineamento', outset: 'Sporgenza', valign: 'Allineamento verticale'
        },
        buttons: {
            'mobile-view': 'Vista mobile', cancel: 'Annulla', insert: 'Inserisci',
            unlink: 'Rimuovi link', save: 'Salva', add: 'Aggiungi',
            'transform-to-text': 'Trasforma in testo', align: 'Allineamento', valign: 'Allineamento verticale',
            outset: 'Sporgenza', indent: 'Aumenta rientro', outdent: 'Riduci rientro', head: 'Intestazione',
            row: 'Riga', cell: 'Cella', html: 'HTML', templates: 'Template',
            shortcuts: 'Scorciatoie da tastiera', format: 'Formato', bold: 'Grassetto', italic: 'Corsivo',
            deleted: 'Barrato', underline: 'Sottolineato', table: 'Tabella', link: 'Link',
            undo: 'Annulla', redo: 'Ripeti', style: 'Stile', config: 'Configurazione',
            settings: 'Impostazioni', text: 'Testo', embed: 'Incorpora', grid: 'Griglia',
            image: 'Immagine', list: 'Elenco', delete: 'Elimina', duplicate: 'Duplica',
            sort: 'Ordina', edit: 'Modifica', inline: 'In linea'
        },
        // Block labels. The last four are contributed by the `bulma-content`, `tags`,
        // `math` and `variable` plugins; the rest are core block types.
        blocks: {
            noneditable: 'Non modificabile', paragraph: 'Paragrafo', heading: 'Titolo',
            image: 'Immagine', figcaption: 'Didascalia immagine', embed: 'Incorporamento',
            line: 'Linea', code: 'Codice', quote: 'Citazione', quoteitem: 'Paragrafo',
            snippet: 'Frammento', column: 'Colonna', grid: 'Griglia', list: 'Elenco',
            table: 'Tabella', layer: 'Livello', row: 'Riga', text: 'Testo', cell: 'Cella',
            dlist: 'Elenco di definizioni', address: 'Indirizzo', form: 'Modulo', card: 'Scheda',
            content: 'Contenuto', tags: 'Tag', math: 'Formula', variable: 'Variabile'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Salva', cancel: 'Annulla', 'edit-code': 'Modifica codice' },
        // buttonlink plugin
        buttonlink: { button: 'Pulsante' },
        // carousel plugin
        carousel: { carousel: 'Carosello', save: 'Salva', cancel: 'Annulla', insert: 'Inserisci' },
        // clips plugin
        clips: { clips: 'Clip' },
        // counter plugin
        counter: { words: 'parole', chars: 'caratteri' },
        // filelink plugin
        filelink: {
            file: 'File', upload: 'Carica', title: 'Titolo', choose: 'Scegli',
            placeholder: 'Trascina per caricare un file<br>o fai clic per selezionare'
        },
        // handle plugin
        handle: { handle: 'Handle' },
        // icons plugin
        icons: { icons: 'Icone' },
        // imageposition plugin
        imageposition: { 'image-position': 'Posizione immagine' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Ridimensiona immagine' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Formato in linea', underline: 'Sottolineato',
            superscript: 'Apice', subscript: 'Pedice', mark: 'Evidenziato',
            code: 'Codice', shortcut: 'Scorciatoia', 'remove-format': 'Rimuovi formato'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Crea un pulsante', 'remove-button': 'Rimuovi pulsante',
            button: 'Pulsante'
        },
        // math plugin
        math: {
            math: 'Formula', label: 'Digita un’espressione', add: 'Aggiungi',
            save: 'Salva', cancel: 'Annulla'
        },
        // print plugin
        print: { print: 'Stampa' },
        // removeformat plugin
        removeformat: { removeformat: 'Rimuovi formato' },
        // selector plugin
        selector: { selector: 'Selettore', save: 'Salva', cancel: 'Annulla' },
        // slideshow plugin
        slideshow: { slideshow: 'Presentazione', save: 'Salva', cancel: 'Annulla', insert: 'Inserisci' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Caratteri speciali' },
        // style plugin
        style: { style: 'Stile', 'remove-style': 'Rimuovi stile' },
        // tags plugin
        tags: {
            tags: 'Tag', add: 'Aggiungi', save: 'Salva', cancel: 'Annulla',
            label: 'Aggiungi tag separati da virgole'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'Da sinistra a destra', rtl: 'Da destra a sinistra' },
        // variable plugin
        variable: { variable: 'Variabile' }
    };
})(ArticleEditor);
