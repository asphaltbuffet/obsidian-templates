---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY.MM.DD - ddd');
// moment dates are mutable 
let weekLink = fileDate.format('gggg-[W]ww');
let dateLink = fileDate.format('YYYY-MM-DD');
let datePretty = fileDate.format('dddd, MMMM Do YYYY')
%>
  - <% dateLink %>
  - <% datePretty %>
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>  
template: dailyNote-v2.2.0
title: <% datePretty %>
---

love:: false
sleep:: <% tp.system.prompt("Sleep (hrs):", "", false) %>
Tags:: #📅/daily
___

![[<% weekLink %>#^<% weekLink%>nav]]

# <% datePretty %>

## ✒ Notes

- …

^notes-link

___
