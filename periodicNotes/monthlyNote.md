---
date created: <% tp.file.creation_date('dddd, MMMM Do, YYYY h:mm:ss a') %>
date modified: <% tp.date.now('dddd, MMMM Do, YYYY h:mm:ss a') %>
aliases: 
<%*
var fileDate = moment(tp.file.title, 'YYYY-MM');
// moment dates are mutable 
let prevMonth = moment(fileDate).subtract(1, 'M').format('YYYY-MM');
let nextMonth = moment(fileDate).add(1, 'M').format('YYYY-MM');
let yearLink = fileDate.format('YYYY');
let quarterLink = fileDate.format('YYYY-[Q]Q');
let monthLink = fileDate.format('YYYY-MM');
let monthDays = moment(fileDate).daysInMonth();
-%> 
tags: monthly_note <% monthLink %> <% quarterLink %> <% yearLink %> 
---

<%*
// ❮❮ ⋮ 2021 › Q4 ⋮ ❯❯ 
// [[path/to/file|display_text]] 
let navStr = `[[20-periodic-notes/23-monthly/${prevMonth}|❮❮]] ⋮ [[20-periodic-notes/25-yearly/${yearLink}|${yearLink}]] › [[20-periodic-notes/24-quarterly/${quarterLink}|${fileDate.format('[Q]Q')}]] ⋮ [[20-periodic-notes/23-monthly/${nextMonth}|❯❯]]`;
tR += navStr 
%>

# <% tp.file.title %>

## :fas_calendar: Month at a Glance
[[20-periodic-notes/21-daily/<% moment(fileDate).add(0, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(0, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(1, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(1, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(2, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(2, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(3, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(3, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(4, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(4, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(5, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(5, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(6, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(6, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(7, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(7, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(8, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(8, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(9, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(9, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(10, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(10, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(11, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(11, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(12, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(12, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(13, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(13, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(14, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(14, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(15, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(15, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(16, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(16, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(17, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(17, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(18, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(18, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(19, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(19, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(20, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(20, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(21, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(21, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(22, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(22, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(23, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(23, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(24, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(24, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(25, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(25, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(26, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(26, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(27, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(27, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(28, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(28, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(29, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(29, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(30, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(30, 'd').format('YYYYMMDD') %>

[[20-periodic-notes/21-daily/<% moment(fileDate).add(31, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(31, 'd').format('YYYYMMDD') %>

## :fas_pen_nib: Notes
- …


## :fas_check_square: Completed Tasks
```tasks

done after <% moment(fileDate).subtract(1,'month').endOf('month').format('YYYY-MM-DD') %>
done before <% moment(fileDate).add(1,'month').startOf('month').format('YYYY-MM-01') %>
path does not include 99-templates

sort by done
```