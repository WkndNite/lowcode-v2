import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const globalLessPath = path.resolve(__dirname, "src/assets/styles/index.less");

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${globalLessPath}";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    watch: {
      // 监听UI包的变化
      ignored: ["!../../packages/ui/dist/**/*"],
    },
  },
});
