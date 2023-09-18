import { objectSchemaFrom, validateObject } from "parzival";
import API from "./API";
import Configuration from "./types/Configuration";
import SPDatabase from "./database";
import { getRunningFileExtension } from "./util/run";

class App {
	api: API;
	database: SPDatabase;
	config: Configuration;
	constructor() {
		const configSchema = objectSchemaFrom(Configuration);
		if (!validateObject(require("../config/index.js").default, configSchema)) {
			throw new Error("Invalid Configuration");
		}
		this.config = require(`../config/index.${getRunningFileExtension()}`).default;
		this.api = new API(this);
		this.database = new SPDatabase(
			this.config.database
		);
		console.log('App initialized');
	}
	start() {
		this.database.init();
		console.log('App started');
	}
}

export default App;