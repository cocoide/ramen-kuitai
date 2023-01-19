module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
  },
};
