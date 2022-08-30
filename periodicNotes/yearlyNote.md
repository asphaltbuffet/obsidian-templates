---
date created: Monday, August 29th, 2022 11:42:49 pm
date modified: Monday, August 29th, 2022 11:44:39 pm
aliases:  
tags: yearly_note Invalid date
---

[[20-periodic-notes/25-yearly/Invalid date|❮❮]] ⋮ [[20-periodic-notes/25-yearly/Invalid date|Invalid date]] ⋮ [[20-periodic-notes/25-yearly/Invalid date|❯❯]]

# 🚧 My Projects
### :fas_bed:  Sleep

```dataviewjs
const calendarData = { 
	year: Invalid date,
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

### :fas_heart:  Love
```dataviewjs
const calendarData = { 
	year: Invalid date,
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
