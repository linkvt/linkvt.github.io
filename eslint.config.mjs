import eslint from "@eslint/js";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default tseslint.config(
	globalIgnores([".react-router/**", "build"]),
	eslint.configs.recommended,
	tseslint.configs.recommended,
);
