[![GitHub stars](https://img.shields.io/github/stars/scriptex/localga.svg?style=social&label=Stars)](https://github.com/scriptex/localga)
[![GitHub forks](https://img.shields.io/github/forks/scriptex/localga.svg?style=social&label=Fork)](https://github.com/scriptex/localga/network#fork-destination-box)
[![GitHub release](https://img.shields.io/github/release/scriptex/localga.svg)](https://github.com/scriptex/localga/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/localga.svg)](https://github.com/scriptex/localga/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/localga.svg)](https://github.com/scriptex/localga/commits/master)
[![npm](https://img.shields.io/npm/dt/localga.svg)](https://www.npmjs.com/package/localga)
[![npm](https://img.shields.io/npm/v/localga.svg)](https://www.npmjs.com/package/localga)
[![license](https://img.shields.io/github/license/scriptex/localga.svg)](https://github.com/scriptex/localga)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/localga/README.md)](https://github.com/scriptex/localga/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/scriptex/localga/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/scriptex/localga/graphs/commit-activity)
[![dependencies Status](https://david-dm.org/scriptex/localga/status.svg)](https://david-dm.org/scriptex/localga)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/scriptex/)

# Local GA

Save a local version of your Google Analytics script

## About

Google Page Speed Insights complains about the expiry date set for the Google Analytics (or Google Tag Manager) script.

One way to work around this issue is to self host this script.

This however is not so good idea because this way the script will no longer be updated/bug-fixed.

This is where `localga` steps in.

`localga` automates the task of updating the Google Analytics (or Google Tag Manager) script.

## Install

```console
npm i localga --save-dev
```

or

```console
yarn add localga --dev
```

## Usage

1. As a package.json script:

```javascript
"scripts": {
	"ga": "localga --id UA-XXXXXXXX-Y --folder ./your/js/folder"
}
```

2. From command line (Install the module globally first):

```console
localga --id UA-XXXXXXXX-Y --folder ./your/js/folder
```

The `localga` module will generate a new script file called `google-analytics-local.js` placed in the folder you provided.

If no `--folder` is specified, the file will be placed in the root of your project.

After the file is generated, you should `require` it in your bundle (or include it in your HTML file(s)).

Then you should enable the analytics script. Something like the following:

```javascript
window.dataLayer = window.dataLayer || [];

function gtag() {
	dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-XXXXXXXX-Y');
```

**UA-XXXXXXXX-Y is your Google Analytics ID**

## LICENSE

MIT
