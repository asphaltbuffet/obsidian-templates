---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY.MM.DD - ddd');
// moment dates are mutable 
let prevDay = moment(fileDate).subtract(1, 'd').format('YYYY.MM.DD - ddd');
let nextDay = moment(fileDate).add(1, 'd').format('YYYY.MM.DD - ddd');
let yearLink = fileDate.format('YYYY');
let quarterLink = fileDate.format('YYYY-[Q]Q');
let monthLink = fileDate.format('YYYY-MM');
let weekLink = fileDate.format('gggg-[W]ww'); 
-%> "<% tp.file.title %>"
tags: daily_note <% fileDate.format("YYYYMMDD") %> <% weekLink %> <% monthLink %> <% quarterLink %> <% yearLink %> 
tracking:
  love: false
  sleep: <% tp.system.prompt("Sleep (hrs):", "0", false) %>
title: <% tp.file.title %>
---

<%*
// ❮❮ ⋮ 2021 › Q4 › 12 › W49 ⋮ ❯❯ 
// [[path/to/file|display_text]] 
let navStr = `[[20-periodic-notes/21-daily/${prevDay}|❮❮]] ⋮ [[20-periodic-notes/25-yearly/${yearLink}|${yearLink}]] › [[20-periodic-notes/24-quarterly/${quarterLink}|${fileDate.format('[Q]Q')}]] › [[20-periodic-notes/23-monthly/${monthLink}|${fileDate.format('MMM')}]] › [[20-periodic-notes/22-weekly/${weekLink}|${fileDate.format('[W]ww')}]] ⋮ [[20-periodic-notes/21-daily/${nextDay}|❯❯]]`;
tR += navStr 
%>

# <% tp.file.title %>

## 📅 Agenda

> [!calendar]+
> ![[<% moment(fileDate).format('YYYY-MM') %>#^<% moment(fileDate).format('YYYYMMDD') %>]]

## ✔ Tasks

> [!overdue]+
> ```tasks
> not done
> path does not include 99-templates
> due before <% fileDate.format('YYYY-MM-DD') %>
> limit 5
> ```

> [!unfinished]+
>
>```tasks
> not done
> path does not include 99-templates
>
> due on <% moment(fileDate).format('YYYY-MM-DD') %>
>
> short mode
> ```

> [!due-soon]-
>
>```tasks
> not done
> path does not include 99-templates
>
> due after <% moment(fileDate).format('YYYY-MM-DD') %>
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
