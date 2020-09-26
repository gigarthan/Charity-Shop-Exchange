module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],

  // Only Rules
  rules: {
    'react/prop-types': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-named-as-default': 'off',
    'no-alert': 'warn',
    radix: 'off',
    'no-console': 'off',
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

  settings: {
    'import/resolver': {
      'babel-module': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
};
