
// eslint.config.cjs

const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  // Base JS rules
  js.configs.recommended,

  // TS/Nest-style project settings
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['dist/**', 'coverage/**', 'node_modules/**'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022
        // If you later want type-aware rules, you can add:
        // project: ['./tsconfig.json'],
        // tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Example TS rules – tune as you like
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
