import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), nodePolyfills()],
  resolve: {
    alias: {
      '@libs/api': 'src/libs/api/index.ts',
      '@libs/jotai': 'src/libs/jotai/index.ts',
      '@libs/hooks': 'src/libs/hooks/index.ts',
      '@libs/helpers': 'src/libs/helpers/index.ts',
      '@libs/models': 'src/libs/models/index.ts',
    },
  },
});
