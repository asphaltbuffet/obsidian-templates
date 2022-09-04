---
aliases: <%*
var fileDate = moment(tp.file.creation_date('YYYY-MM-DD'), 'YYYY-MM-DD');
// moment dates are mutable 
let personNumber = tp.file.title;
let personName = tp.system.prompt("Name:", "Unknown", false);
let location = tp.system.suggester(["USA", "International"], ["domestic", "international"]);
-%> 
title: <% personNumber %> - <% personName %>
---
Status:: #:luc_user:/<% tp.system.suggester(["Active", "Inactive", “Deceased”], ["🟢", "🟡", “🔴”]) %>
Locale:: <% location %>
Name:: <% personName %>
___

# <% personNumber %> - <% personName %>

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

# Lex Issues
```dataview
TABLE 
FROM #issue 
WHERE file.inlinks()
```
```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
