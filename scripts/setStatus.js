function set_status(tenv) {
	let statusType = await tenv.system.suggester(["Backlog 🟥","Consuming 🟧", "Processing", "Finished", "Paused ⬛"], ["Backlog 🟥","Consuming 🟧", "Processing 🟨", "Finished 🟩", "Paused ⬛"], false, "Select current status")
	
	if (statusType === "Backlog 🟥") {
		tenv.file.cursor_append("🟥")
	} else if (statusType === "Consuming 🟧") {
		tenv.file.cursor_append("🟧")
	} else if (statusType === "Processing 🟨") {
		tenv.file.cursor_append("🟨")
	} else if (statusType === "Finished 🟩") {
		tenv.file.cursor_append("🟩")
	} else if (statusType === "Paused ⬛") {
		tenv.file.cursor_append("⬛")
	}
}
module.exports = set_status;
