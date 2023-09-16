import { defineConfig } from "vite";

export default defineConfig({
	root: "src/web",
	build: {
		outDir: "../../public",
		emptyOutDir: true,
	},
	resolve: {
		alias: {
			"@": "./",
		},
	},
	publicDir: "/src/web/public",
	appType: "mpa",
});

