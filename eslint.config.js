import eslintConfigPrettier from 'eslint-config-prettier';
import eslintVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import eslintJs from '@eslint/js';

export default [
  {
    ignores: ['**/node_modules', 'coverage', 'dist', 'tmp'],
  },
  eslintJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: tseslint.parser,
      },
    },

    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['Login'],
        },
      ],
    },
  },
  // {
  //   files: ['**/*.spec.ts'],
  //   rules: {
  //     '@typescript-eslint/no-explicit-any': 'off',
  //   },
  // },
];
