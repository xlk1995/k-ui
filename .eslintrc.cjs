module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:vue/vue3-essential"
    "plugin:vue/vue3-recommended",
    // 引入prettier
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {},
};
