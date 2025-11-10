import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          chakra: [
            "@chakra-ui/react",
            "@emotion/react",
            "@emotion/styled",
            "framer-motion",
          ],
        },
      },
    },
  },
});
