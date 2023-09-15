import { Response } from "express";
import { ServerRequest } from "../types/API";
import { getDatabase } from "../util/composelike";
import { User } from "../database/models/User";
import { objectSchemaFrom, validateObject } from "parzival";
export default {
	async get(_req: ServerRequest, res: Response) {
		const db = getDatabase()
		const repo = db.getRepository(User);
		const users = await repo.find();
		res.json(users);
	},
	async post(req: ServerRequest, res: Response) {
		const db = getDatabase()

		const schema = objectSchemaFrom(User);
		const result = validateObject(req.body, schema);

		if (!result) {
			res.status(400).json({
				error: "Invalid request body",
				readableError: "User is missing required fields"
			});
			return;
		}
		console.log(req.body);
		const repo = db.getRepository(User);
		const user = new User();
		user.username = req.body.username;
		user.email = req.body.email;
		user.password = req.body.password;
		await repo.save(user).catch((e) => {
			res.status(400).json({
				error: "Invalid request body",
				readableError: e.message
			});
			return;
		});
		res.json(user);
	}
};