⚠️ This README is under construction ⚠️

This aims to be a little library to create simple but accurate (to a millisecond level) timelines, given a set of events.

## To do

- [ ] Make this work with pointers.
- [ ] Make this work with ranges.
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

## Constructor

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
        <td>Punctual dates to be represented and the data associated to each.</td>
        <td>
            An object with two entries:
            <ul>
                <li><code>date</code>: a date (parseable to Date and mandatory)</li>
                <li><code>name</code>: text to be shown in the label (string and optional).</li>
                <li><code>endDate</code>: the end date, if the current event is a range of dates rather than a point in the time (parseable to Date and optional).</li>
            </ul>
        </td>
        <td>Yes</td>
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
