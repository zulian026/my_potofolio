import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ghPages } from "vite-plugin-gh-pages"; // ← tambahkan ini

// https://vite.dev/config/
export default defineConfig({
  base: "/my_potofolio/",
  plugins: [react(), ghPages(), tailwindcss(), react()],
});
