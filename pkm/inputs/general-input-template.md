---
started: <%tp.date.now("YYYY-MM-DD")%>
finished: 
rating: 
created: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
modified: <% tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
title:
---

Status:: #📖<% tp.file.cursor(2) %>
Tags:: #input<% tp.file.cursor(3) %>
Links:: <% tp.file.cursor(4) %>
___

# <% tp.file.title %>

[Link](<% tp.file.cursor(6) %>)

## Summary

> 

## Notes
- <% tp.file.cursor(7) %>

### Ideas
- 

### Actionable
- 

## Thoughts/Questions
- 

### Prompts
**What other ideas is this related to?**
- 

**What problem does this solve? Who can it help?**
- 

**What personal experiences do I have related?**
- 

___

