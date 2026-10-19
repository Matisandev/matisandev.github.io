# matisandev.github.io

Currículum y portfolio personal de Matías Sandoval, publicado con GitHub Pages en
<https://matisandev.cl/> (dominio propio; también responde en <https://matisandev.github.io/>).

## Dominio propio (matisandev.cl)

El canonical, los metadatos Open Graph / JSON-LD y el enlace «Portfolio» del PDF ya apuntan a
`https://matisandev.cl/`. Para activar el dominio en GitHub Pages:

1. En el DNS de `matisandev.cl`, crea registros `A` del apex hacia `185.199.108.153`,
   `185.199.109.153`, `185.199.110.153` y `185.199.111.153`, y un `CNAME` de `www` hacia
   `matisandev.github.io`.
2. En *Settings → Pages* del repo, define `matisandev.cl` como custom domain (esto crea el
   archivo `CNAME`) y activa *Enforce HTTPS* cuando el certificado esté listo.

No agregues el archivo `CNAME` antes de que el DNS resuelva: GitHub redirigiría
`matisandev.github.io` a un dominio que aún no responde.

## Stack

Sitio estático sin build ni dependencias: HTML, CSS y JavaScript vanilla. Se mantuvo esta
arquitectura (en lugar de migrar a un framework) para que GitHub Pages siga sirviendo el sitio
directamente desde la raíz de la rama `master` y las actualizaciones de contenido sean editar HTML.

```
index.html          Página completa (hero, sobre mí, experiencia, stack, proyectos, formación, contacto)
assets/css/style.css Sistema visual: tokens de color, tarjetas, timeline, responsive
assets/js/main.js    Menú móvil, scroll spy y animaciones de aparición (IntersectionObserver)
assets/img/          Foto de perfil e íconos
assets/docs/Matias_Sandoval_CV.pdf  CV descargable (botón «Descargar CV en PDF» del hero)
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

## CV en PDF

El botón «Descargar CV en PDF» apunta a un archivo estático, `assets/docs/Matias_Sandoval_CV.pdf`,
que se versiona en el repositorio. El sitio publicado no genera nada en tiempo de ejecución.

El PDF se genera desde `tools/cv-pdf/cv.html` (contenido) y `tools/cv-pdf/cv.css` (diseño A4, fondo
blanco, acento menta del modo claro). Es HTML normal, por lo que el texto del PDF queda seleccionable y
los enlaces, clicables.

### Actualizar el PDF cuando cambie el CV

1. Edita el contenido en `index.html` como siempre.
2. Replica el mismo cambio en `tools/cv-pdf/cv.html`. Ambos archivos usan las mismas secciones
   (Sobre mí, Experiencia, Stack/Conocimientos, Proyectos, Formación/Certificaciones, Referencia) y los
   mismos textos, así que basta con copiar el párrafo, cargo o certificación correspondiente.
3. Regenera el PDF (requiere Google Chrome o Chromium instalado y conexión para cargar la fuente Inter):

   ```bash
   ./tools/cv-pdf/build.sh
   # o, si el navegador no está en el PATH:
   CHROME="/ruta/a/chrome" ./tools/cv-pdf/build.sh
   ```

4. Revisa `assets/docs/Matias_Sandoval_CV.pdf` y haz commit de `index.html`, `tools/cv-pdf/cv.html` y
   el PDF en el mismo commit para que el sitio y el PDF queden sincronizados.

Para previsualizar el diseño sin regenerar, abre `tools/cv-pdf/cv.html` en Chrome y usa la vista de
impresión (A4, márgenes predeterminados, sin encabezados ni pies del navegador).
