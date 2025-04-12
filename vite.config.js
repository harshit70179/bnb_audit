import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from "vite-plugin-node-polyfills";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  nodePolyfills()],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify'
    }
  },
  server: {
    // To handle route fallback to index.html
    historyApiFallback: true,
    host:'0.0.0.0',
    port:8080
  },
});