---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY-MM');
// moment dates are mutable 
let yearLink = fileDate.format('YYYY');
let quarterLink = fileDate.format('YYYY-[Q]Q');
let monthLink = fileDate.format('YYYY-MM');
let monthDays = moment(fileDate).daysInMonth();
-%> 
---
Tags:: #📅/monthly
Links:: 
___

![[<% yearLink %>#^<% yearLink %>nav]]

<%*
// start with first day of month, print week, add 7 days, print week if in same month, repeat
let curDay = moment(fileDate).startOf('month');
let weekNav = `**[[${monthLink}|M]]** ⁞`;

while (  moment(curDay).isSame(fileDate, 'month')  ) {
    weekNav += curDay.format('⁞ [[[]gggg-[W]ww[|W]ww[]] ]');
    curDay.add(1, 'w').weekday(0);
}

weekNav += `^${monthLink}nav`;
tR += weekNav
%>

# <% moment(fileDate).format('MMMM YYYY') %>

## 📆 Month at a Glance
[[periodic-notes/21-daily/<% moment(fileDate).add(0, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(0, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(1, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(1, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(2, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(2, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(3, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(3, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(4, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(4, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(5, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(5, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(6, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(6, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(7, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(7, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(8, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(8, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(9, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(9, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(10, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(10, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(11, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(11, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(12, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(12, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(13, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(13, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(14, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(14, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(15, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(15, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(16, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(16, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(17, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(17, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(18, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(18, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(19, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(19, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(20, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(20, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(21, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(21, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(22, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(22, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(23, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(23, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(24, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(24, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(25, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(25, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(26, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(26, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(27, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(27, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(28, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(28, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(29, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(29, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(30, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(30, 'd').format('YYYYMMDD') %>

[[periodic-notes/21-daily/<% moment(fileDate).add(31, 'd').format('YYYY.MM.DD - ddd[|]DD dd') %>]]
- No preplanned events.

^<% moment(fileDate).add(31, 'd').format('YYYYMMDD') %>

## ✒ Notes
- …

## ✅ Completed Tasks
```tasks

done after <% moment(fileDate).subtract(1,'month').endOf('month').format('YYYY-MM-DD') %>
done before <% moment(fileDate).add(1,'month').startOf('month').format('YYYY-MM-01') %>
path does not include 99 Templates

sort by done
```

___
```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
