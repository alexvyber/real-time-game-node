import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // "xmlhttprequest-ssl":
    // "./node_modules/engine.io-client/lib/xmlhttprequest.js",
  },
  server: {
    port: 4000,
  },
  plugins: [react()],
});
