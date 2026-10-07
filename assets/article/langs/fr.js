/**
 * French (fr) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleIncludes before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 *
 * Structure mirrors en.js: the core editor UI first, then one clearly labelled
 * group per plugin. Plugin strings are NOT merged into non-English locales at
 * runtime, so every plugin group must be carried here to be shown in French.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['fr'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Éditeur de texte enrichi' },
        editor: { title: 'Article', multiple: 'Sélection multiple' },
        placeholders: {
            figcaption: 'Saisir une légende (facultatif)',
            text: 'Saisissez quelque chose...',
            code: 'Modifiez pour ajouter du code...',
            layer: 'Appuyez sur Entrée pour ajouter du texte...'
        },
        popup: {
            link: 'Lien', add: 'Ajouter', grid: 'Grille', back: 'Retour',
            image: 'Image', snippets: 'Extraits', 'add-image': 'Ajouter une image'
        },
        shortcuts: {
            'meta-a': 'Sélectionner le texte dans le bloc', 'meta-shift-a': 'Sélectionner tous les blocs',
            'meta-click': 'Sélectionner plusieurs blocs', 'meta-z': 'Annuler', 'meta-shift-z': 'Rétablir',
            'meta-shift-m': 'Supprimer la mise en forme en ligne', 'meta-b': 'Gras',
            'meta-i': 'Italique', 'meta-u': 'Souligné', 'meta-h': 'Exposant',
            'meta-l': 'Indice', 'meta-k': 'Lien', 'meta-alt-0': 'Texte normal',
            'meta-alt-1': 'Titre 1', 'meta-alt-2': 'Titre 2', 'meta-alt-3': 'Titre 3',
            'meta-alt-4': 'Titre 4', 'meta-alt-5': 'Titre 5', 'meta-alt-6': 'Titre 6',
            'meta-shift-7': 'Liste ordonnée', 'meta-shift-8': 'Liste non ordonnée',
            'meta-indent': 'Augmenter le retrait', 'meta-outdent': 'Diminuer le retrait',
            'meta-shift-backspace': 'Supprimer le bloc', 'meta-shift-d': 'Dupliquer le bloc',
            'meta-shift-up': 'Déplacer la ligne vers le haut', 'meta-shift-down': 'Déplacer la ligne vers le bas'
        },
        headings: {
            h1: 'Titre 1', h2: 'Titre 2', h3: 'Titre 3',
            h4: 'Titre 4', h5: 'Titre 5', h6: 'Titre 6'
        },
        inline: { bold: 'Gras', italic: 'Italique', deleted: 'Barré' },
        list: {
            'unordered-list': 'Liste non ordonnée', 'ordered-list': 'Liste ordonnée',
            indent: 'Augmenter le retrait', outdent: 'Diminuer le retrait'
        },
        link: {
            link: 'Lien', 'edit-link': 'Modifier le lien', unlink: 'Supprimer le lien',
            'link-in-new-tab': 'Ouvrir le lien dans un nouvel onglet', save: 'Enregistrer',
            insert: 'Insérer', cancel: 'Annuler', text: 'Texte', url: 'URL'
        },
        table: {
            width: 'Largeur', nowrap: 'Sans retour à la ligne', save: 'Enregistrer', cancel: 'Annuler',
            'table-cell': 'Cellule de tableau', 'add-head': 'Ajouter un en-tête',
            'remove-head': 'Supprimer l’en-tête', 'add-row-below': 'Ajouter une ligne dessous',
            'add-row-above': 'Ajouter une ligne dessus', 'remove-row': 'Supprimer la ligne',
            'add-column-after': 'Ajouter une colonne après', 'add-column-before': 'Ajouter une colonne avant',
            'remove-column': 'Supprimer la colonne'
        },
        image: {
            or: 'ou', 'alt-text': 'Texte alternatif', save: 'Enregistrer', link: 'Lien',
            width: 'Largeur', delete: 'Supprimer', cancel: 'Annuler', insert: 'Insérer',
            caption: 'Légende', 'link-in-new-tab': 'Ouvrir le lien dans un nouvel onglet',
            'url-placeholder': 'Coller l’URL de l’image...',
            'upload-new-placeholder': 'Glissez pour téléverser une nouvelle image<br>ou cliquez pour sélectionner'
        },
        code: { code: 'Code', insert: 'Insérer', save: 'Enregistrer', cancel: 'Annuler' },
        embed: {
            embed: 'Intégration', caption: 'Légende', insert: 'Insérer', save: 'Enregistrer',
            cancel: 'Annuler',
            description: 'Collez un code d’intégration/HTML ou saisissez l’URL (vidéo Vimeo ou YouTube uniquement)',
            'responsive-video': 'Vidéo responsive'
        },
        upload: { placeholder: 'Glissez pour téléverser <br>ou cliquez pour sélectionner' },
        templates: { templates: 'Modèles' },
        snippets: { snippets: 'Extraits' },
        form: {
            link: 'Lien', url: 'URL', text: 'Texte', name: 'Nom',
            'alt-text': 'Texte alternatif', image: 'Image', upload: 'Téléverser',
            alignment: 'Alignement', outset: 'Débord', valign: 'Alignement vertical'
        },
        buttons: {
            'mobile-view': 'Vue mobile', cancel: 'Annuler', insert: 'Insérer',
            unlink: 'Supprimer le lien', save: 'Enregistrer', add: 'Ajouter',
            'transform-to-text': 'Transformer en texte', align: 'Alignement', valign: 'Alignement vertical',
            outset: 'Débord', indent: 'Augmenter le retrait', outdent: 'Diminuer le retrait', head: 'En-tête',
            row: 'Ligne', cell: 'Cellule', html: 'HTML', templates: 'Modèles',
            shortcuts: 'Raccourcis clavier', format: 'Format', bold: 'Gras', italic: 'Italique',
            deleted: 'Barré', underline: 'Souligné', table: 'Tableau', link: 'Lien',
            undo: 'Annuler', redo: 'Rétablir', style: 'Style', config: 'Configuration',
            settings: 'Paramètres', text: 'Texte', embed: 'Intégration', grid: 'Grille',
            image: 'Image', list: 'Liste', delete: 'Supprimer', duplicate: 'Dupliquer',
            sort: 'Trier', edit: 'Modifier', inline: 'En ligne'
        },
        // Block labels. The last four are contributed by the `bulma-content`, `tags`,
        // `math` and `variable` plugins; the rest are core block types.
        blocks: {
            noneditable: 'Non modifiable', paragraph: 'Paragraphe', heading: 'Titre',
            image: 'Image', figcaption: 'Légende d’image', embed: 'Intégration',
            line: 'Ligne horizontale', code: 'Code', quote: 'Citation', quoteitem: 'Paragraphe',
            snippet: 'Extrait', column: 'Colonne', grid: 'Grille', list: 'Liste',
            table: 'Tableau', layer: 'Calque', row: 'Ligne', text: 'Texte', cell: 'Cellule',
            dlist: 'Liste de définitions', address: 'Adresse', form: 'Formulaire', card: 'Carte',
            content: 'Contenu', tags: 'Étiquettes', math: 'Formule', variable: 'Variable'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Enregistrer', cancel: 'Annuler', 'edit-code': 'Modifier le code' },
        // buttonlink plugin
        buttonlink: { button: 'Bouton' },
        // carousel plugin
        carousel: { carousel: 'Carrousel', save: 'Enregistrer', cancel: 'Annuler', insert: 'Insérer' },
        // clips plugin
        clips: { clips: 'Clips' },
        // counter plugin
        counter: { words: 'mots', chars: 'caractères' },
        // filelink plugin
        filelink: {
            file: 'Fichier', upload: 'Téléverser', title: 'Titre', choose: 'Choisir',
            placeholder: 'Glissez pour téléverser un fichier<br>ou cliquez pour sélectionner'
        },
        // handle plugin
        handle: { handle: 'Handle' },
        // icons plugin
        icons: { icons: 'Icônes' },
        // imageposition plugin
        imageposition: { 'image-position': 'Position de l’image' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Redimensionnement de l’image' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Format en ligne', underline: 'Souligné',
            superscript: 'Exposant', subscript: 'Indice', mark: 'Surlignage',
            code: 'Code', shortcut: 'Raccourci', 'remove-format': 'Supprimer la mise en forme'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Créer un bouton', 'remove-button': 'Supprimer le bouton',
            button: 'Bouton'
        },
        // math plugin
        math: {
            math: 'Formule', label: 'Saisir une expression', add: 'Ajouter',
            save: 'Enregistrer', cancel: 'Annuler'
        },
        // print plugin
        print: { print: 'Imprimer' },
        // removeformat plugin
        removeformat: { removeformat: 'Supprimer la mise en forme' },
        // selector plugin
        selector: { selector: 'Sélecteur', save: 'Enregistrer', cancel: 'Annuler' },
        // slideshow plugin
        slideshow: { slideshow: 'Diaporama', save: 'Enregistrer', cancel: 'Annuler', insert: 'Insérer' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Caractères spéciaux' },
        // style plugin
        style: { style: 'Style', 'remove-style': 'Supprimer le style' },
        // tags plugin
        tags: {
            tags: 'Étiquettes', add: 'Ajouter', save: 'Enregistrer', cancel: 'Annuler',
            label: 'Ajouter des étiquettes séparées par des virgules'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'De gauche à droite', rtl: 'De droite à gauche' },
        // variable plugin
        variable: { variable: 'Variable' }
    };
})(ArticleEditor);
