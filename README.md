# Extract DMG [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/extract-dmg/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/extract-dmg)

Extract a DMG file on MacOS.

[![NPM Badge](https://nodei.co/npm/extract-dmg.png)](https://npmjs.com/package/extract-dmg)

## Install

```sh
npm install extract-dmg
```

## Usage

```js
const extractDmg = require("extract-dmg");

(async () => {
	await extractDmg("a.dmg"); // Get contents
	//=> ["a", "b"]

	await extractDmg("a.dmg", "extractDir"); // Extract and get contents
	//=> ["a", "b"]
})()
```

## API

### extractDmg(filename, destination?)

#### filename

Type: `string`

The DMG to extract.

#### destination

Type: `string`

The destination directory to place the extracted files. Leave blank to skip extraction.
