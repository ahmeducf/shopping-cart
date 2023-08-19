module.exports = {
  root: true,
  env: { browser: true, es2020: true, 'vitest-globals/env': true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:vitest/recommended',
    'plugin:vitest-globals/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'vitest', 'testing-library', 'jest-dom'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'no-restricted-imports': [
      'error',
      { patterns: ['@/features/*/*', '@/components/*/*'] },
    ],

    // Special Prettier integration rules
    curly: ['error', 'all'],
    allowParens: 'off',
    'no-confusing-arrow': ['error', { allowParens: false }],
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
};
