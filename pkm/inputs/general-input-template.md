---
started: <%tp.date.now("YYYY-MM-DD")%>
finished: 
rating: 
---

Status:: #📥/<% tp.file.cursor(2) %>
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
<% tp.file.include([[footer]]) %>
