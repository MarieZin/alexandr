import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    plugins: {
      prettier: prettierPlugin,
      "@typescript-eslint": tseslint.plugin,
    },
  },
  {
    ignores: ["node_modules", "build", "coverage"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], rules: { ...eslintConfigPrettier.rules } },

  // { files: ["**/*.{js,mjs,cjs,ts}"] },
  // {
  //   files: ["**/*.{js,mjs,cjs,ts}"],
  //   languageOptions: { globals: globals.browser },
  // },
  // {
  //   files: ["**/*.{js,mjs,cjs,ts}"],
  //   plugins: { js },
  //   extends: ["js/recommended", "plugin:prettier/recommended"],
  //   rules: {
  //     "prettier/prettier": ["warn", { endOfLine: "auto" }],
  //   },
  // },
  // tseslint.configs.recommended,
  // {
  //   rules: {
  //     semi: "error",
  //     "prefer-const": "error",
  //   },
  // },
]);
