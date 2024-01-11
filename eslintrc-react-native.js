module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier',
    'react-native',
    'jest',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': true,
      },
    ],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.tsx']}],
    '@typescript-eslint/no-use-before-define': 'off',
    'react/prop-types': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'no-return-assign': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'error',
    '@typescript-eslint/lines-between-class-members': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'react-native/no-inline-styles': 1,
    'react/jsx-uses-react': 1,
    '@typescript-eslint/array-type': [2, {default: 'array-simple'}],
    'react/require-default-props': 'off',
    '@typescript-eslint/member-ordering': [
      2,
      {
        default: {
          memberTypes: ['field', 'constructor', 'get', 'set', 'method'],
        },
      },
    ],
    "react/require-default-props": 'off',
    "no-shadow": "off",
    "no-plusplus": "off",
    "guard-for-in": "off",
    "@typescript-eslint/no-shadow": "off",

    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "react-native/no-unused-styles": "error",
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended', // needs to be the last extension
  ],
  root: true,
  "env": {
    "jest/globals": true
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'global-require': 'off',
        'react/no-array-index-key': 'off',
        'no-param-reassign': 'off',
        'no-irregular-whitespace': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        'react/no-unstable-nested-components': 'off',
        'react/destructuring-assignment': 'off',
        'react/require-default-props': 'off',
        'no-underscore-dangle': 'off',
        'no-nested-ternary': 'off',
      },
    },
  ],
};
