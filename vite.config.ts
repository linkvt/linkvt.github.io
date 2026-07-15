import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
	plugins: [imagetools(), reactRouter(), tailwindcss()],
	resolve: {
		tsconfigPaths: true,
	},
});
