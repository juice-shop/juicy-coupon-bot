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
      parser: '@typescript-eslint/parser',
      rules: {
        "no-void": "off", // conflicting with recommendation from @typescript-eslint/no-floating-promises
        // FIXME warnings below this line need to be checked and fixed.
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
