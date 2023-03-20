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
            name: 'removeAttrs',
            params: {
              attrs: 'fill',
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
