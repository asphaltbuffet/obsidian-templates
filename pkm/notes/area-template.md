Tags:: #area
Links:: [[⛰ My Areas]]
___
# o3-entry

## Queries

### Projects

```dataview
table Deadline
FROM #🚧 AND [[o3-entry]]
SORT Deadline asc
```

### Inputs

```dataview
table Status, Author
FROM #i AND [[o3-entry]]
SORT file.mtime desc
```

### Notes

```dataview
table Created
FROM [[o3-entry]] AND !#🚧 AND !#📥
SORT file.mtime desc
```

___

Created:: 2022-08-30 12:55