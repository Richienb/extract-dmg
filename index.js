"use strict"

const {promisify} = require("util")
const dmg = promisify(require("dmg"))
const fs = require("fs-extra")

module.exports = async (filename, destination) => {
	if (typeof filename !== "string" || !filename.endsWith(".dmg")) {
		throw new TypeError(`Expected the path of a dmg file, got ${typeof filename}`)
	}

	if (destination && typeof destination !== "string") {
		throw new TypeError(`Expected the destination to be a string, got ${typeof destination}`)
	}

	const mountPath = await dmg.mount(filename)
	const files = await fs.readdir(mountPath)

	if (destination) {
		await fs.copy(mountPath, destination, {
			recursive: true,
		})
	}

	await dmg.unmount(mountPath)

	return files
}
