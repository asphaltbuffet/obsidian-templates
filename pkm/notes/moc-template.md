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
list from [[<%tp.file.title%>]] AND !outgoing([[<%tp.file.title%>]]) AND !#input and !#thoughts
```

### Inputs

```dataview
table Tags as Type, Links, Created
from [[<%tp.file.title%>]] AND #input
sort Tags desc
```

### Thoughts

```dataview
table Created
from [[<%tp.file.title%>]] AND #thoughts
sort file.mtime desc
```

___
References:

Created:: <% tp.date.now("YYYY-MM-DD HH:mm") %>