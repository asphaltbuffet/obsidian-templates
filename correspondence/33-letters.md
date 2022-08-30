---
date created: <% tp.file.creation_date('dddd, MMMM Do, YYYY h:mm:ss a') %>
date modified: <% tp.date.now('dddd, MMMM Do, YYYY h:mm:ss a') %>
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY-MM-DD');
// moment dates are mutable 
let yearLink = fileDate.format('YYYY');
let quarterLink = fileDate.format('YYYY-[Q]Q');
let monthLink = fileDate.format('YYYY-MM');
let weekLink = fileDate.format('gggg-[W]ww'); 
let personLink = tp.file.title.split("_")[1]
-%> 
tags: letter <% fileDate.format("YYYYMMDD") %> <% weekLink %> <% monthLink %> <% quarterLink %> <% yearLink %>
title: Correspondence
letter:
  person: <% personLink %>
  direction: <% tp.system.suggester(["Sent", "Received"], ['":luc_send:"', '":luc_download:"']) %>
  date: <% fileDate.format('YYYY-MM-DD') %>
---

[[30-correspondence/33-letters/PREV_<% personLink %>|Previous]] | [[30-correspondence/32-lex-members/<% personLink %>|<% personLink %>]] | [[30-correspondence/33-letters/NEXT_<% personLink %>|Next]]

# Correspondence

## Image

[[30-correspondence/33-letters/attachments/<% tp.file.title %>.pdf|<% tp.file.title %>.pdf]]

## Transcription

*Letter has not been transcribed.*

^transcription