import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx()],
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});
