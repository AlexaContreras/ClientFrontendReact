module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['react', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,
    camelcase: 'off',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'object-curly-newline': [
      {
        ObjectExpression: { multiline: true, minProperties: 1 },
      },
    ],
  },
};
