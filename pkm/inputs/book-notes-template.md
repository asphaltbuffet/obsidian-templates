---
started: <%tp.date.now("YYYY-MM-DD")%>
finished:
rating:
---
Status:: #📥/<% tp.file.cursor(2) %>
Author:: [[]]
Tags:: #input/book
Links:: <% tp.file.cursor(3) %>
___
# <%tp.file.title%>
> [!INFO] Application Note
> [[<%tp.file.title%> Application]]
## Notes
%% Add notes from reading that are not tied to specific passages here. %%
- 

## Highlights
%% Link to passages imported from other sources and add further details in this section. %%
- 

___
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: `=dateformat(this.file.mtime,"yyyy-MM-dd HH:mm")`
