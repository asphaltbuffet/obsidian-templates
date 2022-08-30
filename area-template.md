Tags:: #area
Links:: [[My Areas]]
___
# <%tp.file.title%>
## Queries
### Projects
```dataview
table Deadline
FROM #🚧 AND [[<%tp.file.title%>]]
SORT Deadline asc
```
### Inputs
```dataview
table Status, Author
FROM #i AND [[<%tp.file.title%>]]
SORT file.mtime desc
```
### Notes
```dataview
table Created
FROM [[<%tp.file.title%>]] AND !#🚧 AND !#📥
SORT file.mtime desc
```

___

Created:: <% tp.date.now("YYYY-MM-DD HH:mm") %>