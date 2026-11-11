# Portfolio template (Vite + React + Tailwind)

Plantilla de página de presentación personal: minimalista, colores claros y responsive.

## Cómo usarla

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # genera la carpeta dist/ lista para publicar
```

## Qué editar

**Todo el contenido está en un solo archivo: `src/data/content.js`.**
No hace falta tocar los componentes para cambiar textos, links ni habilidades.

| Quiero cambiar...            | Dónde                                                        |
| ---------------------------- | ------------------------------------------------------------ |
| Nombre, email, teléfono      | `profile` en `src/data/content.js`                           |
| Links de LinkedIn y GitHub   | `profile.linkedin` y `profile.github`                        |
| Mi foto                      | Copiá la imagen a `public/` y poné el nombre en `profile.photo` (o `null` para mostrar iniciales) |
| Mi CV técnico                | Copiá tu PDF a `public/cv-tecnico.pdf` (o cambiá `profile.cv`) |
| Sobre mí, formación, exp.    | `about`                                                      |
| Habilidades                  | `skills` (podés agregar grupos nuevos)                       |
| Proyectos                    | `projects`                                                   |

## Agregar un proyecto nuevo

1. Copiá tus capturas a `public/capturas/` (por ejemplo `mi-proyecto-1.png`).
2. En `src/data/content.js`, dentro de `projects`, copiá un bloque `{ ... }`, pegalo debajo (separado por coma) y completá los datos:

```js
{
  title: "Mi nuevo proyecto",
  images: ["capturas/mi-proyecto-1.png", "capturas/mi-proyecto-2.png"],
  description: "Qué hace el proyecto.",
  learned: "Qué aprendí haciéndolo.",
  tech: ["Python", "Flask"],
  repo: "https://github.com/tu-usuario/mi-proyecto",
  demo: "",
},
```

Las tarjetas se acomodan solas: con un proyecto queda una tarjeta centrada, con dos o más pasan a dos columnas. El orden del resto de la página no cambia.

## Detalles

- **Email:** al hacer clic se abre Gmail en una pestaña nueva con el mensaje listo para escribir.
- **Teléfono:** en celular abre la app de llamadas.
- **CV:** el botón descarga el PDF de `public/`.
- **Colores:** la plantilla usa los tonos `indigo` y `slate` de Tailwind. Para cambiar el acento, reemplazá `indigo` por otro color (por ejemplo `emerald` o `sky`) en los componentes.

## Si da error de "Control de aplicaciones" (Windows)

Algunas PCs (de la facultad, del trabajo o con Smart App Control) bloquean los archivos nativos `.node`. Esta plantilla ya los evita:

- Usa **Tailwind v3** (JavaScript puro) en vez de v4, que trae binarios nativos.
- Reemplaza Rollup por su versión WebAssembly mediante `overrides` en `package.json`.

Si venís de una versión anterior, borrá `node_modules` y `package-lock.json` y volvé a correr `npm install`.

## Publicarla gratis

- **Vercel o Netlify:** subí el proyecto a GitHub, importalo desde su panel y listo (build: `npm run build`, carpeta de salida: `dist`).
- **GitHub Pages:** corré `npm run build` y publicá el contenido de `dist/` (por ejemplo con la rama `gh-pages`). El proyecto ya usa rutas relativas (`base: "./"`), así que funciona en subcarpetas.
