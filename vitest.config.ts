import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: "jsdom",
			include: ["**/*.test.ts", "**/*.test.tsx"],
			setupFiles: "./test-utils/vitest.setup.js",
		},
	}),
);
