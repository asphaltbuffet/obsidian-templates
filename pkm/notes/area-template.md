---
created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
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

