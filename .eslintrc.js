module.exports = {
  env: { browser: true, jest: true },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-extraneous-dependencies': ["error", {"devDependencies": ["**/*.js","**/*.test.js", "**/*.spec.js"]}]
  },
};
