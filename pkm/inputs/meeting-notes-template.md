---
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: meeting-notes-template-v2.0.0
title: <% tp.file.title %>
---

Status:: #meeting<% tp.file.cursor(1) %>
Date:: <% tp.file.cursor(2) %>
Tags:: <% tp.file.cursor(3) %>
Links:: <% tp.file.cursor(4) %>
___

# <% tp.file.title %>

## Summary

Attendees:: <% tp.file.cursor(5) %>
Topics:: <% tp.file.cursor(6) %>

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
