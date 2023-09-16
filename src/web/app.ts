import { getAllFromDatabase } from "@/util/clientutils";

console.log('Hello World!');
document.body.innerHTML = '<h1>Hello World!</h1>';

(async () => {
	document.write(await getAllFromDatabase("User"));
})();