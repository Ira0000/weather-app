module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'tailwindcss', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off', // Completely disable prop-types validation
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      config: 'tailwind.config.js',
      removeDuplicates: true,
      classRegex: '^(class(Name)?|tw)$',
    },
  },
};
