import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		imagetools(),
		remix({
			ssr: false,
		}),
		tsconfigPaths(),
	],
});
