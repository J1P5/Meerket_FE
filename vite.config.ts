import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [["@swc/plugin-emotion", {}]],
    }),
    tsconfigPaths(),
    visualizer({
      filename: "./dist/report.html",
      open: false,
      brotliSize: true,
    }),
  ],
  define: {
    "process.env": process.env,
  },
});
