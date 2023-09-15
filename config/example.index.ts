import Configuration from "../src/types/Configuration";

const cfg: Configuration = {
	api: {
		port: 3000
	},
	database: {
		// Either 'sqlite' or 'mysql'
		type: "mysql",
		// Ingored if type is 'sqlite'
		database: "database",
		// MySQL Specific Settings
		host: "localhost",
		port: 3306,
		user: "root",
		password: "password",
		// Other Settings
		verbose: false,
		sync: true,
	},
};

export default cfg;