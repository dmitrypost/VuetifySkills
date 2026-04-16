---
title: "Date pickers"
nav_title: "Date pickers"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/date-pickers"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Date pickers

Source: https://vuetifyjs.com/en/components/date-pickers

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Date pickers component.

## Overview

The date picker component is a stand-alone interface that allows the selection of a date, month and year.

## Key Headings

- Usage
- API
- Guide
- Props
- Elevation
- Width
- Show sibling months
- Colors
- Allowed dates
- Landscape
- Date events
- Slots
- Controls
- Internationalization
- Parsing dates

## Extracted Guidance

`v-date-picker` is a fully featured date selection component that lets users select a date.

Date pickers come in two orientation variations, portrait **(default)** and landscape. By default they are emitting `input` event when the day (for date picker) or month (for month picker), but with **reactive** prop they can update the model even after clicking year/month.

| Component | Description | | - | - | | [v-date-picker](/api/v-date-picker/) | Primary Component |

The `v-date-picker` component is a stand-alone interface that allows the selection of a date, month and year. This component is built using the [Date composable](/features/dates/).

All date components support the [date-io](https://github.com/dmtrKovalenko/date-io) abstraction layer for date management. By default they will use a built-in adapter that uses the native Date object, but it is possible to use any of the date-io adapters. See the [dates](/features/dates/) page for more information.

The `v-date-picker` component supports multiple props for configuring dates that can be selected, date formats, translations and more.

The `v-date-picker` component supports elevation up to a maximum value of 5. For more information on elevations, visit the official [Material Design elevations](https://m3.material.io/styles/elevation) page.

You can specify the picker's width or make it full width.

## Code Patterns

```js
import DayJsAdapter from '@date-io/dayjs'

createVuetify({
  date: {
    adapter: DayJsAdapter,
  },
})
```

```js
import DateFnsAdapter from '@date-io/date-fns'
import enUS from 'date-fns/locale/en-US'
import svSE from 'date-fns/locale/sv'

createVuetify({
  date: {
    adapter: DateFnsAdapter,
    locale: {
      en: enUS,
      sv: svSE,
    },
  },
})
```

```js
import { useDate } from 'vuetify'

const adapter = useDate()
const date = '2023-11-30'

console.log(new Date(date)) // Wed Nov 29 2023 18:00:00 GMT-0600
console.log(adapter.parseISO(date)) // Thu Nov 30 2023 00:00:00 GMT-0600
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
