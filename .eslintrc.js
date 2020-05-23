module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 允许 require 引入
    '@typescript-eslint/no-var-requires': 0,
    // 可以忽略
    "@typescript-eslint/ban-ts-ignore": "off",
    '@typescript-eslint/interface-name-prefix': ['error', { "prefixWithI": "always" }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': ['error',
      {
        'multiline': {
          'delimiter': 'none'
        },
        'singleline': {
          'delimiter': 'comma'
        }
      }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', 'never'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/object-curly-spacing': 'error'
  },
  // overrides: [
  //   {
  //     files: [
  //       '**/__tests__/*.{j,t}s?(x)',
  //       '**/tests/unit/**/*.spec.{j,t}s?(x)'
  //     ],
  //     env: {
  //       jest: true
  //     }
  //   }
  // ]
}
