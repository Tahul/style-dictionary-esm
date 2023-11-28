import antfu from '@antfu/eslint-config'

export default await antfu(
  {
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
    },

    languageOptions: {
      globals: {
        Buffer: true,
        escape: true,
      },
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },

    env: {
      node: true,
      mocha: true,
      jest: true,
    },

    ignores: [
      'dist',
      'node_modules',
      '*.md',
      'package.json',
    ],
  },
  {
    rules: {
      'no-console': 0,
      'no-unused-vars': 1,
      'no-control-regex': 0,
      'comma-dangle': 0,
      'no-prototype-builtins': 0,
      'node/no-path-concat': 0,
      'node/prefer-global/process': 0,
      'node/prefer-global/buffer': 0,
      'ts/no-invalid-this': 0,
      'jsdoc/check-param-names': 0,
      'jsdoc/require-returns-description': 0,
      'jsdoc/require-returns-check': 0,
      'ts/no-this-alias': 0,
      '@typescript-eslint/no-this-alias': 0,
      'jsdoc/require-property-description': 0,
      'jsdoc/require-property-name': 0,
      'ts/no-redeclare': 0,
      'vars-on-top': 0,
      'no-var': 0,
      '@typescript-eslint/no-this-alias': 0,
    },
  },
)
