---
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: project-template-v1.1.0
title:
---

Status: #🚧/🟥
Tags: #projects
Links: [[🚧 My Projects]]
___

# <% tp.file.title %>
Deadline:: <% tp.file.cursor(2) %>
Area:: 
<%*
	let dir = "10 Projects/" + tp.file.title + "/";
	if (!tp.file.exists(dir)) {
		await this.app.vault.createFolder(dir)
	}
	await tp.file.move(dir + tp.file.title)
%>

## Resources

### Notes

%% Add any non-connected notes or specific contexts here. %%
- …

#### Query

```dataview
list
from [[]] and !outgoing([[]])
```

### External Links

## Planning

**Objective:**
- …

**Key Results:**
- …

**Obstacles and their solutions:**
- …

**Timeframe:**
%% Include links to related weeks or days %%
- …

## Reflection

**Satisfied?**
- …

**Improvements and solutions learned for the future**:
- …

___

