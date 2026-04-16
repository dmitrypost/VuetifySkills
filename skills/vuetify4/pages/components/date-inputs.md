---
title: "Date inputs"
nav_title: "Date inputs"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/date-inputs"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Date inputs

Source: https://vuetifyjs.com/en/components/date-inputs

## Agent Use

Use this page when you need Vuetify 4 guidance about Date inputs.

## Overview

The date input is a specialized input that provides a clean interface for selecting dates, showing detailed selection information.

## Key Headings

- Installation
- Usage
- API
- Guide
- Props
- Model
- Multiple
- Range
- Calendar icon
- Input format
- Examples
- Passenger

## Extracted Guidance

The `v-date-input` component combines a text field with a date picker. It is meant to be a direct replacement for a standard date input.

Labs components require manual import and registration with the Vuetify instance.

At its core, the `v-date-input` component is a basic container that extends [v-text-field](/components/text-fields).

| Component | Description | | - | - | | [v-date-input](/api/v-date-input/) | Primary component | | [v-date-picker](/api/v-date-picker/) | Date picker component | | [v-text-field](/api/v-text-field/) | Text field component |

The `v-date-input` component is a replacement for the standard date input. It provides a clean interface for selecting dates and shows detailed selection information.

Use the built in parseISO and toISO methods available as part of the [date composable](/features/dates/) to format and parse the date input. Internally, `v-date-input` transforms the model into a plain JS Date object.

The `v-date-input` component extends the [v-text-field](/components/text-fields/) and [v-date-picker](/components/date-pickers/) component; and supports all of their props.

The default model value is a Date object, but is displayed as formatted text in the input..

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { VDateInput } from 'vuetify/labs/VDateInput'

export default createVuetify({
  components: {
    VDateInput,
  },
})
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Avatar groups](avatar-groups.md)
- [Color inputs](color-inputs.md)
- [Command Palettes](command-palettes.md)
- [File upload](file-upload.md)
- [Icon buttons](icon-buttons.md)
