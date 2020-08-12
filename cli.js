#!/usr/bin/env node

/**
 * External dependencies
 */
const meow = require('meow');

/**
 * Internal dependencies
 */
const localga = require('./');

/**
 * CLI settings
 */
const cli = meow(
	`
Options
  --id      Your Google Analytics ID
  --folder  Where to write the file
  --name	Name of the gtag.js script file

Usage Examples
  $ localga --id UA-XXXXXXX-Y --folder ./src/js/ --name google-analytics-local.js
`,
	{
		flags: {
			id: {
				type: 'string'
			},
			folder: {
				type: 'string',
				default: './'
			},
			name: {
				type: 'string',
				default: 'google-analytics-local.js'
			},
		}
	}
);

localga(cli.flags);
