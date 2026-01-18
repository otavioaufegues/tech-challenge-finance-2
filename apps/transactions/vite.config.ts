import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "transactions",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
        './store': './src/store/useTransactionStore.ts',
      },
      shared: ["react", "react-dom", 'zustand'],
    }),
  ],
  build: {
    target: "esnext",
  },
});
