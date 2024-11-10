import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Treat .js files as JSX
    include: /\.js$/, // Only apply to .js files
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
