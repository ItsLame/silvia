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
      "no-unused-vars": ["error", {
        "argsIgnorePattern": "^_",
      }],
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": "error",
      "no-irregular-whitespace": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "semi": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "quotes": ["error", "double"],
    },
    ignores: [
      "**/(payload)/**"
    ]
  },
];

export default eslintConfig;
