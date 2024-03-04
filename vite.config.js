import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  assetsInclude: [
    "**/*.jpg",
    "**/*.png",
    "**/*.svg",
    "**/*.gif",
    "**/*.webp",
    "**/*.mp4",
    "**/*.webm",
    "**/*.ogg",
    "**/*.mp3",
    "**/*.wav",
    "**/*.flac",
    "**/*.aac",
    "**/*.woff",
    "**/*.woff2",
    "**/*.eot",
    "**/*.ttf",
  ],
});
