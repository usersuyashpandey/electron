import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 5000000,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  },
  resolve: {
    browserField: false,
    mainFields: ["module", "jsnext:main", "jsnext"],
  },
});
