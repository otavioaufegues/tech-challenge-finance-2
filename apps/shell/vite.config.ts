import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        transactions: "http://localhost:5171/assets/remoteEntry.js",
        analytics: "http://localhost:5172/assets/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        zustand: { singleton: true },
      } as any,
    }),
  ],
  build: {
    target: "esnext",
  },
});
