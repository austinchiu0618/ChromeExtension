module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'eslint:recommended',
  plugins: ['html'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-undef': 'off',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-unused-vars': 'warn',
    'comma-dangle': ['error', 'never']
  }
}
