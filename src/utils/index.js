/* eslint-disable no-unsafe-finally */
const crypto = require("crypto");

const getPasswordHash = (password) => {
	let salt = "";
	let hash = "";
	let success = false;
	try {
		salt = crypto.randomBytes(16).toString("hex");
		hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);
		success = hash.length > 0;
	} catch (err) {
		success = false;
	} finally {
		return { success, hash };
	}
};

export default getPasswordHash;
