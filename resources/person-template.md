---
aliases:
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: person-template-v2.1.0
title: 
Name:
  First: <% tp.file.title.split(" ")[1] %>
  Last: <% tp.file.title.split(" ")[2] %>
---

Birthday:: <% tp.file.cursor(2) %>
Tags:: #👤 #<% tp.file.title.split(" ")[1].toLowerCase() %><% tp.file.title.split(" ")[2].charAt(0) %> <% tp.file.cursor(3) %>
Links:: [[🗺 Address Book]]
___

# <% tp.file.title %>

## Info

Address:: <% tp.file.cursor(4) %>

## Notes

## References

```dataview
TABLE
  file.mtime as "Last Modified"
FROM [[]] and #<% tp.file.title.split(" ")[1].toLowerCase() %><% tp.file.title.split(" ")[2].charAt(0) %>
WHERE file.link != this.file.link
SORT file.mtime DESC
```
