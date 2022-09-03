---
aliases: <%*
var fileDate = moment(tp.file.creation_date('YYYY-MM-DD'), 'YYYY-MM-DD');
// moment dates are mutable 
let personNumber = tp.file.title;
let personName = tp.system.prompt("Name:", "Unknown", false);
let location = tp.system.suggester(["USA", "International"], ["domestic", "international"]);
-%> 
tags: lex
member:
  active: <% tp.system.suggester(["Active", "Inactive"], ["true", "false"]) %>
  memberName: <% personName %>
title: <% personNumber %>
---

# <% personNumber %>

> [!<% location %>] <% personName %>
> …address…

# Mail

```dataview

LIST WITHOUT ID 
"[[" + file.path + "|" + letter.date + "]] " + letter.direction 
FROM #letter OR #postcard 
WHERE letter.person = "<% personNumber %>"
SORT letter.date DESC

```
