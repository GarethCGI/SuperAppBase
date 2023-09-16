import { Response } from "express";
import { ServerRequest } from "@/types/API";
import { getDatabase } from "@/util/composelike";
export default {
	async get(req: ServerRequest, res: Response) {
		const thingname = req.params.thing;
		const db = getDatabase();
		try {
			const repo = db.getRepository(thingname);
			const all = await repo.find().catch((e) => {
				console.error(e);
				res.status(500).json({ error: "Internal Server Error", message: e.message });
			});
			res.json(all);
		} catch (e) {
			res.status(404).json({ error: "Not Found" });
		}
	},
	async put(req: ServerRequest, res: Response) {
		const thingname = req.params.thing;
		const db = getDatabase();
		const body = req.body;
		if (!body) {
			res.status(400).json({ error: "Bad Request" });
			return;
		}
		try {
			const repo = db.getRepository(thingname);
			const exists = await repo.findOne(body.id);
			if (!exists) {
				res.status(404).json({ error: "Not Found" });
				return;
			}
			const newThing = repo.create(body);
			const saved = await repo.save(newThing).catch((e) => {
				console.error(e);
				res.status(500).json({ error: "Internal Server Error", message: e.message });
			});
			res.json(saved);
		} catch (e) {
			res.status(404).json({ error: "Not Found" });
		}
	},

};