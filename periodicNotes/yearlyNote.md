---
Created: <% tp.file.creation_date("yyyy-MM-DD HH:mm") %>
Modified: <% tp.file.last_modified_date("yyyy-MM-DD HH:mm") %>
aliases: <%*
var fileDate = moment(tp.file.title, 'YYYY.MM.DD - ddd');
// moment dates are mutable 
let yearLink = fileDate.format('YYYY');
let quarterLink = fileDate.format('YYYY-[Q]Q');
%> 
title: <% yearLink %>
---

Tags:: #📅/yearly
___

**[[<% yearLink %>|Y]]** ⁞⁞ [[<% yearLink %>-01|Jan]] ⁞ [[<% yearLink %>-02|Feb]] ⁞ [[<% yearLink %>-03|Mar]] ⁞ [[<% yearLink %>-04|Apr]] ⁞ [[<% yearLink %>-05|May]] ⁞ [[<% yearLink %>-06|Jun]] ⁞ [[<% yearLink %>-07|Jul]] ⁞ [[<% yearLink %>-08|Aug]] ⁞ [[<% yearLink %>-09|Sep]] ⁞ [[<% yearLink %>-10|Oct]] ⁞ [[<% yearLink %>-11|Nov]] ⁞ [[<% yearLink %>-12|Dec]] ^<% yearLink %>nav

# <% yearLink %>

## 📊 Metrics

### 💤 Sleep

```dataviewjs

const calendarData = { 
	year: <% yearLink %>, 
	colors: {   // optional, defaults to first value
	  blue:        ["#b8d4ff","#6da6ff","#2c7dff","#0059e7","#003ea1"], // this first entry is considered default
	  green:       ["#c6e48b","#7bc96f","#49af5d","#2e8840","#196127"],
	  red:         ["#ff9e82","#ff7b55","#ff4d1a","#e73400","#bd2a00"],
	  orange:      ["#ffa244","#fd7f00","#dd6f00","#bf6000","#9b4e00"],
	  pink:        ["#ff96cb","#ff70b8","#ff3a9d","#ee0077","#c30062"],
	  orangeToRed: ["#ffdf04","#ffbe04","#ff9a03","#ff6d02","#ff2c01"],
	  blueblack:   ["#00378f","#005ced","#3281ff","#6fa6ff","#a5c7ff"]
	},
	entries: [] // populated in the DataviewJS loop below
}

for(let page of dv.pages('"periodic-notes/21-daily"').where(p=>p.tracking.sleep).sort(p=>p.date)){ //DataviewJS stuff

	calendarData.entries.push({
		date: moment(page.file.name, 'YYYY.MM.DD - ddd').format('YYYY-MM-DD'),
		intensity: moment.duration(page.tracking.sleep, 'hours').asHours(),
    content: moment(page.file.name, 'YYYY.MM.DD - ddd').format('DD'),
		color: "blue",
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
	  orangeToRed: ["#ffdf04","#ffbe04","#ff9a03","#ff6d02","#ff2c01"]
	},
	entries: [] // populated in the DataviewJS loop below
}

for(let page of dv.pages('"periodic-notes/21-daily"').where(p=>p.tracking.love).sort(p=>p.date)){ //DataviewJS stuff

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

### 📉 Weight

```dataviewjs

let days = dv.pages('"periodic-notes/21-daily"')
  .where(p => p.tracking.weight)
  .sort(p => p.date)

let dates = [], attrData = [];
days.forEach(p=> {
  dates.push(moment(p.file.name, 'YYYY.MM.DD - ddd').format('M/D'));
  attrData.push(p.tracking.weight);
})

const chartData = {
  type: 'line',
  data: {
    labels: dates,
    datasets: [{
      label: 'Ben',
      data: attrData,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',  
      borderColor: 'rgba(255, 99, 132, 1)',  
      borderWidth: 1,
      fill: true,
    }],
  },
}

window.renderChart(chartData, this.container);
```

Structure pulled from: [mulfok](https://github.com/mulfok/periodic-note-templates/blob/main/Scripts/CustomJS/DvCharts.js)
___

