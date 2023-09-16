import axios from "axios";

const getCurrentHost = () => {
	// Get Current URL
	const host = window.location.host;
	// Get Current Protocol
	const protocol = window.location.protocol;
	// Build Current URL
	const currentURL = `${protocol}//${host}`;
	return currentURL;
}

async function getAllFromDatabase(thing: string) {
	const res = await axios.get(`${getCurrentHost()}/things/${thing}`);
	return JSON.stringify(res.data);
}

async function getOneFromDatabase(thing: string, id: string) {
	const res = await axios.get(`${getCurrentHost()}/things/${thing}/${id}`);
	return JSON.stringify(res.data);
}

export { getCurrentHost, getAllFromDatabase, getOneFromDatabase };