---
created: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
modified: <% tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY.MM.DD - ddd');
// moment dates are mutable 
let monthLink = fileDate.format('YYYY-MM');
let weekLink = fileDate.format('gggg-[W]ww');
let dayLink = fileDate.format('YYYYMMDD');
let dateLink = fileDate.format('YYYY-MM-DD');
let datePretty = fileDate.format('dddd, MMMM Do YYYY')
%>
  - <% dateLink %>
  - <% datePretty %>
tracking:
  love: false
  sleep: <% tp.system.prompt("Sleep (hrs):", "0", false) %>
title: <% tp.file.title %>
---
Tags:: #📅/daily
Links:: 
___

![[<% weekLink %>#^<% weekLink%>nav]]

# <% datePretty %>


## ✒ Notes

- …

^notes-link

## 📅 Agenda

### ⏰ Morning

- …

### 🕜 Afternoon

- …

### 🌙 Evening

- …

___

