---
aliases: O3 - <% tp.file.title.slice(14) %>
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: o3-template-v1.1.0
title: O3 - <% tp.file.title.slice(14) %>
---

Status:: #meeting/o3
Date:: <% tp.file.title.split(" ")[1] %>
Person:: [[👤 <% tp.file.title.slice(14) %>]]
Tags:: #work/<% tp.file.cursor(3) %>
Links:: [[🗺 O3 MOC]]
___

# O3 - <% tp.file.title.slice(14) %>

## My Items

Weekly Plans
- [ ] <% tp.file.cursor(5) %>

## Their Items
- …

## Notes
- <% tp.file.cursor(7) %>

___

