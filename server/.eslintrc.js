module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'no-underscore-dangle': 0,
    'import/no-anonymous-default-export': 0,
    'import/prefer-default-export': 0,
    'destructuring-assignment': 0,
    'consistent-return': 0,
    'dot-notation': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
