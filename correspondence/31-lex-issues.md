---
date created: <% tp.file.creation_date('dddd, MMMM Do, YYYY h:mm:ss a') %>
date modified: <% tp.date.now('dddd, MMMM Do, YYYY h:mm:ss a') %>
aliases: <%*
let volumeLink = tp.system.prompt("Volume:", "2", false);
let seasonLink = tp.system.prompt("Season:", "Winter", false);
let yearLink = tp.system.prompt("Year:", tp.date.now('YYYY'), false);
let issueLink = tp.system.prompt("Issue:", "", false);
%>
tags: issue lex volume<% volumeLink %> issue<% issueLink %> <% seasonLink %> <% yearLink %>
magazine:
  volume: <% volumeLink %>
  issue: <% issueLink %>
  season: <% seasonLink %>
  year: <% yearLink %>
title: LEX Issue <% issueLink %>
---

[[30-correspondence/31-lex-issues/PREV|❮❮]] ⋮ [[active-letter-exchanges|Vol<% volumeLink %>]] ⋮ [[30-correspondence/31-lex-issues/NEXT|❯❯]]

# LEX Issue <% issueLink %>

![[30-correspondence/31-lex-issues/attachments/LEX-<% issueLink %>.png|500]]

```toc
  max_depth: 2
```

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

