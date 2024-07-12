import { fixupConfigRules } from '@eslint/compat';
import html from 'eslint-plugin-html';
import globals from 'globals';
import parser from 'vue-eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/node_modules', 'coverage', 'dist', 'tmp'],
  },
  ...fixupConfigRules(
    compat.extends(
      'plugin:@typescript-eslint/recommended',
      'plugin:vue/vue3-recommended',
      'prettier',
    ),
  ),
  {
    plugins: {
      html,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: parser,
      ecmaVersion: 2021,
      sourceType: 'module',

      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },

        node: true,
      },
    },

    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',

      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['Login'],
        },
      ],
    },
  },
  {
    files: ['**/*.spec.ts'],

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
