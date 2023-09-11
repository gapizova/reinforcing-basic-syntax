module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier'],

  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-len': [
      'error',
      {
        ignoreComments: true,
      },
      {
        code: 100,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'default-case': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-useless-escape': 'off',
    'import/extensions': ['error', 'never', { js: 'always' }],
  },
};
