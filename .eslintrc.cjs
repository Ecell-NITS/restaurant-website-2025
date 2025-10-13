module.exports = {
  env: { browser: true, es2021: true, node: true },
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
  settings: { react: { version: 'detect' } },
    extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
};
