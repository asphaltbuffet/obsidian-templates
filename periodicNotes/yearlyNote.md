---
date created: <% tp.file.creation_date('dddd, MMMM Do, YYYY h:mm:ss a') %>
date modified: <% tp.date.now('dddd, MMMM Do, YYYY h:mm:ss a') %>
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY');
// moment dates are mutable 
let prevYear = moment(fileDate).subtract(1, 'y').format('YYYY');
let nextYear = moment(fileDate).add(1, 'y').format('YYYY');
let yearLink = fileDate.format('YYYY');
-%> 
tags: yearly_note <% yearLink %>
---

<%*
// ❮❮ ⋮ 2021 ⋮ ❯❯ 
// [[path/to/file|display_text]] 
let navStr = `[[20-periodic-notes/25-yearly/${prevYear}|❮❮]] ⋮ [[20-periodic-notes/25-yearly/${yearLink}|${yearLink}]] ⋮ [[20-periodic-notes/25-yearly/${nextYear}|❯❯]]`;
tR += navStr 
%>

# <% tp.file.title %>
### 💤 Sleep

```dataviewjs
const calendarData = { 
	year: <% yearLink %>,
	colors: {   // optional, defaults to first value
	  blue:        ["#8cb9ff","#69a3ff","#428bff","#1872ff","#0058e2"], // this first entry is considered default
	  green:       ["#c6e48b","#7bc96f","#49af5d","#2e8840","#196127"],
	  red:         ["#ff9e82","#ff7b55","#ff4d1a","#e73400","#bd2a00"],
	  orange:      ["#ffa244","#fd7f00","#dd6f00","#bf6000","#9b4e00"],
	  pink:        ["#ff96cb","#ff70b8","#ff3a9d","#ee0077","#c30062"],
	  orangeToRed: ["#ffdf04","#ffbe04","#ff9a03","#ff6d02","#ff2c01"]
	},
	entries: [] // populated in the DataviewJS loop below
}

for(let page of dv.pages('"20-periodic-notes/21-daily"').where(p=>p.tracking.sleep).sort(p=>p.date)){ //DataviewJS stuff

	calendarData.entries.push({
		date: moment(page.file.name, 'YYYY.MM.DD - ddd'),
		intensity: page.tracking.sleep, // optional, what color intensity to use for entry, will autoscale. Default 4 (1-5)
		content: "", // optional, adds text to the date cell (use at own risk)
		color: "blue", // optional, reference from your colors object. If no color is supplied; colors[0] is used
	})

}

/**
* param1  HTMLElement   this gives the plugin a reference to render the calendar at
* param2  CalendarData  your calendar object, with settings/data for the calendar
*/
renderHeatmapCalendar(this.container, calendarData)

```

### 💕 Love
```dataviewjs
const calendarData = { 
	year: <% yearLink %>,
	colors: {   // optional, defaults to first value
	  blue:        ["#8cb9ff","#69a3ff","#428bff","#1872ff","#0058e2"], // this first entry is considered default
	  green:       ["#c6e48b","#7bc96f","#49af5d","#2e8840","#196127"],
	  red:         ["#ff9e82","#ff7b55","#ff4d1a","#e73400","#bd2a00"],
	  orange:      ["#ffa244","#fd7f00","#dd6f00","#bf6000","#9b4e00"],
	  pink:        ["#ff96cb","#ff70b8","#ff3a9d","#ee0077","#c30062"],
	  orangeToRed: ["#ffdf04","#ffbe04","#ff9a03","#ff6d02","#ff2c01"],
	},
	entries: [] // populated in the DataviewJS loop below
}

for(let page of dv.pages('"20-periodic-notes/21-daily"').where(p=>p.tracking.love).sort(p=>p.date)){ //DataviewJS stuff

	calendarData.entries.push({
		date: moment(page.file.name, 'YYYY.MM.DD - ddd').format('YYYY-MM-DD'),
		intensity: 3,
//		content: "🎔",
		color: "pink", // optional, reference from your colors object. If no color is supplied; colors[0] is used
	})

}

/**
* param1  HTMLElement   this gives the plugin a reference to render the calendar at
* param2  CalendarData  your calendar object, with settings/data for the calendar
*/
renderHeatmapCalendar(this.container, calendarData)

```