export default [
  {
    root: true,
    env: {
      browser: true,
      es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      project: 'tsconfig.json',
      sourceType: 'module',
    },
    extends: [
      'airbnb-typescript/base',
      'plugin:unicorn/recommended',
      'plugin:@typescript-eslint/recommended-type-checked',
    ],
    plugins: ['import', 'unicorn'],
    rules: {
      'import/exports-last': 'error',
      'import/group-exports': 'warn',
      'import/no-commonjs': 'error',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'error',
      'unicorn/no-unused-properties': 'error',
      'unicorn/string-content': 'error',
    },
  },
];