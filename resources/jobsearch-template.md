---
Created: <% tp.file.creation_date("yyyy-MM-DD") %>
Modified: <% tp.file.creation_date("yyyy-MM-DD") %>
template: jobsearch-template-v1.0.1
title: 
---

%% status will change as job search moves through process. 🟦 to-do, 🟩 active, 🟨 waiting, 🟥 rejected, ✖ withdrawn %%
Status:: #application/<% tp.file.cursor(2) %>
Tags:: #jobsearch
source:: <% tp.file.cursor(3) %>
job-posting:: <% tp.file.cursor(4) %>
date-applied:: <% tp.file.creation_date("yyyy-MM-DD") %>
follow-up:: <% tp.file.cursor(5) %>
Links:: [[🗺 Job Hunting MOC]]
___

# <% tp.file.title %>

## About

### Company

[Company Website](<% tp.file.cursor(6) %>)

> *can put a brief description of company here…*

### Compensation

Salary:: <% tp.file.cursor(7) %>

## Application

> [!question] 
> *put response from application here...*

- [ ] *follow-up task details here*

## Phone Screen

> [!question] 
> *put response from phone screen here…*

- [ ] *follow-up task details here*

## Assessement

> [!question] 
> *put response from assessment here…*

- [ ] *follow-up task details here*

## Interview

> [!question] 
> *put response from interview(s) here…*

- [ ] *follow-up task details here*

## Attachments

- *track any documents (cover letters, resumes, etc.) here…*
