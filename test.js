/**
 * Node dependencies
 */
const { resolve } = require('path');
const { existsSync, mkdirSync } = require('fs');

/**
 * Test environment
 */
const DIR = './tmp';
const tape = require('tape');
const { localga, FILE_NAME, ANALYTICS_FILE_NAME } = require('./');

/**
 * Init
 */
if (!existsSync(DIR)) {
	mkdirSync(DIR);
}

localga({
	id: 'UA-83446952-1',
	folder: DIR
}).then(() => {
	/**
	 * Test if a master file is created
	 */
	tape('Should have a master file', t => {
		const file = resolve(__dirname, `${DIR}/${FILE_NAME}`);
		const fileExists = existsSync(file);

		t.ok(fileExists, `${FILE_NAME} exists`);
		t.end();
	});

	/**
	 * Test if a helper file is created
	 */
	tape('Should have a helper file', t => {
		const file = resolve(__dirname, `${DIR}/${ANALYTICS_FILE_NAME}`);
		const fileExists = existsSync(file);

		t.ok(fileExists, `${ANALYTICS_FILE_NAME} exists`);
		t.end();
	});
});
