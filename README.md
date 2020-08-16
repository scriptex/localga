[![GitHub release](https://img.shields.io/github/release/scriptex/localga.svg)](https://github.com/scriptex/localga/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/localga.svg)](https://github.com/scriptex/localga/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/localga.svg)](https://github.com/scriptex/localga/commits/master)
[![Build Status](https://travis-ci.com/scriptex/localga.svg?branch=master)](https://travis-ci.com/scriptex/localga)
[![npm](https://img.shields.io/npm/dt/localga.svg)](https://www.npmjs.com/package/localga)
[![npm](https://img.shields.io/npm/v/localga.svg)](https://www.npmjs.com/package/localga)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/localga/README.md)](https://github.com/scriptex/localga/)

# Local GA

Save a local version of your Google Analytics script

## About

Google Page Speed Insights complains about the expiry date set for the Google Analytics (or Google Tag Manager) script.

One way to work around this issue is to self host this script.

This however is not so good idea because this way the script will no longer be updated/bug-fixed.

This is where `localga` steps in.

`localga` automates the task of updating the Google Analytics (or Google Tag Manager) script.

You can also use this package if you need (or want to) self host the analytics files because you offer offline experience for your users.
The actual analytics tracking should be done by you and is not part of this package.

## Install

```sh
npm i localga --save-dev
```

or

```sh
yarn add localga --dev
```

## Usage

1. As a package.json script:

```javascript
"scripts": {
	"ga": "localga --id UA-XXXXXXXX-Y --folder ./your/js/folder --name google-analytics-local.js"
}
```

2. From command line (Install the module globally first):

```sh
localga --id UA-XXXXXXXX-Y --folder ./your/js/folder --name google-analytics-local.js
```

The `localga` module will generate two new script files called `google-analytics-local.js` and `analytics.js` placed in the folder you provided.

If no `--folder` is specified, the files will be placed in the root of your project.

After the files are generated, you should `require` the `google-analytics-local.js` file in your bundle (or include it in your HTML file(s)).

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

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Flocalga&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
