import { Response } from "express";
import { ServerRequest } from "../types/API";
import { getDatabase } from "../util/composelike";
export default {
	async get(_req: ServerRequest, res: Response) {
		const db = getDatabase();
		const allRepos = db.entityMetadatas.map((x) => x.name);
		res.json(allRepos);
	},
};