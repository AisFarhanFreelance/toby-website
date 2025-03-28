import { FlatCompat } from "@eslint/eslintrc";
import checkFile from "eslint-plugin-check-file";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    plugins: ["check-file"],
    rules: {
      "no-console": "error",
      "no-unused-vars": "error",
      "no-var": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "no-alert": "error",
      "no-nested-ternary": "error",
      "consistent-return": "error",
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{jsx,tsx}": "KEBAB_CASE",
          "**/*.{js,ts}": "KEBAB_CASE",
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**/": "KEBAB_CASE",
        },
      ],
    },
  }),
];

export default eslintConfig;
