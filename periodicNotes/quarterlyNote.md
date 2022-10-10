---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY.MM.DD - ddd');
// moment dates are mutable 
let yearLink = fileDate.format('YYYY');
let quarterLink = fileDate.format('YYYY-[Q]Q');
%>
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: quarterlyNote-v2.0.0
title: <% moment(fileDate).format('[Q]Q, YYYY') %>
---

Tags:: #📅/quarterly
___

# <% moment(fileDate).format('[Q]Q, YYYY') %>

___
