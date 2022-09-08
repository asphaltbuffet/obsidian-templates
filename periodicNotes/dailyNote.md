---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY.MM.DD - ddd');
// moment dates are mutable 
let monthLink = fileDate.format('YYYY-MM');
let weekLink = fileDate.format('gggg-[W]ww');
let dayLink = fileDate.format('YYYYMMDD');
let dateLink = fileDate.format('YYYY-MM-DD');
%>
tracking:
  love: false
  sleep: <% tp.system.prompt("Sleep (hrs):", "0", false) %>
title: <% tp.file.title %>
---
Tags:: #📅/daily
Links:: 
___

![[<% weekLink %>#^<% weekLink%>nav]]

# <% moment(fileDate).format('dddd, MMMM Do YYYY') %>

## 📅 Agenda

### 🎈 Birthdays
```dataview
TABLE Name, Birthday
FROM #Birthday
WHERE dateformat(date(Birthday), "MM-DD") = dateformat(date("<% dateLink %>"), "MM-DD")
SORT Birthday ASC
```

### ⏰ Morning

- …

### 🕜 Afternoon

- …

### 🌙 Evening

- …

## ✔ Tasks

```tasks
not done
path does not include 99-templates
due before <% dateLink %>
limit 5
```

## ✒ Notes

- …

^notes-link

___
```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
