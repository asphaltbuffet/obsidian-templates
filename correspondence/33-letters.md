---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY-MM-DD');
// moment dates are mutable 
let personLink = tp.file.title.split("_")[1]
-%> 
tags: letter
title: Correspondence from <% fileDate.format('MMM D, YYYY') %>
---
Status:: #✉/<% tp.file.cursor(2) %>
Date:: <% fileDate.format('YYYY-MM-DD') %>
Correspondent:: <% personLink %>
Antecedent:: <% tp.file.cursor(3) %>
___

# Correspondence from <% fileDate.format('MMM D, YYYY') %>

## Image

[[30-correspondence/33-letters/attachments/<% tp.file.title %>.pdf|<% tp.file.title %>.pdf]]

## Transcription

*Letter has not been transcribed.*

___
```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
