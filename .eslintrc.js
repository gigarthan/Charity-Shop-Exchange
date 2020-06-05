module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-alert': 'error',
    'no-console': 'warn',
    'global-require': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '_', argsIgnorePattern: '_' },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', ['parent', 'sibling', 'index']],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
  env: {
    browser: true,
    jasmine: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
