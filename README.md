# matisandev.github.io

Currículum y portfolio personal de Matías Sandoval, publicado con GitHub Pages en
<https://matisandev.github.io/>.

## Stack

Sitio estático sin build ni dependencias: HTML, CSS y JavaScript vanilla. Se mantuvo esta
arquitectura (en lugar de migrar a un framework) para que GitHub Pages siga sirviendo el sitio
directamente desde la raíz de la rama `master` y las actualizaciones de contenido sean editar HTML.

```
index.html          Página completa (hero, sobre mí, experiencia, stack, proyectos, formación, contacto)
assets/css/style.css Sistema visual: tokens de color, tarjetas, timeline, responsive
assets/js/main.js    Menú móvil, scroll spy y animaciones de aparición (IntersectionObserver)
assets/img/          Foto de perfil e íconos
```

## Desarrollo local

```bash
python3 -m http.server 8000
```

Luego abrir <http://localhost:8000>.

## Actualizar el contenido

Todo el contenido vive en `index.html`. Las secciones están marcadas con comentarios
(`<!-- ======= Experiencia ======= -->`) para ubicarlas rápido.
