// Devuelve la ruta correcta a un archivo de la carpeta /public,
// sin importar dónde quede publicado el sitio.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
