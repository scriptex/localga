const fetch = require('node-fetch');

const { join, dirname } = require('path');
const { writeFileSync, unlinkSync, existsSync, mkdirSync } = require('fs');

const GA_SCRIPT_URL = 'https://www.googletagmanager.com/gtag/js';
const ANALYTICS_FILE_NAME = 'analytics.js';
const ANALYTICS_SCRIPT_URL = `https://www.google-analytics.com/${ANALYTICS_FILE_NAME}`;

/**
 * Perform a network GET request using node-fetch library
 * @param {string} url
 * @return {Promise<string>} string
 */
// @ts-ignore
const get = url => fetch(url).then(r => r.text());

/**
 * Save a file in the file system
 * @param {string} file
 * @param {string} data
 * @return {void}
 */
const saveFile = (file, data) => {
	if (existsSync(file)) {
		unlinkSync(file);
	}

	mkdirSync(dirname(file), { recursive: true });

	writeFileSync(file, data);
};

/**
 * Save the Google Analytics master file in the file system
 * @param {string} folder
 */
const saveAnalyticsFile = folder => {
	const file = join(folder, ANALYTICS_FILE_NAME);

	return get(ANALYTICS_SCRIPT_URL)
		.then(data => saveFile(file, data))
		.catch(console.error);
};

/**
 * Generate local version of google analytics script
 * @param  {Record<string, string>} options
 * @return {Promise<Void>}
 */
const localga = options => {
	const { id, folder, name } = options;
	const file = join(folder, name);

	if (!id) {
		throw new Error('No google analytics ID supplied.');
	}

	return get(`${GA_SCRIPT_URL}?id=${id}`)
		.then(async data => {
			data = data.replace(ANALYTICS_SCRIPT_URL, join(folder, ANALYTICS_FILE_NAME));

			saveFile(file, data);

			await saveAnalyticsFile(folder);
		})
		.catch(console.error);
};

module.exports = localga;
module.exports.localga = localga;
module.exports.ANALYTICS_FILE_NAME = ANALYTICS_FILE_NAME;
