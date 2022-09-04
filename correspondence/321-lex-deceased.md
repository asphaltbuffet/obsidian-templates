---
aliases: 
tags: member
title: 
---
Status:: #👤/❌
Name::
___

# <% personNumber %>
> [!deceased]- Unknown
> …details…

# Mail

```dataview

LIST WITHOUT ID 
"[[" + file.path + "|" + letter.date + "]] " + letter.direction 
FROM #letter OR #postcard 
WHERE letter.person = "<% personNumber %>"
SORT letter.date DESC

```

___
```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
