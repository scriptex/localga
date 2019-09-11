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

localga(cli.flags);
