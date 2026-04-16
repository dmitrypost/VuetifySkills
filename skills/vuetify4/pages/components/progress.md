---
title: "Progress"
nav_title: "Progress"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/progress"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Progress

Source: https://vuetifyjs.com/en/components/progress

## Agent Use

Use this page when you need Vuetify 4 guidance about Progress.

## Overview

A unified progress indicator component that supports both linear and circular variants with labels and accessible value formatting.

## Key Headings

- Installation
- Usage
- API
- Guide
- Props
- Label
- Value format
- Slots
- Label and value
- Misc
- Card loader

## Extracted Guidance

The `v-progress` component is a unified wrapper for linear and circular progress indicators with built-in label and accessible value formatting.

This feature requires [v4.0.3](/getting-started/release-notes/?version=v4.0.3)

Labs components require manual import and registration with the Vuetify instance.

| Component | Description | | - | - | | [v-progress](/api/v-progress/) | Primary Component |

The `v-progress` component combines `v-progress-linear` and `v-progress-circular` into a single component with a `type` prop, while adding label support and accessible value formatting.

The **label** prop displays text alongside the progress indicator. Use the **label-position** prop to control placement.

The **value-format** prop formats the `aria-valuetext` for screen readers. Use `[value]`, `[max]`, or `[percent]` as placeholders in strings, or pass a function for custom formatting.

Use the **#label** and **#value** slots to fully customize the content displayed alongside the progress indicator. Both slots receive `value`, `max`, `percent`, and `formattedValue` as scoped props.

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { VProgress } from 'vuetify/labs/VProgress'

export default createVuetify({
  components: {
    VProgress,
  },
})
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Avatar groups](avatar-groups.md)
- [Color inputs](color-inputs.md)
- [Command Palettes](command-palettes.md)
- [Date inputs](date-inputs.md)
- [File upload](file-upload.md)
