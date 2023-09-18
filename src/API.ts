import findRecursive from "@spaceproject/findrecursive";
import express from "express";
import Express from "express";
import { ServerRequest } from "./types/API";
import App from "./app";
import { getPublicDir } from "@sab/util/run";
export interface Req<T> extends Express.Request {
	body: T
}
class API {
	app: App;
	server: Express.Application;
	constructor(_app: App) {
		this.app = _app;
		this.server = Express();

		// this will parse Content-Type: application/json
		this.server.use(express.json());
		// this will parse Content-Type:  application/x-www-form-urlencoded
		this.server.use(express.urlencoded({ extended: true }));

		// Set the X-Powered-By header to SpaceProjectAPI
		this.server.use((req, res, next) => {
			res.setHeader("X-Powered-By", "SpaceProjectAPI");
			next();
		});
		// Add the app to the request object
		this.server.use((req, _res, next) => {
			(req as unknown as ServerRequest).parentApp = this.app;
			next();
		});

		//Log it all
		this.server.use((req, _res, next) => {
			console.info(`${req.method} ${req.url}`);
			next();
		});

		this.server.get("/", function (req, res) {
			return res.send("This is an SpaceProject based API");
		});

		this.registerRoutes();

		this.server.listen(this.app.config.api.port, () => {
			console.info(`API is listening on port ${this.app.config.api.port}`);
		});
	}
	private async registerRoutes() {
		// Load files recursively from the routes directory
		const globalDirName = `${__dirname}/routes`.replace(/\\/g, "/");
		const fileRoutes = await findRecursive(globalDirName);
		let i = 0;
		for (const [file, dir] of fileRoutes) {
			if (!file.endsWith(".js") && !file.endsWith(".ts")) continue;
			if (file.endsWith(".map")) continue;
			const { default: route } = await import(`${dir}/${file}`);
			const serverRoute = `${dir.replace(globalDirName, "")}/${file.split(".")[0]}`.replace(/\$/g, ":");
			console.info(`Registering route ${serverRoute}`);
			const Iroute = this.server.route(serverRoute);
			// Register the route methods
			route.get ? Iroute.get(route.get) : null;
			route.post ? Iroute.post(route.post) : null;
			route.put ? Iroute.put(route.put) : null;
			route.delete ? Iroute.delete(route.delete) : null;
			route.patch ? Iroute.patch(route.patch) : null;
			i++;
		}

		// Register html, css, and js files
		this.server.use(express.static(getPublicDir()));
		this.server.get("*", (_req, res) => {
			res.status(404).send("Not found.");
		});
		console.info(`Registered ${i} routes`);
	}
}
export default API;