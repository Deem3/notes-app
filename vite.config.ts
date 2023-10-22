import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@utils/api': 'src/utils/api/index.ts',
      '@utils/jotai': 'src/utils/jotai/index.ts',
      '@utils/hooks': 'src/utils/hooks/index.ts',
      '@utils/helpers': 'src/utils/helpers/index.ts',
      '@utils/models': 'src/utils/models/index.ts',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
});
