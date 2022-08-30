Status:: 
Tags:: #🗺️
Links:: <% tp.file.cursor(2) %>
___

# o3-entry

## Notes
- <% tp.file.cursor(3) %>

## Queries

### Notes

```dataview
list from [[o3-entry]] AND !outgoing([[o3-entry]]) AND !#input and !#thoughts
```

### Inputs

```dataview
table Tags as Type, Links, Created
from [[o3-entry]] AND #input
sort Tags desc
```

### Thoughts

```dataview
table Created
from [[o3-entry]] AND #thoughts
sort file.mtime desc
```

___
References:

Created:: 2022-08-30 12:55