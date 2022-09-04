---
aliases: <%*
var fileDate = moment(tp.file.creation_date('YYYY-MM-DD'), 'YYYY-MM-DD');
// moment dates are mutable 
let personNumber = tp.file.title;
let personName = await tp.system.prompt("Name:", "Unknown", false);
let location = await tp.system.suggester(["USA", "International"], ["domestic", "international"]);
let status = await tp.system.suggester(["Active", "Inactive", "Deceased"], ["🟢", "🟡", "🔴"]);
-%> 
title: <% personNumber %> - <% personName %>
---
Status:: #👤/<% status %>
Locale:: <% location %>
Name:: <% personName %>
___

# <% personNumber %> - <% personName %>

> [!<% location %>] <% personName %>
> …address…

# Mail

## Response Needed
```dataview
TABLE Date, Status
FROM #📥/🟡
WHERE correspondent = [[<% tp.file.title %>]]
SORT Date DESC

```

## Completed
```dataview

TABLE Date, Tags as "Type", Status
FROM #✉
WHERE correspondent = [[<% tp.file.title %>]]
SORT Date DESC

```

# Lex Issues
```query
tag:#issue line:([[<% personNumber %>]])
```

___

```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
