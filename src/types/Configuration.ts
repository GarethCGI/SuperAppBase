import { Parseable, ValidateProperty } from "parzival";
import { DatabaseConfig } from "../database";
@Parseable()
class APIConfig {
	@ValidateProperty({
		type: "number",
		min: 1,
		max: 65535,
	})
	public port!: number;
}

@Parseable()
class Configuration {
	@ValidateProperty({
		type: "object",
		recurse: true,
		className: "APIConfig"
	})
	public api!: APIConfig;
	public database!: DatabaseConfig;
}

export default Configuration;