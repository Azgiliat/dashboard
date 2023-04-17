import path from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
      symbolId: '[name]',
      svgoOptions: {
        plugins: [
          'preset-default',
          {
            name: 'removeAttributesBySelector',
            // @ts-expect-error broken type in svgo, they don't pass any params as generic for removeAttributesBySelector plugin
            params: {
              selector: ':is(svg, path, g):not(.fill-required)',
              attributes: 'fill',
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'assets', replacement: '/src/assets' },
    ],
  },
});
