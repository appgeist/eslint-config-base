// prettier-ignore
module.exports = {
  root: true,
  env: { es6: true, node: true },
  parser: 'babel-eslint',
  parserOptions: { ecmaVersion: 10, sourceType: 'script' },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb-base',
    'prettier'
  ],
  plugins: ['import', 'prettier'],
  rules: {
    'strict': 'off',
    'indent': 'error',
    'comma-dangle': ['error', 'never'],
    'max-len': ['warn', 120],
    'prefer-const': 'warn',
    'camelcase': 'off',
    'no-nested-ternary': 'off',
    'arrow-parens': 'error',
    'function-paren-newline': ['error', 'consistent'],
    'newline-per-chained-call': 'off',
    'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'quote-props': ['error', 'consistent'],
    'space-in-parens': ['error', 'never'],
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'always'],
    'key-spacing': 'error',
    'no-param-reassign': 'off',
    'no-multi-assign': 'off',
    'radix': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off'
  }
};
