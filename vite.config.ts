import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { ViteAliases } from 'vite-aliases';
import { imagetools } from 'vite-imagetools';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import reactSvgPlugin from 'vite-plugin-react-svg';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/neo-ottawa-projet/' : '',
  plugins: [reactRefresh({
    exclude: /__generated__/,
  }), reactSvgPlugin({
    expandProps: 'start',
    svgProps: {
      onClick: '{props.onClick}',
    }
  }), ViteAliases(), imagetools()],
});
