---
aliases:
title: 
Name:
  First: <% tp.file.title.split(" ")[1] %>
  Last: <% tp.file.title.split(" ")[2] %>
---
Birthday:: <% tp.file.cursor(2) %>
Tags:: #👤 
___

# <% tp.file.title %>

## Notes

## References

```dataview
TABLE
  file.mtime as "Last Modified"
FROM [[]]
WHERE file.link != this.file.link
SORT file.mtime DESC
```
