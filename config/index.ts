import Configuration from "../src/types/Configuration";

const cfg: Configuration = {
	api: {
		port: 4000
	},
	database: {
		// Either 'sqlite' or 'mysql'
		type: "sqlite",
		// Ingored if type is 'sqlite'
		database: "database",
		// MySQL Specific Settings
		host: "localhost",
		port: 3306,
		user: "root",
		password: "password",
		// Other Settings
		verbose: true,
		sync: true,
	},
};

export default cfg;