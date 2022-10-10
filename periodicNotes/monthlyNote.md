---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY-MM');
// moment dates are mutable 
let yearLink = fileDate.format('YYYY');
let quarterLink = fileDate.format('YYYY-[Q]Q');
let monthLink = fileDate.format('YYYY-MM');
let monthDays = moment(fileDate).daysInMonth();
-%>
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD") %>
template: monthlyNote-v2.0.0
title: <% tp.file.title %>
---

Tags:: #📅/monthly
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

## ✒ Notes

- …

## 📆 Month at a Glance
<%*
curDay = moment(fileDate).startOf('month');
while ( moment(curDay).isSame(fileDate, 'month') ){
%>
### <% moment(curDay).format('DD [|] ddd') %>
<%*
  curDay.add(1, 'd')
}
%>

## ✅ Completed Tasks
```tasks

done after <% moment(fileDate).subtract(1,'month').endOf('month').format('YYYY-MM-DD') %>
done before <% moment(fileDate).add(1,'month').startOf('month').format('YYYY-MM-01') %>
path does not include 99 Templates

sort by done
```

___
