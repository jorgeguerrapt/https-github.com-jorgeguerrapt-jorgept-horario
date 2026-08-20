# HORARIOS PT/AL — versión web

Esta carpeta contiene la versión web de la aplicación HORARIOS PT/AL.

## Uso local

Abre `index.html` en un navegador. Para obtener la máxima compatibilidad con lectura de DOCX/imágenes y generación de archivos, es recomendable servir la carpeta mediante un servidor local (por ejemplo, VS Code Live Server) o publicarla en GitHub Pages.

## GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube `index.html`, `manifest.webmanifest` y `sw.js`.
3. Activa GitHub Pages desde Settings → Pages.
4. Selecciona la rama que contiene los archivos y la carpeta `/root`.
5. La aplicación quedará disponible en la URL de GitHub Pages que GitHub te indique.

## Wix

La opción más estable es publicar primero la aplicación en GitHub Pages y después incrustar su URL HTTPS en Wix mediante un elemento de HTML/iFrame.

Ejemplo:

```html
<iframe
  src="https://TU_USUARIO.github.io/TU_REPOSITORIO/"
  width="100%"
  height="1200"
  style="border:0;border-radius:16px;overflow:hidden;"
  allow="clipboard-write">
</iframe>
```

## Dependencias

La aplicación utiliza bibliotecas JavaScript cargadas por HTTPS desde CDN para ZIP, Excel y OCR. Por ello, cuando se use desde GitHub Pages/Wix debe existir conexión a Internet.
