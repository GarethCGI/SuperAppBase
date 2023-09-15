import { Response } from "express";
import { ServerRequest } from "../../types/API";
import { getDatabase } from "../../util/composelike";
export default {
	async get(req: ServerRequest, res: Response) {
		const thing = req.params.thing;
		if (!thing) {
			res.status(400).json({
				error: "Invalid request body",
				readableError: "Thing is missing required fields"
			});
			return;
		}
		const db = getDatabase();
		const repo = db.getRepository(thing);
		const things = await repo.find();
		res.json(things);
	},
	
};