import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "lib/index.ts"),
      name: "@leep/carousel",
      // the proper extensions will be added
      fileName: "lib/index",
    },
  },
  plugins: [dts()],
});
