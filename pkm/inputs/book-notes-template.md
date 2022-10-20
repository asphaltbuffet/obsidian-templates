---
started: <%tp.date.now("YYYY-MM-DD")%>
finished:
rating:
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: book-notes-template-v2.0.0
title:
---

Status:: #📖<% tp.file.cursor(1) %>
Author:: [[<% tp.file.cursor(2) %>]]
Tags:: #input/book
Links:: <% tp.file.cursor(3) %>
___

# <%tp.file.title%>

> [!tldr] Application Note
> [[<%tp.file.title%> Application]]

## Notes
%% Add notes from reading that are not tied to specific passages here. %%
- 

## Highlights
%% Link to passages imported from other sources and add further details in this section. %%
- 

___
