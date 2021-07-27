/**
 * Node dependencies
 */
const { resolve } = require('path');
const { existsSync, mkdirSync } = require('fs');

/**
 * Test environment
 */
const DIR = './tmp';
const NAME = 'ga-local.js';
const tape = require('tape');
const { localga, ANALYTICS_FILE_NAME } = require('./');

/**
 * Init
 */
if (!existsSync(DIR)) {
	mkdirSync(DIR);
}

tape('LocalGA unit tests', async t => {
	await localga({
		id: 'UA-83446952-1',
		folder: DIR,
		name: NAME
	});

	const masterFile = resolve(__dirname, `${DIR}/${NAME}`);
	const masterFileExists = existsSync(masterFile);

	const helperFile = resolve(__dirname, `${DIR}/${ANALYTICS_FILE_NAME}`);
	const helperFileExists = existsSync(helperFile);

	/**
	 * Test if a master file is created
	 */
	t.ok(masterFileExists, `${NAME} exists`);

	/**
	 * Test if a helper file is created
	 */
	t.ok(helperFileExists, `${ANALYTICS_FILE_NAME} exists`);

	t.end();
});
