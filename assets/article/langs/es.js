/**
 * Spanish (es) UI language for the Bolt Article editor.
 *
 * Loaded by Bolt\Article\TwigExtension::articleLangInclude before the plugin
 * scripts. Keys left out fall back to English (see en.js) automatically.
 *
 * Structure mirrors en.js: the core editor UI first, then one clearly labelled
 * group per plugin. Plugin strings are NOT merged into non-English locales at
 * runtime, so every plugin group must be carried here to be shown in Spanish.
 */
(function (AE) {
    AE.lang = AE.lang || {};
    AE.lang['es'] = {
        // ─────────────────────────────────────────────────────────────
        // Core editor UI
        // ─────────────────────────────────────────────────────────────
        accessibility: { 'help-label': 'Editor de texto enriquecido' },
        editor: { title: 'Artículo', multiple: 'Varios bloques' },
        placeholders: {
            figcaption: 'Escribe una leyenda (opcional)',
            text: 'Escribe algo...',
            code: 'Edita para añadir código...',
            layer: 'Pulsa Intro para añadir texto...'
        },
        popup: {
            link: 'Enlace', add: 'Añadir', grid: 'Cuadrícula', back: 'Atrás',
            image: 'Imagen', snippets: 'Fragmentos', 'add-image': 'Añadir imagen'
        },
        shortcuts: {
            'meta-a': 'Seleccionar texto en el bloque', 'meta-shift-a': 'Seleccionar todos los bloques',
            'meta-click': 'Seleccionar varios bloques', 'meta-z': 'Deshacer', 'meta-shift-z': 'Rehacer',
            'meta-shift-m': 'Eliminar formato en línea', 'meta-b': 'Negrita',
            'meta-i': 'Cursiva', 'meta-u': 'Subrayado', 'meta-h': 'Superíndice',
            'meta-l': 'Subíndice', 'meta-k': 'Enlace', 'meta-alt-0': 'Texto normal',
            'meta-alt-1': 'Encabezado 1', 'meta-alt-2': 'Encabezado 2', 'meta-alt-3': 'Encabezado 3',
            'meta-alt-4': 'Encabezado 4', 'meta-alt-5': 'Encabezado 5', 'meta-alt-6': 'Encabezado 6',
            'meta-shift-7': 'Lista ordenada', 'meta-shift-8': 'Lista sin ordenar',
            'meta-indent': 'Aumentar sangría', 'meta-outdent': 'Reducir sangría',
            'meta-shift-backspace': 'Eliminar bloque', 'meta-shift-d': 'Duplicar bloque',
            'meta-shift-up': 'Mover línea arriba', 'meta-shift-down': 'Mover línea abajo'
        },
        headings: {
            h1: 'Encabezado 1', h2: 'Encabezado 2', h3: 'Encabezado 3',
            h4: 'Encabezado 4', h5: 'Encabezado 5', h6: 'Encabezado 6'
        },
        inline: { bold: 'Negrita', italic: 'Cursiva', deleted: 'Tachado' },
        list: {
            'unordered-list': 'Lista sin ordenar', 'ordered-list': 'Lista ordenada',
            indent: 'Aumentar sangría', outdent: 'Reducir sangría'
        },
        link: {
            link: 'Enlace', 'edit-link': 'Editar enlace', unlink: 'Quitar enlace',
            'link-in-new-tab': 'Abrir enlace en una pestaña nueva', save: 'Guardar',
            insert: 'Insertar', cancel: 'Cancelar', text: 'Texto', url: 'URL'
        },
        table: {
            width: 'Ancho', nowrap: 'Sin ajuste de línea', save: 'Guardar', cancel: 'Cancelar',
            'table-cell': 'Celda de tabla', 'add-head': 'Añadir encabezado',
            'remove-head': 'Quitar encabezado', 'add-row-below': 'Añadir fila debajo',
            'add-row-above': 'Añadir fila encima', 'remove-row': 'Eliminar fila',
            'add-column-after': 'Añadir columna después', 'add-column-before': 'Añadir columna antes',
            'remove-column': 'Eliminar columna'
        },
        image: {
            or: 'o', 'alt-text': 'Texto alternativo', save: 'Guardar', link: 'Enlace',
            width: 'Ancho', delete: 'Eliminar', cancel: 'Cancelar', insert: 'Insertar',
            caption: 'Leyenda', 'link-in-new-tab': 'Abrir enlace en una pestaña nueva',
            'url-placeholder': 'Pega la URL de la imagen...',
            'upload-new-placeholder': 'Arrastra para subir una nueva imagen<br>o haz clic para seleccionar'
        },
        code: { code: 'Código', insert: 'Insertar', save: 'Guardar', cancel: 'Cancelar' },
        embed: {
            embed: 'Incrustar', caption: 'Leyenda', insert: 'Insertar', save: 'Guardar',
            cancel: 'Cancelar',
            description: 'Pega cualquier código de incrustación/HTML o introduce la URL (solo vídeo de Vimeo o YouTube)',
            'responsive-video': 'Vídeo adaptable'
        },
        upload: { placeholder: 'Arrastra para subir <br>o haz clic para seleccionar' },
        templates: { templates: 'Plantillas' },
        snippets: { snippets: 'Fragmentos' },
        form: {
            link: 'Enlace', url: 'URL', text: 'Texto', name: 'Nombre',
            'alt-text': 'Texto alternativo', image: 'Imagen', upload: 'Subir',
            alignment: 'Alineación', outset: 'Saliente', valign: 'Alineación vertical'
        },
        buttons: {
            'mobile-view': 'Vista móvil', cancel: 'Cancelar', insert: 'Insertar',
            unlink: 'Quitar enlace', save: 'Guardar', add: 'Añadir',
            'transform-to-text': 'Transformar en texto', align: 'Alineación', valign: 'Alineación vertical',
            outset: 'Saliente', indent: 'Aumentar sangría', outdent: 'Reducir sangría', head: 'Encabezado',
            row: 'Fila', cell: 'Celda', html: 'HTML', templates: 'Plantillas',
            shortcuts: 'Atajos de teclado', format: 'Formato', bold: 'Negrita', italic: 'Cursiva',
            deleted: 'Tachado', underline: 'Subrayado', table: 'Tabla', link: 'Enlace',
            undo: 'Deshacer', redo: 'Rehacer', style: 'Estilo', config: 'Configuración',
            settings: 'Ajustes', text: 'Texto', embed: 'Incrustar', grid: 'Cuadrícula',
            image: 'Imagen', list: 'Lista', delete: 'Eliminar', duplicate: 'Duplicar',
            sort: 'Ordenar', edit: 'Editar', inline: 'En línea'
        },
        // Block labels. The last four are contributed by the `bulma-content`, `tags`,
        // `math` and `variable` plugins; the rest are core block types.
        blocks: {
            noneditable: 'No editable', paragraph: 'Párrafo', heading: 'Encabezado',
            image: 'Imagen', figcaption: 'Leyenda de imagen', embed: 'Contenido incrustado',
            line: 'Línea', code: 'Código', quote: 'Cita', quoteitem: 'Párrafo',
            snippet: 'Fragmento', column: 'Columna', grid: 'Cuadrícula', list: 'Lista',
            table: 'Tabla', layer: 'Capa', row: 'Fila', text: 'Texto', cell: 'Celda',
            dlist: 'Lista de definiciones', address: 'Dirección', form: 'Formulario', card: 'Tarjeta',
            content: 'Contenido', tags: 'Etiquetas', math: 'Fórmula', variable: 'Variable'
        },

        // ─────────────────────────────────────────────────────────────
        // Plugin UI — one group per plugin (alphabetical)
        // ─────────────────────────────────────────────────────────────
        // blockcode plugin
        blockcode: { save: 'Guardar', cancel: 'Cancelar', 'edit-code': 'Editar código' },
        // buttonlink plugin
        buttonlink: { button: 'Botón' },
        // carousel plugin
        carousel: { carousel: 'Carrusel', save: 'Guardar', cancel: 'Cancelar', insert: 'Insertar' },
        // clips plugin
        clips: { clips: 'Clips' },
        // counter plugin
        counter: { words: 'palabras', chars: 'caracteres' },
        // filelink plugin
        filelink: {
            file: 'Archivo', upload: 'Subir', title: 'Título', choose: 'Elegir',
            placeholder: 'Arrastra para subir un archivo<br>o haz clic para seleccionar'
        },
        // handle plugin
        handle: { handle: 'Handle' },
        // icons plugin
        icons: { icons: 'Iconos' },
        // imageposition plugin
        imageposition: { 'image-position': 'Posición de la imagen' },
        // imageresize plugin
        imageresize: { 'image-resize': 'Cambiar tamaño de imagen' },
        // inlineformat plugin
        inlineformat: {
            'inline-format': 'Formato en línea', underline: 'Subrayado',
            superscript: 'Superíndice', subscript: 'Subíndice', mark: 'Resaltado',
            code: 'Código', shortcut: 'Atajo', 'remove-format': 'Eliminar formato'
        },
        // makebutton plugin
        makebutton: {
            'make-a-button': 'Crear un botón', 'remove-button': 'Eliminar botón',
            button: 'Botón'
        },
        // math plugin
        math: {
            math: 'Fórmula', label: 'Escribe una expresión', add: 'Añadir',
            save: 'Guardar', cancel: 'Cancelar'
        },
        // print plugin
        print: { print: 'Imprimir' },
        // removeformat plugin
        removeformat: { removeformat: 'Eliminar formato' },
        // selector plugin
        selector: { selector: 'Selector', save: 'Guardar', cancel: 'Cancelar' },
        // slideshow plugin
        slideshow: { slideshow: 'Presentación', save: 'Guardar', cancel: 'Cancelar', insert: 'Insertar' },
        // specialchars plugin
        specialchars: { 'special-chars': 'Caracteres especiales' },
        // style plugin
        style: { style: 'Estilo', 'remove-style': 'Eliminar estilo' },
        // tags plugin
        tags: {
            tags: 'Etiquetas', add: 'Añadir', save: 'Guardar', cancel: 'Cancelar',
            label: 'Añade etiquetas separadas por comas'
        },
        // textdirection plugin
        textdirection: { title: 'RTL-LTR', ltr: 'De izquierda a derecha', rtl: 'De derecha a izquierda' },
        // variable plugin
        variable: { variable: 'Variable' }
    };
})(ArticleEditor);
