---
aliases: 
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: moc-template-v1.1.0
title: <% tp.file.title %>
---

Status:: 
Tags:: #🗺️
Links:: <% tp.file.cursor(2) %>
___

# <%tp.file.title%>

## Notes
- <% tp.file.cursor(3) %>

## Queries

### Notes

```dataview
list from [[]] AND !outgoing([[]]) AND !#📖 and !#💭
```

### Inputs

```dataview
table Tags as Type, Links, Created
from [[]] AND #📖
sort Tags desc
```

### Thoughts

```dataview
table Created
from [[]] AND #💭
sort file.mtime desc
```

___

