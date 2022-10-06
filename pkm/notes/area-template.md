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
table Created
FROM [[]] AND !#🚧 AND !#📖
SORT file.mtime desc
```

___
```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
