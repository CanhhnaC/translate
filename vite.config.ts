import path, { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { getCacheInvalidationKey, getPlugins } from "./utils/vite";

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, "src");
const pagesDir = resolve(srcDir, "pages");

const isDev = process.env.__DEV__ === "true";
const isProduction = !isDev;

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [...getPlugins(isDev), react()],
	publicDir: resolve(rootDir, "public"),
	build: {
		outDir: resolve(rootDir, "dist"),
		/** Can slow down build speed. */
		// sourcemap: isDev,
		minify: isProduction,
		modulePreload: false,
		reportCompressedSize: isProduction,
		emptyOutDir: !isDev,
		rollupOptions: {
			input: {
				contentUI: resolve(pagesDir, "content", "ui", "index.ts"),
				background: resolve(pagesDir, "background", "index.ts"),
				popup: resolve(pagesDir, "popup", "index.html"),
				options: resolve(pagesDir, "options", "index.html"),
			},
			output: {
				entryFileNames: "src/pages/[name]/index.js",
				chunkFileNames: isDev
					? "assets/js/[name].js"
					: "assets/js/[name].[hash].js",
				assetFileNames: (assetInfo) => {
					const { name } = path.parse(assetInfo.name);
					const assetFileName =
						name === "contentStyle"
							? `${name}${getCacheInvalidationKey()}`
							: name;
					return `assets/[ext]/${assetFileName}.chunk.[ext]`;
				},
			},
		},
	},
});
