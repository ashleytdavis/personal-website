import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  assetsInclude: [
    "**/*.svg",
    "**/*.png",
    "**/*.jpg",
    "**/*.mp3",
    "**/*.wav",
    "**/*.m43",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.webp",
  ],
  build: {
    outDir: "dist",
  },
});
