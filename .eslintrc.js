module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', "react-hooks", '@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'error',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    "import/extensions": ["off"],
    "react/react-in-jsx-scope": "off",
    'react/jsx-props-no-spreading': 'off',
    "react/no-unescaped-entities": ["off"],
    "react/jsx-filename-extension": ["error", { 'extensions': ['.tsx'] }],
    'no-useless-return': 'off',
    'no-unused-vars': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    semi: [2, 'always']
  },
};
