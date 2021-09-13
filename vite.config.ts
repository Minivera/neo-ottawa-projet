import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { ViteAliases } from 'vite-aliases';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [reactRefresh(), ViteAliases(), imagetools()],
});
