import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "indent": ["error", 2],
      "eol-last": ["error", "always"],
      "no-unused-vars": "off",
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": "error",
      "no-irregular-whitespace": "error",
      "semi": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": ["error", {
        "before": false,
        "after": true,
      }],
      "keyword-spacing": "error",
      "space-before-blocks": "error",
      "quotes": ["error", "double"],
      "arrow-spacing": ["error", {
        before: true,
        after: true,
      }],

      "jsx-quotes": ["error", "prefer-double"],
      "react/jsx-tag-spacing": ["error", {
        "beforeSelfClosing": "always",
      }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": ["error", {
        "argsIgnorePattern": "^_",
      }],
    },
    ignores: [
      "src/app/(payload)/**",
    ],
  },
  {
    files: ["src/migrations/*"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      "quotes": "off",
    },
  },
];

export default eslintConfig;
