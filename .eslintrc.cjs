module.exports = {
  extends: [
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    mocha: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "build/**",
    "node_modules/**",
    ".nyc_output/**",
    "dist/**",
  ],
  overrides: [
    {
      files: ["**/*.ts"],
      rules: {
        "no-void": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/semi": ["error", "always"],
      },
    },
  ],
};
