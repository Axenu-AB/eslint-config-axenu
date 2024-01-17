module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
      "@typescript-eslint",
      "prettier",
      "unused-imports",
      "jest"
    ],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    rules: {
      "no-console": 0,
      "prettier/prettier": 2,
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "no-fallthrough":"off"
    },
    parserOptions: {
      "project": "./tsconfig.json",
      "tsconfigRootDir": ".",
      "sourceType": "module"
    },
    env: {
      "jest": true,
      "node": true
    },
};
