---
title: "Color inputs"
nav_title: "Color inputs"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/color-inputs"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Color inputs

Source: https://vuetifyjs.com/en/components/color-inputs

## Agent Use

Use this page when you need Vuetify 4 guidance about Color inputs.

## Overview

The color input is a specialized input that provides a clean interface for selecting colors.

## Key Headings

- Installation
- Usage
- API
- Guide
- Props
- Pip location
- Color Pip
- Pip variant

## Extracted Guidance

The `v-color-input` component combines a text field with a color picker..

Labs components require a manual import and installation of the component.

At its core, the `v-color-input` component is a basic container that extends [v-text-field](/components/text-fields).

| Component | Description | | - | - | | [v-color-input](/api/v-color-input/) | Primary component | | [v-color-picker](/api/v-color-picker/) | Color picker component | | [v-text-field](/api/v-text-field/) | Text field component |

The `v-color-input` component provides a clean interface for selecting colors.

The `v-color-input` component extends the [v-text-field](/components/text-fields/) and [v-color-picker](/components/color-pickers/) component; and supports all of their props.

You can move the pip icon within the input by utilizing the `pip-location` or hide it entirely with `hide-pip`.

The `color-pip` is a boolean that determines whether the pip icon color matches the selected color.

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { VColorInput } from 'vuetify/labs/VColorInput'

export default createVuetify({
  components: {
    VColorInput,
  },
})
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Avatar groups](avatar-groups.md)
- [Command Palettes](command-palettes.md)
- [Date inputs](date-inputs.md)
- [File upload](file-upload.md)
- [Icon buttons](icon-buttons.md)
