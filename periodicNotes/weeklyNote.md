---
aliases: 
<%*
var fileDate = moment(tp.file.title, 'gggg-[W]ww');
// moment dates are mutable 
let monthLink = fileDate.format('gggg-MM');
let weekLink = fileDate.format('gggg-[W]ww');
-%>
tags: weekly_note
---

<%*
let monStr = `![[${monthLink}#^${monthLink}nav]]`;
tR += monStr
%>
# Week <% moment(fileDate).format('ww - MMMM gggg') %>

[[periodic-notes/22-weekly/<% moment(fileDate).format('gggg-[W]ww') %>|<% moment(fileDate).format('[W]ww') %>]] ⁞⁞ <% moment(fileDate).weekday(0).format('dd') %> [[periodic-notes/21-daily/<% moment(fileDate).weekday(0).format('YYYY.MM.DD - ddd[|]DD') %>]] ⁞ <% moment(fileDate).weekday(1).format('dd') %> [[periodic-notes/21-daily/<% moment(fileDate).weekday(1).format('YYYY.MM.DD - ddd[|]DD') %>]] ⁞ <% moment(fileDate).weekday(2).format('dd') %> [[periodic-notes/21-daily/<% moment(fileDate).weekday(2).format('YYYY.MM.DD - ddd[|]DD') %>]] ⁞ <% moment(fileDate).weekday(3).format('dd') %> [[periodic-notes/21-daily/<% moment(fileDate).weekday(3).format('YYYY.MM.DD - ddd[|]DD') %>]] ⁞ <% moment(fileDate).weekday(4).format('dd') %> [[periodic-notes/21-daily/<% moment(fileDate).weekday(4).format('YYYY.MM.DD - ddd[|]DD') %>]] ⁞ <% moment(fileDate).weekday(5).format('dd') %> [[periodic-notes/21-daily/<% moment(fileDate).weekday(5).format('YYYY.MM.DD - ddd[|]DD') %>]] ⁞ <% moment(fileDate).weekday(6).format('dd') %> [[periodic-notes/21-daily/<% moment(fileDate).weekday(6).format('YYYY.MM.DD - ddd[|]DD') %>]] ^<% moment(fileDate).format('gggg-[W]ww') %>nav

<%*
let firstDay = moment(fileDate).startOf('month')
let endDay = moment(fileDate).endOf('month')
// start with first day, print week, add 7 days, print week if in same month, repeat

do {

}
while ( curMonth == fileDate.format('MM') )
tR += 
%>
## 📆 Summary

- [[periodic-notes/21-daily/<% moment(fileDate).weekday(0).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(0).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(1).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(1).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(2).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(2).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(3).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(3).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(4).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(4).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(5).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(5).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(6).format('YYYY.MM.DD - ddd[|]dddd') %>]]
  ![[<% moment(fileDate).weekday(6).format('YYYY.MM.DD - ddd') %>#^notes-link]]
  
## ✒ Notes

- …

^notes-link

___
>[!info]
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: `=dateformat(this.file.mtime,"yyyy-MM-dd HH:mm")`

