---
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY.MM.DD - ddd');
// moment dates are mutable 
let yearLink = fileDate.format('YYYY');
let quarterLink = fileDate.format('YYYY-[Q]Q');
%>
---
Tags:: #📅/quarterly
Links:: 
___

# <% moment(fileDate).format('[Q]Q, YYYY') %>

___
```ad-fileInfo 
Created:: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
