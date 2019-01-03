#!/usr/bin/env node

/**
 * External dependencies
 */
const meow = require('meow');
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

/**
 * CLI settings
 */
const cli = meow(
	`
Options
  --id      Your Google Analytics ID
  --folder  Where to write the file

Usage Examples
  $ localga --id UA-XXXXXXX-Y --folder ./src/js/
`,
	{
		flags: {
			id: {
				type: 'string'
			},
			folder: {
				type: 'string',
				default: './'
			}
		}
	}
);

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

	request(`${GA_SCRIPT_URL}?id=${id}`)
		.then(data => {
			if (existsSync(file)) {
				unlinkSync(file);
			}

			writeFileSync(file, data);
		})
		.catch(console.error);
};

/**
 * Run the script
 */
localga(cli.flags);
