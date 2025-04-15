// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Your CORRECT repository name
const repoName = 'osetestsite'; // <--- Ensure this matches your GitHub repo name

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 👇 BASE PROPERTY ADDED FOR GITHUB PAGES 👇
  // Sets the public path for assets during production build
  base: `/${repoName}/`,

  server: { // Your existing server config
    host: "::",
    port: 8080,
  },
  plugins: [ // Your existing plugins
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: { // Your existing alias config
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));