import { isRunningAsCompiled } from "./util/run";
if (isRunningAsCompiled()) {
	const moduleAlias = require('module-alias')
	moduleAlias.addAlias('@sab', __dirname + '/../src')
}

import App from "./app";


const app = new App();

app.start();