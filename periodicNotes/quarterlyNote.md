---
created: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
modified: <% tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
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

