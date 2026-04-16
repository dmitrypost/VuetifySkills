---
title: "Dates"
nav_title: "Dates"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/dates"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Dates

Source: https://vuetifyjs.com/en/features/dates

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Dates, especially setup and global configuration decisions.

## Overview

Vuetify has first party date support that can easily be swapped for another date library

## Key Headings

- Usage
- Format options
- Custom formats
- API
- Adapter
- Using DateFns
- Using DayJs
- Using Luxon
- Using Moment
- Typescript
- Localization
- Create your own
- Inheritance
- String adapter

## Extracted Guidance

Easily hook up date libraries that are used for components such as Date Picker and Calendar that require date functionality.

The date composable provides a shared architecture that is used by components such as date picker and calendar. The default implementation is built using the native Date object, but can be swapped out for another date library. If no other date adapter is given, the default Vuetify one is used.

Within your application, import the **useDate** function and use it to access the date composable.

For a list of all supported date adapters, visit the [date-io](https://github.com/dmtrKovalenko/date-io#projects) project repository.

The date composable supports the following date formatting options:

| Format Name | Format Output | | - | - | | fullDate | "Jan 1, 2024" | | fullDateWithWeekday | "Tuesday, January 1, 2024" | | normalDate | "1 January" | | normalDateWithWeekday | "Wed, Jan 1" | | shortDate | "Jan 1" | | year | "2024" | | month | "January" | | monthShort | "Jan" | | monthAndYear | "January 2024" | | monthAndDate | "January 1" | | weekday | "Wednesday" | | weekdayShort | "Wed" | | dayOfMonth | "1" | | hours12h | "11" | | hours24h | "23" | | minutes | "44" | | seconds | "00" | | fullTime | "11:44 PM" for US, "23:44" for Europe | | fullTime12h | "11:44 PM" | | fullTime24h | "23:44" | | fullDateTime | "Jan 1, 2024 11:44 PM" | | fullDateTime12h | "Jan 1, 2024 11:44 PM" | | fullDateTime24h | "Jan 1, 2024 23:44" | | keyboardDate | "02/13/2024" | | keyboardDateTime | "02/13/2024 23:44" | | keyboardDateTime12h | "02/13/2024 11:44 PM" | | keyboardDateTime24h | "02/13/2024 23:44" |

The following example shows how to use the date composable to format a date string:

You can extend available formats by providing definitions matching your adapter capabilities.

## Code Patterns

```html { resource="src/views/Date.vue" }
<script setup>
  import { useDate } from 'vuetify'

  const date = useDate()

  console.log(date.getMonth(new Date('March 1, 2021'))) // 2
</script>
```

```html { resource="src/views/Date.vue" }
<script setup>
  import { useDate } from 'vuetify'

  const date = useDate()

  const formatted = date.format('2010-04-13', 'fullDateWithWeekday')

  console.log(formatted) // Tuesday, April 13, 2010
</script>
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'

export default createVuetify({
  date: {
    formats: {
      // for built-in adapter
      weekdayNarrow: { weekday: 'narrow' },
      // for Moment or Day.js
      weekdayNarrow: 'dd',
      // for Luxon or DateFns
      weekdayNarrow: 'EEEEE',
    },
  },
})
```

```js
// use registered key
date.format(adapter.date(), 'weekdayNarrow')
```

```js
// works only with built-in adapter
date.format(adapter.date(), { weekday: 'narrow' })
```

```bash [pnpm]
pnpm install @date-io/date-fns date-fns
```

```bash [yarn]
yarn add @date-io/date-fns date-fns
```

```bash [npm]
npm install @date-io/date-fns date-fns
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
