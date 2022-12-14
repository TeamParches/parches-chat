import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/parches-chat/",
  plugins: [react()],
  server: { port: 3000, host: "0.0.0.0" },
  build: {
    chunkSizeWarningLimit: 1600
  }
})
