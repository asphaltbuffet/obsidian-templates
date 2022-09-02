---
date created: <% tp.file.creation_date('dddd, MMMM Do, YYYY h:mm:ss a') %>
date modified: <% tp.date.now('dddd, MMMM Do, YYYY h:mm:ss a') %>
aliases: 
<%*
var fileDate = moment(tp.file.title, 'gggg-[W]ww');
// moment dates are mutable 
let prevWeek = moment(fileDate).subtract(1, 'w').format('gggg-[W]ww');
let nextWeek = moment(fileDate).add(1, 'w').format('gggg-[W]ww');
let yearLink = fileDate.format('gggg');
let quarterLink = fileDate.format('gggg-[Q]Q');
let monthLink = fileDate.format('gggg-MM');
let weekLink = fileDate.format('gggg-[W]ww');
-%>
tags: weekly_note <% weekLink %> <% monthLink %> <% quarterLink %> <% yearLink %> 
title: <% weekLink %>
---

<%*
// ❮❮ ⋮ 2021 › Q4 › 12 ⋮ ❯❯ 
// [[path/to/file|display_text]] 
let navStr = `[[20-periodic-notes/22-weekly/${prevWeek}|❮❮]] ⋮ [[20-periodic-notes/25-yearly/${yearLink}|${yearLink}]] › [[20-periodic-notes/24-quarterly/${quarterLink}|${fileDate.format('[Q]Q')}]] › [[20-periodic-notes/23-monthly/${monthLink}|${fileDate.format('MMM')}]] ⋮ [[20-periodic-notes/22-weekly/${nextWeek}|❯❯]]`;
tR += navStr 
%>

# <% weekLink %>



## 📆 Summary

- [[20-periodic-notes/21-daily/<% moment(fileDate).weekday(0).format('YYYY.MM.DD - ddd[|]dddd') %>]]
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

