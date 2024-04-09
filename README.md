⚠️ This README is under construction ⚠️

This aims to be a little library to create simple but accurate (to a millisecond level) timelines, given a set of events.

## To do

- [x] Make this work with pointers.
- [ ] Make this work with ranges.
- [ ] Migrate to TypeScript.
- [ ] Turn this into a class with its constructor.
- [ ] Add methods:
  - [ ] To add events.
  - [ ] To remove events.
  - [ ] To change the unit.
  - [ ] To change the language.
  - [ ] To change the custom styles.
  - [ ] To choose what to show in the label (content, date, both, none).
  - [ ] To choose the format of the date in the label.
  - [ ] To get the timeline as HTML, SVG, and PNG.
- [ ] Keep a minified version of the library.
- [ ] Make demo with UI

## Usage

### Installation

```html
<script src="https://cdn.jsdelivr.net/some-slugs.js"></script>
```

### Basic usage

```html
<div id="timeline"></div>
<script>
  const events = [
    { date: "2021-01-01", name: "Event 1" },
    { date: "2021-01-02", name: "Event 2" },
    { date: "2021-01-03", name: "Event 3" },
    { date: "2021-01-04", name: "Event 4" },
    { date: "2021-01-05", name: "Event 5" },
    { date: "2021-01-06", name: "Event 6" },
    { date: "2021-01-07", name: "Event 7" },
    { date: "2021-01-08", name: "Event 8" },
    { date: "2021-01-09", name: "Event 9" },
    { date: "2021-01-10", name: "Event 10" },
  ]
  const timeline = new Timeline({ events })
  document.getElementById("timeline").innerHTML = timeline.render()
</script>
```

### Advanced usage

```html
<div id="timeline"></div>

<script>
  const timeline = new Timeline({
    events: [
      { date: "2021-01-01", name: "Event 1" },
      { date: "2021-01-02", name: "Event 2" },
      { date: "2021-01-03", name: "Event 3" },
      { date: "2021-01-04", name: "Event 4" },
      { date: "2021-01-05", name: "Event 5" },
      { date: "2021-01-06", name: "Event 6" },
      { date: "2021-01-07", name: "Event 7" },
      { date: "2021-01-08", name: "Event 8" },
      { date: "2021-01-09", name: "Event 9" },
      { date: "2021-01-10", name: "Event 10" },
    ],
    unit: "day",
    language: "es-ES",
    customStyles: {
      timeline: {
        backgroundColor: "black",
        color: "white",
      },
      label: {
        backgroundColor: "black",
        color: "white",
      },
    },
  })
  document.getElementById("timeline").innerHTML = timeline.render()
</script>
```

## API

### Methods

#### `render()`

Returns the timeline as an HTML string.

```javascript
const timeline = new Timeline({ events })
document.getElementById("timeline").innerHTML = timeline.render()
```

#### `renderSVG()`

Returns the timeline as an SVG string.

```javascript
const timeline = new Timeline({ events })
document.getElementById("timeline").innerHTML = timeline.renderSVG()
```

#### `addEvent(event)`

Adds an event to the timeline.

```javascript
const timeline = new Timeline({ events })
timeline.addEvent({ date: "2021-01-11", name: "Event 11" })
```

#### `removeEvent(index)`

Removes an event from the timeline.

```javascript
const timeline = new Timeline({ events })
timeline.removeEvent(11)
```

#### `setUnit(unit)`

Changes the unit of the timeline.

```javascript
const timeline = new Timeline({ events })
timeline.setUnit("hour")
```

#### `setLanguage(language)`

Changes the language of the timeline.

```javascript
const timeline = new Timeline({ events })
timeline.setLanguage("es-ES")
```

#### `setCustomStyles(customStyles)`

Changes the custom styles of the timeline.

```javascript
const timeline = new Timeline({ events })
timeline.setCustomStyles({
  timeline: {
    backgroundColor: "black",
    color: "white",
  },
  label: {
    backgroundColor: "black",
    color: "white",
  },
})
```

#### `setLabelContent(content)`

Changes the content of the label.

```javascript
const timeline = new Timeline({ events })
timeline.setLabelContent("date")
```

#### `setLabelFormat(format)`

Changes the format of the date in the label.

```javascript
const timeline = new Timeline({ events })
timeline.setLabelFormat("yyyy-MM-dd")
```

## `Constructor`

An instance of this should receive the following parameters:

<table>
    <tr>
        <th>Name</th>
        <th>Explanation</th>
        <th>Accepted values</th>
        <th>Mandatory?</th>
    </tr>
    <tr>
        <td>Events</td>
        <td>Date points and date ranges to be represented and the data associated to each.</td>
        <td>
            An array of objects with these entries:
            <ul>
                <li><code>date</code>: a date (parseable to Date and mandatory)</li>
                <li><code>name</code>: text to be shown in the label (string and optional).</li>
                <li><code>endDate</code>: the end date, if the current event is a range of dates rather than a point in the time (parseable to Date and optional).</li>
            </ul>
        </td>
        <td>Yes.</td>
    </tr>
    <tr>
        <td>Unit</td>
        <td>The time unit in which the timeline will be divided.</td>
        <td>
            The string <code>auto</code> or one of the following:
            <ul>
                <li><code>year</code></li>
                <li><code>month</code></li>
                <li><code>day</code></li>
                <li><code>hour</code></li>
                <li><code>minute</code></li>
                <li><code>second</code></li>
                <li><code>millisecond</code></li>
            </ul>
        </td>
        <td>No.<br>Defaults to <code>auto</code>, that will let the library automatically decide the most appropiate unit for the given dates.</td>
    </tr>
    <tr>
        <td>Language</td>
        <td>The language in which locales (such as the names of the months) will appear.</td>
        <td>A string with a BCP 47 language tag.</td>
        <td>No.<br>Defaults to <code>en-US</code>.</td>
    </tr>
    <tr>
        <td>Custom styles</td>
        <td>...</td>
        <td>...</td>
        <td>No.</td>
    </tr>
</table>
