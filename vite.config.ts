import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgrPlugin from "vite-plugin-svgr";
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },

  css: {
    preprocessorOptions: {
      less: {},
    },
  },
  server: {
    port: 9888,
    open: "/",
    proxy: {
      "/api": "http://localhost:8888",
      // target: "http://localhost:8888",

      //   changeOrigin: true,
      //   rewrite: (path) => {
      //     console.log(path, "------------");
      //     return path.replace(/^\/api/, "");
      //   },
      // },
    },
  },
});
