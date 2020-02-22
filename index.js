"use strict"

const pify = require("pify")
const dmg = pify(require("dmg"))
const fs = require("fs-extra")
const ow = require("ow")
const fileExtension = require("file-ext")

module.exports = async (filename, destination) => {
	ow(filename, ow.string.is((value) => fileExtension(value) === "dmg" && fs.pathExistsSync(value)))
	ow(destination, ow.optional.string)

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
