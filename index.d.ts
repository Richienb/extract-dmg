/**
 * Extract a DMG file on MacOS.
 * @param filename The DMG to extract.
 * @param destination The destination directory to place the extracted files. Leave blank to skip extraction.
 * @example
 * ```
 * const extractDmg = require("extract-dmg");
 *
 * (async () => {
 * 	await extractDmg("a.dmg"); // Get contents
 * 	//=> ["a", "b"]
 *
 * 	await extractDmg("a.dmg", "extractDir"); // Extract and get contents
 * 	//=> ["a", "b"]
 * })()
 * ```
*/
declare function extractDmg(filename: string, destination?: string): string[]

export = extractDmg
