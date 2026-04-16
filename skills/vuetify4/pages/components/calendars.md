---
title: "Calendars"
nav_title: "Calendars"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/calendars"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Calendars

Source: https://vuetifyjs.com/en/components/calendars

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Calendars component.

## Overview

The calendar component is a clean and simple adaptation to the popular Google Calendar application.

## Key Headings

- Usage
- API
- Examples
- Props
- Type category
- Type day
- Type week
- Events
- Click
- Slots
- Day
- Day body
- Misc
- Drag and drop

## Extracted Guidance

The `v-calendar` component is used to display information in a daily, weekly, monthly, or category view. The daily view has slots for all day or timed elements, and the weekly and monthly view has a slot for each day. The category view has a slot for each category in the day and timed sections based on the categories given or the categories in the given events. Optionally you can pass in an array of events and they will be rendered over the appropriate days and times.

A calendar has a type and a value which determines what type of calendar is shown over what span of time. This shows the bare minimum configuration, an array of events with **name**, **start** and **end** properties. **end** is optional, it defaults to the **start**. If the **start** has a time it's considered a timed event and will be shown accordingly in the day views. An event can span multiple days and will be rendered accordingly.

| Component | Description | |--------------------------------| - | | [v-calendar](/api/v-calendar/) | Primary Component |

This is an example of an event calendar with a **type** of `category` that allows you to compare two schedules side-by-side.

This is an example of calendar with content in each interval slot and a **type** of `day`.

This is an example of an event calendar with all-day and timed events with a **type** of `week`.

This is an example of a planner with additional event handlers and external components controlling the display of the calendar.

Slots allow you to define the content for each day, time interval for the daily views, and various labels.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
