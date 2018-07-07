module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'max-len': ['error', { code: 120, ignoreTrailingComments: true }],
  },
};
