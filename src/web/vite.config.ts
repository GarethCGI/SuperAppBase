import { defineConfig } from "vite";

export default defineConfig({
	root: "src/web",
	build: {
		outDir: "../../public",
		emptyOutDir: true,
	},
	resolve: {
		alias: {
			"@": "/src/web",
		},
	},
	//appType: "mpa",
	publicDir: "/src/web/public",
	appType: "mpa",
});

