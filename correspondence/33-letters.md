---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY-MM-DD');
// moment dates are mutable 
let personLink = tp.file.title.split("_")[1]
-%> 
title: Correspondence on <% fileDate.format('MMM D, YYYY') %>
---

Tags:: #✉
Status:: #📥<% tp.file.cursor(2) %>📤
Date:: <% fileDate.format('YYYY-MM-DD') %>
Correspondent:: [[<% personLink %>]]
Antecedent:: [[<% tp.file.cursor(3) %>]]
___

# Correspondence on <% fileDate.format('MMM D, YYYY') %>

## Image

[[correspondence/33-letters/attachments/<% tp.file.title %>.pdf|<% tp.file.title %>.pdf]]

## Transcription
```ad-quote
title: 
Letter has not been transcribed.
```

___
```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
