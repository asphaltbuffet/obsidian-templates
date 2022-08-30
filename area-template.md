Tags:: #area
Links:: [[My Areas]]
___
# 🚧 My Projects
## Queries
### Projects
```dataview
table Deadline
FROM #🚧 AND [[🚧 My Projects]]
SORT Deadline asc
```
### Inputs
```dataview
table Status, Author
FROM #i AND [[🚧 My Projects]]
SORT file.mtime desc
```
### Notes
```dataview
table Created
FROM [[🚧 My Projects]] AND !#🚧 AND !#📥
SORT file.mtime desc
```

___

Created:: 2022-08-29 23:44