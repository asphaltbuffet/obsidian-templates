---
aliases: 
<%*
var fileDate = moment(tp.file.title, 'gggg-[W]ww');
// moment dates are mutable 
let monthLink = fileDate.format('gggg-MM');
let weekLink = fileDate.format('gggg-[W]ww');
let day0Text = moment(fileDate).weekday(0).format('dd');
let day0Link = moment(fileDate).weekday(0).format('YYYY.MM.DD - ddd[|]DD');
let day1Text = moment(fileDate).weekday(1).format('dd');
let day1Link = moment(fileDate).weekday(1).format('YYYY.MM.DD - ddd[|]DD');
let day2Text = moment(fileDate).weekday(2).format('dd');
let day2Link = moment(fileDate).weekday(2).format('YYYY.MM.DD - ddd[|]DD');
let day3Text = moment(fileDate).weekday(3).format('dd');
let day3Link = moment(fileDate).weekday(3).format('YYYY.MM.DD - ddd[|]DD');
let day4Text = moment(fileDate).weekday(4).format('dd');
let day4Link = moment(fileDate).weekday(4).format('YYYY.MM.DD - ddd[|]DD');
let day5Text = moment(fileDate).weekday(5).format('dd');
let day5Link = moment(fileDate).weekday(5).format('YYYY.MM.DD - ddd[|]DD');
let day6Text = moment(fileDate).weekday(6).format('dd');
let day6Link = moment(fileDate).weekday(6).format('YYYY.MM.DD - ddd[|]DD');
-%>
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: weeklyNote-v2.0.0
title: Week <% moment(fileDate).format('w - MMMM gggg') %>
---

Tags:: #📅/weekly
___

![[<% monthLink %>#^<% monthLink %>nav]]

**[[<% weekLink %>|W]]** ⁞⁞ <% day0Text %> [[<% day0Link %>]] ⁞ <% day1Text %> [[<% day1Link %>]] ⁞ <% day2Text %> [[<% day2Link %>]] ⁞ <% day3Text %> [[<% day3Link %>]] ⁞ <% day4Text %> [[<% day4Link %>]] ⁞ <% day5Text %> [[<% day5Link %>]] ⁞ <% day6Text %> [[<% day6Link %>]] ^<% weekLink %>nav

# Week <% moment(fileDate).format('w - MMMM gggg') %>

## 📆 Summary

- [[periodic-notes/21-daily/<% moment(fileDate).weekday(0).format('YYYY.MM.DD - ddd[|]DD[]]] dddd') %>
  ![[<% moment(fileDate).weekday(0).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(1).format('YYYY.MM.DD - ddd[|]DD[]]] dddd') %>
  ![[<% moment(fileDate).weekday(1).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(2).format('YYYY.MM.DD - ddd[|]DD[]]] dddd') %>
  ![[<% moment(fileDate).weekday(2).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(3).format('YYYY.MM.DD - ddd[|]DD[]]] dddd') %>
  ![[<% moment(fileDate).weekday(3).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(4).format('YYYY.MM.DD - ddd[|]DD[]]] dddd') %>
  ![[<% moment(fileDate).weekday(4).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(5).format('YYYY.MM.DD - ddd[|]DD[]]] dddd') %>
  ![[<% moment(fileDate).weekday(5).format('YYYY.MM.DD - ddd') %>#^notes-link]]
- [[periodic-notes/21-daily/<% moment(fileDate).weekday(6).format('YYYY.MM.DD - ddd[|]DD[]]] dddd') %>
  ![[<% moment(fileDate).weekday(6).format('YYYY.MM.DD - ddd') %>#^notes-link]]
  
## ✒ Notes

- …

^notes-link

___

