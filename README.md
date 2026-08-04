# 🌸 La Librería de los Pétalos

Una escena interactiva de estilo anime *cozy* japonés: una librería bajo los
cerezos en flor, con pétalos flotando suavemente y **7 libros escondidos**
por la escena (en el tejado, las mesas, las sillas y la estantería). Al
hacer clic en uno, se abre su ficha con título, autor, sinopsis y
puntuación.

## 📁 Estructura del proyecto

```
├── index.html          → la página principal
├── css/
│   └── style.css        → todos los estilos (colores, tipografía, animaciones)
├── js/
│   ├── books-data.js     → 🔑 aquí editas los libros (título, sinopsis, puntuación, posición)
│   ├── petals.js         → animación de los pétalos cayendo
│   └── app.js             → lógica de los libros escondidos y la ficha
└── assets/
    └── escena-libreria.jpg → tu imagen de fondo
```

## ✏️ Cómo cambiar los libros

Abre `js/books-data.js`. Cada libro es un objeto con:

- `title`, `author`, `synopsis`, `rating` (de 0 a 5, admite decimales como `4.5`)
- `x`, `y` → posición sobre la imagen, en **porcentaje** (0-100). Por ejemplo
  `x: 50, y: 50` lo coloca justo en el centro de la escena.
- `size` → tamaño del icono en píxeles (opcional).

Para mover un libro, cambia `x`/`y` y recarga la página en el navegador para
ver dónde cae. No hace falta tocar ningún otro archivo.

## 🌸 Cómo ajustar los pétalos

En `js/petals.js`, la constante `PETAL_COUNT` controla cuántos pétalos hay a
la vez. Dentro de `makePetal()` puedes ajustar `speed` (velocidad de caída)
y `sway` (amplitud del balanceo lateral) para que caigan más rápido/lento o
se muevan más/menos.

## 💻 Probarlo en tu ordenador antes de subirlo

No hace falta ningún programa especial. Basta con abrir `index.html`
haciendo doble clic, o bien, para evitar problemas de rutas en algunos
navegadores, servirlo con un mini servidor local:

```bash
# Desde la carpeta del proyecto
python3 -m http.server 8000
# y abre http://localhost:8000 en el navegador
```

## 🚀 Subirlo a GitHub y publicarlo con GitHub Pages

### Opción A: desde la web de GitHub (sin usar la terminal)

1. Entra en [github.com](https://github.com) y pulsa **New repository**.
2. Ponle un nombre (por ejemplo `libreria-de-los-petalos`) y créalo
   (puede ser público).
3. Dentro del repositorio recién creado, pulsa **Add file → Upload files**.
4. Arrastra **toda la carpeta del proyecto** (o todos sus archivos y
   subcarpetas: `index.html`, `css/`, `js/`, `assets/`) a la ventana de
   subida y confirma con **Commit changes**.
5. Ve a **Settings → Pages** (menú lateral izquierdo).
6. En **Source**, elige la rama `main` y la carpeta `/ (root)`, y guarda.
7. Espera un minuto y GitHub te dará una URL del tipo
   `https://tu-usuario.github.io/libreria-de-los-petalos/` — esa es tu web
   publicada. 🎉

### Opción B: con git desde la terminal

```bash
cd libreria-de-los-petalos   # la carpeta del proyecto
git init
git add .
git commit -m "Primera versión de la librería de los pétalos"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/libreria-de-los-petalos.git
git push -u origin main
```

Después repite los pasos 5-7 de la Opción A para activar GitHub Pages.

## ♿ Notas

- Respeta la preferencia del sistema "reducir movimiento": si el usuario la
  tiene activada, los pétalos no se animan.
- Los libros son accesibles por teclado (tabulación + Enter/Espacio) y cada
  uno tiene una etiqueta descriptiva para lectores de pantalla.
