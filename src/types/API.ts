import { Request } from "express";
import App from "../app";

interface ServerRequest extends Request {
	parentApp: App;
}

export { ServerRequest };