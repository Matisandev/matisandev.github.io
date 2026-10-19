# matisandev.github.io

Currículum y portfolio personal de Matías Sandoval, publicado en Vercel en
<https://www.matisandev.cl/> (también en <https://matisandev.vercel.app/>).

## Despliegue

Vercel despliega automáticamente la rama `master`. El dominio `www.matisandev.cl` se gestiona
en Vercel; el canonical, los metadatos Open Graph / JSON-LD y el enlace «Portfolio» del PDF
apuntan a `https://www.matisandev.cl/`. No se usa archivo `CNAME` de GitHub Pages.

## Stack

Sitio estático sin build ni dependencias: HTML, CSS y JavaScript vanilla. Se mantuvo esta
arquitectura (en lugar de migrar a un framework) para que Vercel siga sirviendo el sitio
directamente desde la raíz de la rama `master` y las actualizaciones de contenido sean editar HTML.

```
index.html          Página completa (hero, sobre mí, experiencia, stack, proyectos, formación, contacto)
assets/css/style.css Sistema visual: tokens de color, tarjetas, timeline, responsive
assets/js/i18n.js    Traducciones ES · EN · PT del sitio y del PDF (selector de idioma del header)
assets/js/main.js    Menú móvil, selector de idioma, scroll spy y animaciones de aparición
assets/img/          Foto de perfil, favicon y apple-touch-icon (marca «MS»)
assets/docs/         CV descargable en ES, EN y PT (botón «Descargar CV en PDF» del hero)
tools/cv-pdf/        Fuente del PDF (cv.html + cv.css) y script de generación build.sh
```

## Desarrollo local

```bash
python3 -m http.server 8000
```

Luego abrir <http://localhost:8000>.

## Actualizar el contenido

Todo el contenido vive en `index.html`. Las secciones están marcadas con comentarios
(`<!-- ======= Experiencia ======= -->`) para ubicarlas rápido.

## Idiomas

El header tiene un selector discreto ES / EN / PT. El HTML se escribe en español y
`assets/js/i18n.js` traduce cada texto y atributo visible buscando el texto en español en su
diccionario (`ENTRIES`: `[español, inglés, portugués]`). Lo que no está en el diccionario (nombres
propios, tecnologías, correos) queda igual. La elección se guarda en `localStorage` y también se
puede forzar con `?lang=en` o `?lang=pt`.

Si cambias un texto en español en `index.html` o `tools/cv-pdf/cv.html`, actualiza la entrada
correspondiente en `assets/js/i18n.js` (si no, ese texto aparecerá en español en EN/PT).

## CV en PDF

El botón «Descargar CV en PDF» apunta a un archivo estático según el idioma elegido:
`assets/docs/Matias_Sandoval_CV.pdf` (ES), `Matias_Sandoval_CV_EN.pdf` y `Matias_Sandoval_CV_PT.pdf`,
que se versionan en el repositorio. El sitio publicado no genera nada en tiempo de ejecución.

El PDF se genera desde `tools/cv-pdf/cv.html` (contenido) y `tools/cv-pdf/cv.css` (diseño A4, fondo
blanco, acento menta del modo claro). Las versiones EN y PT salen del mismo `cv.html` abierto con
`?lang=en|pt`, usando las traducciones de `assets/js/i18n.js`. Es HTML normal, por lo que el texto del PDF queda seleccionable y
los enlaces, clicables.

### Actualizar el PDF cuando cambie el CV

1. Edita el contenido en `index.html` como siempre.
2. Replica el mismo cambio en `tools/cv-pdf/cv.html`. Ambos archivos usan las mismas secciones
   (Sobre mí, Experiencia, Stack/Conocimientos, Proyectos, Formación/Certificaciones, Referencia) y los
   mismos textos, así que basta con copiar el párrafo, cargo o certificación correspondiente.
3. Si cambiaste textos, actualiza sus traducciones en `assets/js/i18n.js`.
4. Regenera los tres PDF (requiere Google Chrome o Chromium instalado y conexión para cargar la fuente Inter):

   ```bash
   ./tools/cv-pdf/build.sh
   # o, si el navegador no está en el PATH:
   CHROME="/ruta/a/chrome" ./tools/cv-pdf/build.sh
   ```

5. Revisa los PDF de `assets/docs/` y haz commit de `index.html`, `tools/cv-pdf/cv.html`,
   `assets/js/i18n.js` y los PDF en el mismo commit para que el sitio y el PDF queden sincronizados.

Para previsualizar el diseño sin regenerar, abre `tools/cv-pdf/cv.html` en Chrome y usa la vista de
impresión (A4, márgenes predeterminados, sin encabezados ni pies del navegador).
