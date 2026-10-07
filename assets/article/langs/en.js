/**
 * English UI language for the Bolt Article editor (Imperavi Article Editor).
 *
 * This is the canonical, editable English set. It is loaded (by
 * Bolt\Article\TwigExtension::articleIncludes) before the plugin scripts, so
 * each plugin's own `translations.en` deep-merges on top of it. Copy this file to
 * `<code>.js` and translate the values to add a language; keys left out fall back
 * to English automatically.
 *
 * The file is split into the core editor UI and, below it, one clearly labelled
 * group per plugin so related strings stay together — mirror this grouping when
 * translating so every plugin's UI is covered (plugin strings are NOT merged into
 * non-English locales at runtime; each locale must carry them itself).
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['en'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Rich text editor' },
        editor: { title: 'Article', multiple: 'Multiple' },
        placeholders: {
            figcaption: 'Type caption (optional)',
            text: 'Type something...',
            code: 'Edit to add code...',
            layer: 'Press Enter to add new text...'
        },
        popup: {
            link: 'Link', add: 'Add', grid: 'Grid', back: 'Back',
            image: 'Image', snippets: 'Snippets', 'add-image': 'Add Image'
        },
        shortcuts: {
            'meta-a': 'Select text in the block', 'meta-shift-a': 'Select all blocks',
            'meta-click': 'Select multiple blocks', 'meta-z': 'Undo', 'meta-shift-z': 'Redo',
            'meta-shift-m': 'Remove inline formatting', 'meta-b': 'Bold',
            'meta-i': 'Italic', 'meta-u': 'Underline', 'meta-h': 'Superscript',
            'meta-l': 'Subscript', 'meta-k': 'Link', 'meta-alt-0': 'Normal text',
            'meta-alt-1': 'Heading 1', 'meta-alt-2': 'Heading 2', 'meta-alt-3': 'Heading 3',
            'meta-alt-4': 'Heading 4', 'meta-alt-5': 'Heading 5', 'meta-alt-6': 'Heading 6',
            'meta-shift-7': 'Ordered List', 'meta-shift-8': 'Unordered List',
            'meta-indent': 'Indent', 'meta-outdent': 'Outdent',
            'meta-shift-backspace': 'Delete block', 'meta-shift-d': 'Duplicate block',
            'meta-shift-up': 'Move line up', 'meta-shift-down': 'Move line down'
        },
        headings: {
            h1: 'Heading 1', h2: 'Heading 2', h3: 'Heading 3',
            h4: 'Heading 4', h5: 'Heading 5', h6: 'Heading 6'
        },
        inline: { bold: 'Bold', italic: 'Italic', deleted: 'Deleted' },
        list: {
            'unordered-list': 'Unordered List', 'ordered-list': 'Ordered List',
            indent: 'Indent', outdent: 'Outdent'
        },
        link: {
            link: 'Link', 'edit-link': 'Edit link', unlink: 'Unlink',
            'link-in-new-tab': 'Open link in new tab', save: 'Save',
            insert: 'Insert', cancel: 'Cancel', text: 'Text', url: 'URL'
        },
        table: {
            width: 'Width', nowrap: 'No wrap', save: 'Save', cancel: 'Cancel',
            'table-cell': 'Table Cell', 'add-head': 'Add header',
            'remove-head': 'Remove header', 'add-row-below': 'Add row below',
            'add-row-above': 'Add row above', 'remove-row': 'Remove row',
            'add-column-after': 'Add column after', 'add-column-before': 'Add column before',
            'remove-column': 'Remove column'
        },
        image: {
            or: 'or', 'alt-text': 'Alt Text', save: 'Save', link: 'Link',
            width: 'Width', delete: 'Delete', cancel: 'Cancel', insert: 'Insert',
            caption: 'Caption', 'link-in-new-tab': 'Open link in new tab',
            'url-placeholder': 'Paste URL of image...',
            'upload-new-placeholder': 'Drag to upload a new image<br>or click to select'
        },
        code: { code: 'Code', insert: 'Insert', save: 'Save', cancel: 'Cancel' },
        embed: {
            embed: 'Embed', caption: 'Caption', insert: 'Insert', save: 'Save',
            cancel: 'Cancel',
            description: 'Paste any embed/HTML code or enter the URL (Vimeo or YouTube video only)',
            'responsive-video': 'Responsive video'
        },
        upload: { placeholder: 'Drag to upload <br>or click to select' },
        templates: { templates: 'Templates' },
        snippets: { snippets: 'Snippets' },
        form: {
            link: 'Link', url: 'URL', text: 'Text', name: 'Name',
            'alt-text': 'Alt Text', image: 'Image', upload: 'Upload',
            alignment: 'Alignment', outset: 'Outset', valign: 'Vertical alignment'
        },
        buttons: {
            'mobile-view': 'Mobile View', cancel: 'Cancel', insert: 'Insert',
            unlink: 'Unlink', save: 'Save', add: 'Add',
            'transform-to-text': 'Transform to text', align: 'Alignment', valign: 'Vertical alignment',
            outset: 'Outset', indent: 'Indent', outdent: 'Outdent', head: 'Header',
            row: 'Row', cell: 'Cell', html: 'HTML', templates: 'Templates',
            shortcuts: 'Keyboard Shortcuts', format: 'Format', bold: 'Bold', italic: 'Italic',
            deleted: 'Deleted', underline: 'Underline', table: 'Table', link: 'Link',
            undo: 'Undo', redo: 'Redo', style: 'Style', config: 'Config',
            settings: 'Settings', text: 'Text', embed: 'Embed', grid: 'Grid',
            image: 'Image', list: 'List', delete: 'Delete', duplicate: 'Duplicate',
            sort: 'Sort', edit: 'Edit', inline: 'Inline'
        },
        // Block labels. The last four are contributed by the `bulma-content`, `tags`,
        // `math` and `variable` plugins; the rest are core block types.
        blocks: {
            noneditable: 'Noneditable', paragraph: 'Paragraph', heading: 'Heading',
            image: 'Image', figcaption: 'Figcaption', embed: 'Embed',
            line: 'Line', code: 'Code', quote: 'Quote', quoteitem: 'Paragraph',
            snippet: 'Snippet', column: 'Column', grid: 'Grid', list: 'List',
            table: 'Table', layer: 'Layer', row: 'Row', text: 'Text', cell: 'Cell',
            dlist: 'Definition List', address: 'Address', form: 'Form', card: 'Card',
            content: 'Content', tags: 'Tags', math: 'Math', variable: 'Variable'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Save', cancel: 'Cancel', 'edit-code': 'Edit Code' },
        // buttonlink plugin
        buttonlink: { button: 'Button' },
        // carousel plugin
        carousel: { carousel: 'Carousel', save: 'Save', cancel: 'Cancel', insert: 'Insert' },
        // clips plugin
        clips: { clips: 'Clips' },
        // counter plugin
        counter: { words: 'words', chars: 'chars' },
        // filelink plugin
        filelink: {
            file: 'File', upload: 'Upload', title: 'Title', choose: 'Choose',
            placeholder: 'Drag to upload a file<br>or click to select'
        },
        // handle plugin
        handle: { handle: 'Handle' },
        // icons plugin
        icons: { icons: 'Icons' },
        // imageposition plugin
        imageposition: { 'image-position': 'Image position' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Image resize' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Inline Format', underline: 'Underline',
            superscript: 'Superscript', subscript: 'Subscript', mark: 'Mark',
            code: 'Code', shortcut: 'Shortcut', 'remove-format': 'Remove Format'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Make a Button', 'remove-button': 'Remove Button',
            button: 'Button'
        },
        // math plugin
        math: {
            math: 'Math', label: 'Type an expression', add: 'Add',
            save: 'Save', cancel: 'Cancel'
        },
        // print plugin
        print: { print: 'Print' },
        // removeformat plugin
        removeformat: { removeformat: 'Remove Format' },
        // selector plugin
        selector: { selector: 'Selector', save: 'Save', cancel: 'Cancel' },
        // slideshow plugin
        slideshow: { slideshow: 'Slideshow', save: 'Save', cancel: 'Cancel', insert: 'Insert' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Special Characters' },
        // style plugin
        style: { style: 'Style', 'remove-style': 'Remove Style' },
        // tags plugin
        tags: {
            tags: 'Tags', add: 'Add', save: 'Save', cancel: 'Cancel',
            label: 'Add comma-separated tags'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'Left to Right', rtl: 'Right to Left' },
        // variable plugin
        variable: { variable: 'Variable' }
    };
})(ArticleEditor);
