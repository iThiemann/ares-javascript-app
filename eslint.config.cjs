
// eslint.config.cjs (CommonJS flat config bridging .eslintrc.*)

const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const path = require('path');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  // Start from ESLint's recommended base
  js.configs.recommended,

  // Reuse your old .eslintrc.* configuration
  ...compat.config({
    extends: ['./.eslintrc.json'], // or .eslintrc.js / .eslintrc.cjs etc.
  }),
];
