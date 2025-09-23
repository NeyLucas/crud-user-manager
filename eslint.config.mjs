import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // 1. Configuração base para JavaScript e Globals
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  // 2. Configuração recomendada para TypeScript
  tseslint.configs.recommended,

  // 3. Regras personalizadas
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },

  'prettier',
]);
