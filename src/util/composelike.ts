import SPDatabase from "../database"
const getDatabase = () => {
	const i = SPDatabase.getInstance();
	if (!i) throw new Error("Database not running");
	return i.source;
}

export { getDatabase }