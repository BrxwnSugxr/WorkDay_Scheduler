# 05 Third-Party APIs: Work Day Scheduler

A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

## Application Description

This is a simple calendar application (utilizing JQuery and Local Storage) that allows a user to save events for each hour of the day. HTML and CSS are dynamically updated according to the time--the background colors of the time blocks are adjusted based upon the classification of the time event (past, present, or future.) The user inputs calendar items into the text area, and clicking the save buttons sets the items into local storage. The added calendar items persist on the page after refresh.

## Demo

Visit [this](https://brxwnsugxr.github.io/WorkDay_Scheduler/) to see the webapp in action.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

## Pseudo Code for HTML

1. A main header.
2. Div element within container fluid
3. List of time blocks with 24hr to 12hr conversion
4. Text input fields
5. Save buttons
6. Font families
7. Bootstrap component
8. Jquery links

## Pseudo Code for CSS

1. HTML attributes and classes

## Pseudo Code for JavaScript

1. Tells engine to load HTML and CSS first.
2. Displays current time and date.
3. Get nearby values.
4. Takes change from sibling HTML description attribute.
5. Takes change from parent HTML ID attribute.
6. Sets items to local storage.
7. Loads saved data from local storage for each hour created. Should follow HTML 24h to 12 h conversion.
8. Gets current number of hours.
9. Use of Day.js
10. Loops over time blocks.
11. Checks if time is past, present, future. Clicks into HTML/CSS given classes of past, present, future.
12. Re-runs function.

Below are images of the user interface of the calendar as displayed to the user:

![A user clicks on slots on the color-coded calendar and edits the events.](./img/Work%20Day%20Scheduler.gif)
![A user clicks on slots on the color-coded calendar and edits the events.](./img/workday_scheduler_screenshot2.png)

URL to deployed application:

URL to GitHub repository:

For any questions, please contact me at jsdev.mas@gmail.com

## License

MIT License

Copyright (c) [2023] [Muhamad Sahid]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
