---
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
title: <% tp.file.title %>
template: note-template-v1.1.0
---

Status:: #note/🌱 
Tags:: <% tp.file.cursor(3) %>
Links:: [[<% tp.file.cursor(4) %>]]
___

# <% tp.file.title %>

## Content

<% tp.file.cursor(5) %>

___

