---
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: area-template-v1.1.0
title: <% tp.file.title %>
---

Status::
Tags:: #area
Links:: [[⛰ My Areas]]
___
# <%tp.file.title%>

## Queries

### Projects

```dataview
table Deadline
FROM #🚧 AND [[]]
SORT Deadline asc
```

### Inputs

```dataview
table Status, Author
FROM #📖 AND [[]]
SORT file.mtime desc
```

### Notes

```dataview
table 
  Status,
  Created
FROM [[]] AND !#🚧 AND !#📖
SORT file.mtime desc
```

___

