import path from 'path';
const getRunningFileExtension = () => {
	const thisFilename = __filename;
	const lastDot = thisFilename.lastIndexOf('.');
	return thisFilename.slice(lastDot + 1);
}

const isRunningAsCompiled = () => {
	return getRunningFileExtension() === 'js';
}

const getPublicDir = () => {
	/* If running as compiled, the public dir is 
	 * current (util) -> src -> dist -> public
	 * else, the public dir is
	 * current (util) -> src -> public
	*/
	const isCompiled = isRunningAsCompiled();
	const publicDirStrRelative = isCompiled ?
		__dirname + '/../../../public' :
		__dirname + '/../../public';

	const collapsed = path.resolve(publicDirStrRelative);
	console.info(`Public dir is ${collapsed}`);
	return collapsed;
}

export { getRunningFileExtension, isRunningAsCompiled, getPublicDir };