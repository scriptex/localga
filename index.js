/**
 * External dependencies
 */
const request = require('request-promise-native');

/**
 * Internal dependencies
 */
const { writeFileSync, unlinkSync, existsSync } = require('fs');

/**
 * Google analytics root url
 */
const FILE_NAME = 'google-analytics-local.js';
const GA_SCRIPT_URL = 'https://www.googletagmanager.com/gtag/js';

const ANALYTICS_FILE_NAME = 'analytics.js';
const ANALYTICS_SCRIPT_URL = 'https://www.google-analytics.com/analytics.js';

const saveFile = (file, data) => {
	if (existsSync(file)) {
		unlinkSync(file);
	}

	writeFileSync(file, data);
};

const saveAnalyticsFile = folder => {
	const file = `${folder}/${ANALYTICS_FILE_NAME}`;

	request(ANALYTICS_SCRIPT_URL)
		.then(data => saveFile(file, data))
		.catch(console.error);
};

/**
 * Generate local version of google analytics script
 *
 * @param  {Object} options
 *
 * @return {Void}
 */
const localga = options => {
	const { id, folder } = options;
	const file = `${folder}/${FILE_NAME}`;

	if (!id) {
		throw new Error('No google analytics ID supplied.');
	}

	return request(`${GA_SCRIPT_URL}?id=${id}`)
		.then(data => {
			data = data.replace(ANALYTICS_SCRIPT_URL, `${folder}/${ANALYTICS_FILE_NAME}`);

			saveFile(file, data);
			saveAnalyticsFile(folder);
		})
		.catch(console.error);
};

module.exports = localga;
module.exports.localga = localga;

module.exports.FILE_NAME = FILE_NAME;
module.exports.ANALYTICS_FILE_NAME = ANALYTICS_FILE_NAME;
