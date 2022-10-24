import { defineConfig } from "vite"

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
  },
  server: {
    open: true,
    port: 3001 || 3002,
  },
  optimizeDeps: {
    force: true,
  },
})
