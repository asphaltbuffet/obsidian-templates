---
aliases: O3 - <% tp.file.title.slice(14) %>
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: o3-template-v1.0.1
title: O3 - <% tp.file.title.slice(14) %>
---

Status:: #meeting 
Date:: <% tp.file.title.split(" ")[1] %>
Person:: [[👤 <% tp.file.title.slice(14) %>]]
Tags:: #o3 #work/everactive <% tp.file.cursor(3) %>
Links:: [[🗺 O3 MOC]]
___

# O3 - <% tp.file.title.slice(14) %>

## My Items
- <% tp.file.cursor(5) %>

## Their Items
- <% tp.file.cursor(6) %>

## Notes
- <% tp.file.cursor(7) %>

___

