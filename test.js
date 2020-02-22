const test = require("ava")
const extractDmg = require(".")

test("main", async (t) => {
	if (process.platform === "darwin") {
		const contents = await extractDmg("fixtures/vlc-3.0.8.dmg")
		t.deepEqual(contents, ["vlc-3.0.8"])
	} else {
		t.pass()
	}
})
