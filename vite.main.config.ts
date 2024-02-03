import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: { chunkSizeWarningLimit: 1000000 },
  resolve: {
    browserField: false,
    mainFields: ["module", "jsnext:main", "jsnext"],
  },
});
