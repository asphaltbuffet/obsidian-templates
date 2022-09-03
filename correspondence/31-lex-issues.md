---
aliases: <%*
let volumeLink = tp.system.prompt("Volume:", "2", false);
let seasonLink = tp.system.prompt("Season:", "Winter", false);
let yearLink = tp.system.prompt("Year:", tp.date.now('YYYY'), false);
let issueLink = tp.system.prompt("Issue:", "", false);
%>
lex:
  volume: <% volumeLink %>
  issue: <% issueLink %>
  season: <% seasonLink %>
  year: <% yearLink %>
title: LEX \#<% issueLink %>,  <% seasonLink %> <% yearLink %>
---
Status:: 
Links:: [[🗺 Letter Exchange MOC]]


# LEX \#<% issueLink %>,  <% seasonLink %> <% yearLink %>

![[correspondence/31-lex-issues/attachments/LEX-<% issueLink %>.png|500]]

## ART & PHOTOGRAPHY

## COLLECTING & HOBBIES

## CONTEMPORARY ISSUES

## CRAFTS

## CREATIVE WRITING

## DAILY LIFE

## GHOST LETTERS

## EDUCATION

## GENEALOGY

## HEALTH & WELLNESS

## HISTORY

## HOLIDAYS

## HUMOR

## INSIGHTS

## LETTER WRITING

## LETTERS TO LEX

## LOST & FOUND

## IN MEMORIUM

## LITERATURE

## METAPHYSICS & NEW AGE

## MOVIES & TELEVISION

## MUSIC

## NATURE & GARDENING

## PETS

## PHILOSOPHY

## POSTCARDS

## POTLUCK

## PSYCHOLOGY

## REGIONAL & TRAVEL

## RELIGION & SPIRITUALITY

## SCIENCE & TECHNOLOGY

## SENIORS

## SHORT 'N' SWEET

## WORK & CAREERS

___
```ad-fileInfo 
Created:: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified:: <%+ tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
```
