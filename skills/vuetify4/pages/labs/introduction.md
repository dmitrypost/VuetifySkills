---
title: "Vuetify Labs"
nav_title: "Introduction"
section: "Labs"
source_url: "https://vuetifyjs.com/en/labs/introduction"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Vuetify Labs

Source: https://vuetifyjs.com/en/labs/introduction

## Agent Use

Use this page when you need Vuetify 4 guidance about Vuetify Labs.

## Overview

A collection of in-development components for testing purposes before final release

## Key Headings

- What is Labs? { id=what-is-labs }
- Usage
- Available Components

## Extracted Guidance

Experiment and use in-development components before they're released.

Labs is a new way for developers to use unfinished components in an alpha state.

Using a Labs component is as simple as importing from `vuetify/labs`. The following example shows how to import and bootstrap `v-picker` in your component:

Alternatively you can make the component available globally by importing it in your Vuetify plugin file:

When Vuetify instantiates it will register `VPicker` as a usable component within templates.

If you wish to install all available Vuetify components use the following code snippet:

The following is a list of available and up-and-coming components for use with Labs:

| Component | Description | Min Version | |------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------| | [v-color-input](/components/color-inputs/) | A color input component | [vTBD](/getting-started/release-notes/?version=vTBD) | | [v-date-input](/components/date-inputs/) | A date input component | [v3.6.0](/getting-started/release-notes/?version=v3.6.0) | | [v-pull-to-refresh](/components/pull-to-refresh/) | A component to update content by screen swipes | [v3.6.0](/getting-started/release-notes/?version=v3.6.0) | | [v-stepper-vertical](/components/vertical-steppers/) | Vertical version of v-stepper | [v3.6.5](/getting-started/release-notes/?version=v3.6.5) | | [v-video](/components/videos/) | A customizable wrapper for native video element | [v3.9.3](/getting-started/release-notes/?version=v3.9.3) | | [v-pie](/components/pie-charts/) | A component to display data as interactive pie/donut chart | [v3.9.3](/getting-started/release-notes/?version=v3.9.3) | | [v-avatar-group](/components/avatar-groups/) | A component to group and display multiple avatars | [v3.12.0](/getting-started/release-notes/?version=v3.12.0) | | [v-command-palette](/components/command-palettes/) | A searchable command palette component | [v3.12.0](/getting-started/release-notes/?version=v3.12.0) |

## Code Patterns

```html
<template>
  <v-picker />
</template>

<script setup>
  import { VPicker } from 'vuetify/labs/VPicker'
</script>
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'
import { VPicker } from 'vuetify/labs/VPicker'

export default createVuetify({
  components: {
    VPicker,
  },
})
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

export default createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
})
```

## Related Pages

- [Avatar groups](../components/avatar-groups.md)
- [Color inputs](../components/color-inputs.md)
- [Command Palettes](../components/command-palettes.md)
- [Date inputs](../components/date-inputs.md)
- [File upload](../components/file-upload.md)
- [Icon buttons](../components/icon-buttons.md)
