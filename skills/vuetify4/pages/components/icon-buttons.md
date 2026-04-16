---
title: "Icon Buttons"
nav_title: "Icon buttons"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/icon-buttons"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Icon Buttons

Source: https://vuetifyjs.com/en/components/icon-buttons

## Agent Use

Use this page when you need Vuetify 4 guidance about Icon Buttons.

## Overview

The icon component is compatible with multiple common icon fonts such as Material Design Icons, Font Awesome and more.

## Key Headings

- Installation
- Usage
- API
- Anatomy
- Guide
- Using with vue-router
- Props
- Active
- Opacity
- Rotate
- Examples
- Dialog
- Video controls
- Markdown editor
- Datatable actions

## Extracted Guidance

The `v-icon-btn` component is a lightweight button component for iconography.

Labs components require manual import and registration with the Vuetify instance.

| Component | Description | | - | - | | [v-icon-btn](/api/v-icon-btn/) | Primary Component |

The recommended placement of elements inside of `v-icon-btn` is:

| Element / Area | Description | | - | - | | 1. Container | The container element that holds the icon and text |

The `v-icon-btn` component is a lightweight reusable button that displays icons and text in various states.

The `v-icon-btn` component does not have built in support for vue-router. The following example demonstrates how to use the `v-icon-btn` component with the `router-link` component:

The `v-icon-btn` supports various stylistic props to customize the appearance of the button and its icon.

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { VIconBtn } from 'vuetify/labs/VIconBtn'

export default createVuetify({
  components: {
    VIconBtn,
  },
})
```

```html
<template>
  <RouterLink v-slot="{ navigate, isActive }" to="/page1" custom>
    <v-icon-btn
      :active="isActive"
      color="primary"
      icon="$vuetify"
      tag="a"
      @click="navigate"
    />
  </RouterLink>
</template>
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Avatar groups](avatar-groups.md)
- [Color inputs](color-inputs.md)
- [Command Palettes](command-palettes.md)
- [Date inputs](date-inputs.md)
- [File upload](file-upload.md)
