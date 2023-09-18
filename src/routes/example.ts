import { Response } from "express";
import { ServerRequest } from "../types/API";
export default {
	async get(_req: ServerRequest, res: Response) {
		/* This HTTP Method is usually used to get information from the server, like user information */
		console.info("GET /example");
		res.redirect("/index.html");
	},
	async post(_req: ServerRequest, res: Response) {
		/* This  HTTP Method is usually used to send information to the server, like a user's password */
		res.sendStatus(404);
	},
	async put(_req: ServerRequest, res: Response) {
		/* This HTTP Method is usually used to update information on the server, like a user's password
		*  or to create a new resource on the server, like a new user account in a single request */
		res.sendStatus(404);
	},
	async delete(_req: ServerRequest, res: Response) {
		/* This HTTP Method is usually used to delete information on the server, like a user's account */
		res.sendStatus(404);
	},
	async patch(_req: ServerRequest, res: Response) {
		/* This HTTP Method is usually used to update information already on the server, like a user's password */
		res.sendStatus(404);
	}
};