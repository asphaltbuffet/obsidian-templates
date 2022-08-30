<%* let statusType = await tp.system.suggester(["Backlog 🟥","Consuming 🟧", "Processing", "Finished", "Paused ⬛"], ["Backlog 🟥","Consuming 🟧", "Processing 🟨", "Finished 🟩", "Paused ⬛"], false, "Select current status") %>
<%-* if (statusType === "Backlog 🟥") { %>
tp.file.cursor_append("🟥")
<%-* } else if (statusType === "Consuming 🟧") { %>
tp.file.cursor_append("🟧")
<%-* } else if (statusType === "Processing 🟨") { %
tp.file.cursor_append("🟨")
<%-* } else if (statusType === "Finished 🟩") { %>
tp.file.cursor_append("🟩")
<%-* } else if (statusType === "Paused ⬛") { %>
tp.file.cursor_append("⬛")
<%-* } %>
<%* } -%>

<%* let statusType = await tp.system.suggester(["Backlog","Consuming", "Processing", "Paused"], ["Backlog","Consuming", "Processing", "Finished", "Paused"], false, "Select current status") %>
<%-* if (statusType === "Backlog") { %>
tp.file.cursor_append("🟥")
<%-* } else if (statusType === "Consuming") { %>
tp.file.cursor_append("🟧")
<%-* } else if (statusType === "Processing") { %
tp.file.cursor_append("🟨")
<%-* } else if (statusType === "Finished") { %>
tp.file.cursor_append("🟩")
<%-* } else if (statusType === "Paused") { %>
tp.file.cursor_append("⬛")
<%-* } %>
<%* } -%>

<% *
	let statusType = await tp.system.suggester(
		["Backlog", "Consuming", "Processing", "Paused"], 
		["Backlog", "Consuming", "Processing", "Finished", "Paused"], 
		false, "Select current status")
	if (statusType === "Backlog") {
	  tp.file.cursor_append("🟥")
	} else if (statusType === "Consuming") {
	  tp.file.cursor_append("🟧")
	} else if (statusType === "Processing") {
	  tp.file.cursor_append("🟨")
	} else if (statusType === "Finished") {
	  tp.file.cursor_append("🟩")
	} else if (statusType === "Paused") {
	  tp.file.cursor_append("⬛")
	}
%>