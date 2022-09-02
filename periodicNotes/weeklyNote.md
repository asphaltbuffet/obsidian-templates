---
aliases:
<%*
var fileDate = moment(tp.file.title, 'gggg-[W]ww');
// moment dates are mutable 
let monthLink = fileDate.format('gggg-MM');
let weekLink = fileDate.format('gggg-[W]ww');
-%>
tags: weekly_note <% weekLink %> <% monthLink %>
---

<%*
let monStr = `![[${monthLink}#^${monthLink}nav]]`;`
tR += monStr
%>
# <% moment(fileDate).format('[Week] ww - MMMM YYYY') %>

<%*
let navStr = `[[20-periodic-notes/22-weekly/${weekLink}|❮❮]] ⁞⁞ <% moment(fileDate).weekday(0).format('d') %> [[periodic-notes/21-daily/<% moment(fileDate).weekday(0).format('YYYY.MM.DD - ddd[|]DD') %>]] ⁞ `;
tR += navStr 
%>

## 📆 Summary

- [[periodic-notes/21-daily/<% moment(fileDate).weekday(0).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(0).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[20-periodic-notes/21-daily/<% moment(fileDate).weekday(1).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(1).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[20-periodic-notes/21-daily/<% moment(fileDate).weekday(2).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(2).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[20-periodic-notes/21-daily/<% moment(fileDate).weekday(3).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(3).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[20-periodic-notes/21-daily/<% moment(fileDate).weekday(4).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(4).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[20-periodic-notes/21-daily/<% moment(fileDate).weekday(5).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(5).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[20-periodic-notes/21-daily/<% moment(fileDate).weekday(6).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(6).format('YYYY.MM.DD - ddd') %>#^notes-link]]
  
## ✒ Notes

- …

^notes-link

___
>[!info]
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: `=dateformat(this.file.mtime,"yyyy-MM-dd HH:mm")`

