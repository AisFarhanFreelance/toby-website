import { FlatCompat } from "@eslint/eslintrc";
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
    },
  }),
];

export default eslintConfig;
