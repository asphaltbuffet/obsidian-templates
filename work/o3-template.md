---
aliases: 
title: # <% tp.file.title %>
---
Status:: 
Date:: <% tp.file.cursor(1) %>
Person:: [[<% tp.file.title.slice(3) %>]]
Tags:: #o3 <% tp.file.cursor(3) %>
Links:: [[🗺 O3 MOC]]
___

# <% tp.file.title %>

## My Items
- <% tp.file.cursor(5) %>

## Their Items
- <% tp.file.cursor(6) %>

## Notes
- <% tp.file.cursor(7) %>

___
```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
