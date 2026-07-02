/**
 * German (de) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleLangInclude before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 *
 * Structure mirrors en.js: the core editor UI first, then one clearly labelled
 * group per plugin. Plugin strings are NOT merged into non-English locales at
 * runtime, so every plugin group must be carried here to be shown in German.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['de'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Rich-Text-Editor' },
        editor: { title: 'Artikel', multiple: 'Mehrfach' },
        placeholders: {
            figcaption: 'Beschriftung eingeben (optional)',
            text: 'Etwas eingeben...',
            code: 'Bearbeiten, um Code hinzuzufügen...',
            layer: 'Enter drücken, um neuen Text hinzuzufügen...'
        },
        popup: {
            link: 'Link', add: 'Hinzufügen', grid: 'Raster', back: 'Zurück',
            image: 'Bild', snippets: 'Snippets', 'add-image': 'Bild hinzufügen'
        },
        shortcuts: {
            'meta-a': 'Text im Block auswählen', 'meta-shift-a': 'Alle Blöcke auswählen',
            'meta-click': 'Mehrere Blöcke auswählen', 'meta-z': 'Rückgängig', 'meta-shift-z': 'Wiederholen',
            'meta-shift-m': 'Inline-Formatierung entfernen', 'meta-b': 'Fett',
            'meta-i': 'Kursiv', 'meta-u': 'Unterstreichen', 'meta-h': 'Hochgestellt',
            'meta-l': 'Tiefgestellt', 'meta-k': 'Link', 'meta-alt-0': 'Normaler Text',
            'meta-alt-1': 'Überschrift 1', 'meta-alt-2': 'Überschrift 2', 'meta-alt-3': 'Überschrift 3',
            'meta-alt-4': 'Überschrift 4', 'meta-alt-5': 'Überschrift 5', 'meta-alt-6': 'Überschrift 6',
            'meta-shift-7': 'Nummerierte Liste', 'meta-shift-8': 'Aufzählungsliste',
            'meta-indent': 'Einrücken', 'meta-outdent': 'Ausrücken',
            'meta-shift-backspace': 'Block löschen', 'meta-shift-d': 'Block duplizieren',
            'meta-shift-up': 'Zeile nach oben verschieben', 'meta-shift-down': 'Zeile nach unten verschieben'
        },
        headings: {
            h1: 'Überschrift 1', h2: 'Überschrift 2', h3: 'Überschrift 3',
            h4: 'Überschrift 4', h5: 'Überschrift 5', h6: 'Überschrift 6'
        },
        inline: { bold: 'Fett', italic: 'Kursiv', deleted: 'Durchgestrichen' },
        list: {
            'unordered-list': 'Aufzählungsliste', 'ordered-list': 'Nummerierte Liste',
            indent: 'Einrücken', outdent: 'Ausrücken'
        },
        link: {
            link: 'Link', 'edit-link': 'Link bearbeiten', unlink: 'Link entfernen',
            'link-in-new-tab': 'Link in neuem Tab öffnen', save: 'Speichern',
            insert: 'Einfügen', cancel: 'Abbrechen', text: 'Text', url: 'URL'
        },
        table: {
            width: 'Breite', nowrap: 'Kein Zeilenumbruch', save: 'Speichern', cancel: 'Abbrechen',
            'table-cell': 'Tabellenzelle', 'add-head': 'Kopf hinzufügen',
            'remove-head': 'Kopf entfernen', 'add-row-below': 'Zeile darunter hinzufügen',
            'add-row-above': 'Zeile darüber hinzufügen', 'remove-row': 'Zeile entfernen',
            'add-column-after': 'Spalte danach hinzufügen', 'add-column-before': 'Spalte davor hinzufügen',
            'remove-column': 'Spalte entfernen'
        },
        image: {
            or: 'oder', 'alt-text': 'Alternativtext', save: 'Speichern', link: 'Link',
            width: 'Breite', delete: 'Löschen', cancel: 'Abbrechen', insert: 'Einfügen',
            caption: 'Beschriftung', 'link-in-new-tab': 'Link in neuem Tab öffnen',
            'url-placeholder': 'Bild-URL einfügen...',
            'upload-new-placeholder': 'Zum Hochladen eines neuen Bildes hierher ziehen<br>oder zum Auswählen klicken'
        },
        code: { code: 'Code', insert: 'Einfügen', save: 'Speichern', cancel: 'Abbrechen' },
        embed: {
            embed: 'Einbetten', caption: 'Beschriftung', insert: 'Einfügen', save: 'Speichern',
            cancel: 'Abbrechen',
            description: 'Beliebigen Embed-/HTML-Code einfügen oder URL eingeben (nur Vimeo- oder YouTube-Video)',
            'responsive-video': 'Responsives Video'
        },
        upload: { placeholder: 'Zum Hochladen hierher ziehen <br>oder zum Auswählen klicken' },
        templates: { templates: 'Vorlagen' },
        snippets: { snippets: 'Snippets' },
        form: {
            link: 'Link', url: 'URL', text: 'Text', name: 'Name',
            'alt-text': 'Alternativtext', image: 'Bild', upload: 'Hochladen',
            alignment: 'Ausrichtung', outset: 'Überstand', valign: 'Vertikale Ausrichtung'
        },
        buttons: {
            'mobile-view': 'Mobile Ansicht', cancel: 'Abbrechen', insert: 'Einfügen',
            unlink: 'Link entfernen', save: 'Speichern', add: 'Hinzufügen',
            'transform-to-text': 'In Text umwandeln', align: 'Ausrichtung', valign: 'Vertikale Ausrichtung',
            outset: 'Überstand', indent: 'Einrücken', outdent: 'Ausrücken', head: 'Kopf',
            row: 'Zeile', cell: 'Zelle', html: 'HTML', templates: 'Vorlagen',
            shortcuts: 'Tastenkürzel', format: 'Format', bold: 'Fett', italic: 'Kursiv',
            deleted: 'Durchgestrichen', underline: 'Unterstreichen', table: 'Tabelle', link: 'Link',
            undo: 'Rückgängig', redo: 'Wiederholen', style: 'Stil', config: 'Konfiguration',
            settings: 'Einstellungen', text: 'Text', embed: 'Einbetten', grid: 'Raster',
            image: 'Bild', list: 'Liste', delete: 'Löschen', duplicate: 'Duplizieren',
            sort: 'Sortieren', edit: 'Bearbeiten', inline: 'Inline'
        },
        // Block labels. The last two are contributed by the `math` and `variable`
        // plugins; the rest are core block types.
        blocks: {
            noneditable: 'Nicht bearbeitbar', paragraph: 'Absatz', heading: 'Überschrift',
            image: 'Bild', figcaption: 'Bildbeschriftung', embed: 'Einbettung',
            line: 'Linie', code: 'Code', quote: 'Zitat', quoteitem: 'Absatz',
            snippet: 'Snippet', column: 'Spalte', grid: 'Raster', list: 'Liste',
            table: 'Tabelle', layer: 'Ebene', row: 'Zeile', text: 'Text', cell: 'Zelle',
            dlist: 'Definitionsliste', address: 'Adresse', form: 'Formular', card: 'Karte',
            tags: 'Tags', math: 'Mathematik', variable: 'Variable'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Speichern', cancel: 'Abbrechen', 'edit-code': 'Code bearbeiten' },
        // buttonlink plugin
        buttonlink: { button: 'Button' },
        // carousel plugin
        carousel: { carousel: 'Karussell', save: 'Speichern', cancel: 'Abbrechen', insert: 'Einfügen' },
        // clips plugin
        clips: { clips: 'Clips' },
        // counter plugin
        counter: { words: 'Wörter', chars: 'Zeichen' },
        // filelink plugin
        filelink: {
            file: 'Datei', upload: 'Hochladen', title: 'Titel', choose: 'Auswählen',
            placeholder: 'Datei zum Hochladen hierher ziehen<br>oder zum Auswählen klicken'
        },
        // handle plugin
        handle: { handle: 'Griff' },
        // icons plugin
        icons: { icons: 'Symbole' },
        // imageposition plugin
        imageposition: { 'image-position': 'Bildposition' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Bildgröße ändern' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Inline-Format', underline: 'Unterstreichen',
            superscript: 'Hochgestellt', subscript: 'Tiefgestellt', mark: 'Markieren',
            code: 'Code', shortcut: 'Tastenkürzel', 'remove-format': 'Formatierung entfernen'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Button erstellen', 'remove-button': 'Button entfernen',
            button: 'Button'
        },
        // math plugin
        math: {
            math: 'Mathematik', label: 'Ausdruck eingeben', add: 'Hinzufügen',
            save: 'Speichern', cancel: 'Abbrechen'
        },
        // print plugin
        print: { print: 'Drucken' },
        // removeformat plugin
        removeformat: { removeformat: 'Formatierung entfernen' },
        // selector plugin
        selector: { selector: 'Selektor', save: 'Speichern', cancel: 'Abbrechen' },
        // slideshow plugin
        slideshow: { slideshow: 'Diashow', save: 'Speichern', cancel: 'Abbrechen', insert: 'Einfügen' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Sonderzeichen' },
        // style plugin
        style: { style: 'Stil', 'remove-style': 'Stil entfernen' },
        // tags plugin
        tags: {
            tags: 'Tags', add: 'Hinzufügen', save: 'Speichern', cancel: 'Abbrechen',
            label: 'Kommagetrennte Tags hinzufügen'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'Von links nach rechts', rtl: 'Von rechts nach links' },
        // variable plugin
        variable: { variable: 'Variable' }
    };
})(ArticleEditor);
