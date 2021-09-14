import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { ViteAliases } from 'vite-aliases';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/neo-ottawa-projet/' : '',
  plugins: [reactRefresh(), ViteAliases(), imagetools()],
});
