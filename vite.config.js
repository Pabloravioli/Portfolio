import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base './' hace que el sitio funcione en Vercel, Netlify y GitHub Pages
// (incluso cuando queda en una subcarpeta tipo usuario.github.io/portfolio).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
