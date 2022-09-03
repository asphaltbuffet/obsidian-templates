---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY-MM-DD');
// moment dates are mutable 
let yearLink = fileDate.format('YYYY');
let quarterLink = fileDate.format('YYYY-[Q]Q');
let monthLink = fileDate.format('YYYY-MM');
let weekLink = fileDate.format('gggg-[W]ww'); 
let personLink = tp.file.title.split("_")[1]
-%> 
tags: letter
title: Correspondence
letter:
  person: <% personLink %>
  direction: <% tp.system.suggester(["Sent", "Received"], ['":luc_send:"', '":luc_download:"']) %>
  date: <% fileDate.format('YYYY-MM-DD') %>
---
Sent:: <% fileDate.format('YYYY-MM-DD') %>
Reply-To:: [[<% tp.file.cursor(2) %>]]
[[30-correspondence/32-lex-members/<% personLink %>|<% personLink %>]]


# Correspondence

## Image

[[30-correspondence/33-letters/attachments/<% tp.file.title %>.pdf|<% tp.file.title %>.pdf]]

## Transcription

*Letter has not been transcribed.*

___
```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
