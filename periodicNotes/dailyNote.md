---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY.MM.DD - ddd');
// moment dates are mutable 
let monthLink = fileDate.format('YYYY-MM');
let weekLink = fileDate.format('gggg-[W]ww');
let dayLink = fileDate.format('YYYYMMDD');
let dateLink = fileDate.format('YYYY-MM-DD');
%>
tracking:
  love: false
  sleep: <% tp.system.prompt("Sleep (hrs):", "0", false) %>
title: <% tp.file.title %>
---
Tags:: #📅/daily
Links:: 
___

![[<% weekLink %>#^<% weekLink%>nav]]

# <% moment(fileDate).format('dddd, MMMM Do YYYY') %>

## 📅 Agenda

### 🎈 Birthdays
```dataview
TABLE Name, Birthday
FROM #👤
WHERE dateformat(Birthday, "MM-DD") = dateformat(<% dateLink %>, "MM-DD")
SORT Birthday ASC
```

> [!calendar]+
> ![[<% monthLink %>#^<% dayLink %>]]

## ✔ Tasks

> [!overdue]+
> ```tasks
> not done
> path does not include 99-templates
> due before <% dateLink %>
> limit 5
> ```

> [!unfinished]+
>
>```tasks
> not done
> path does not include 99-templates
>
> due on <% dateLink %>
>
> short mode
> ```

> [!due-soon]-
>
>```tasks
> not done
> path does not include 99-templates
>
> due after <% dateLink %>
> due before <% moment(fileDate).add(1, 'w').format('YYYY-MM-DD') %>
>
> short mode
> ```

## ✒ Notes

- …

^notes-link

___
Created:: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
Modified:: `=dateformat(this.file.mtime,"yyyy-MM-dd HH:mm")`
