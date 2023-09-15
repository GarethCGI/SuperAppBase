import { DataSource } from "typeorm";

type DatabaseConfig = {
	type: "sqlite" | "mysql";
	host: string;
	port: number;
	user: string;
	password: string;
	database: string;

	verbose: boolean;
	sync: boolean;
};

class SPDatabase {
	private static instance: SPDatabase | null = null;
	private static source: DataSource;
	constructor(dbconfig: DatabaseConfig) {
		if (SPDatabase.instance)
			return SPDatabase.instance;
		SPDatabase.source = new DataSource({
			type: dbconfig.type,
			database: dbconfig.type === "sqlite" ? "./temp/sp.db" : dbconfig.database,
			// MySQL
			host: dbconfig.host,
			port: dbconfig.port,
			username: dbconfig.user,
			password: dbconfig.password,
			// More options
			synchronize: dbconfig.sync,
			logging: dbconfig.verbose,
			entities: [
				__dirname + "/../database/models/*.js",
				__dirname + "/../database/models/*.ts",
			],
			charset: dbconfig.type === "sqlite" ? undefined : "utf8mb4",
		});
		SPDatabase.instance = this;
	}
	async init() {
		try {
			await SPDatabase.source.initialize();
		}
		catch (e) {
			throw e;
		}
	}
	get source() {
		return SPDatabase.source;
	}
	static getInstance() {
		return SPDatabase.instance;
	}
}
export default SPDatabase;

export { DatabaseConfig };