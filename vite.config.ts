import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), '');
const projectDir = path.resolve(__dirname);
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: env.API_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    react(),
    alias({
      entries: {
        translations: `${projectDir}/src/utils/translations/index.ts`,
        components: `${projectDir}/src/utils/components/index.ts`,
        hooks: `${projectDir}/src/utils/hooks/index.ts`,
        state: `${projectDir}/src/utils/state/index.ts`,
        model: `${projectDir}/src/utils/model/index.ts`,
      },
    }),
  ],
});
