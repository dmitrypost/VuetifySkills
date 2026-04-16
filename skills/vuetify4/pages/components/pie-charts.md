---
title: "Pie Chart"
nav_title: "Pie charts"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/pie-charts"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Pie Chart

Source: https://vuetifyjs.com/en/components/pie-charts

## Agent Use

Use this page when you need Vuetify 4 guidance about Pie Chart.

## Overview

The pie/donut chart component is versatile and fully customizable.

## Key Headings

- Installation
- Usage
- API
- Guide
- Props
- Size
- Palette
- Legend position
- Item text overrides
- Examples
- Custom Legend
- Overlay patterns

## Extracted Guidance

The `v-pie` component is design to display either pie or a donut chart with integrated tooltips and legend.

Labs components require manual import and registration with the Vuetify instance.

| Component | Description | | - | - | | [v-pie](/api/v-pie/) | Primary Component | | [v-pie-segment](/api/v-pie-segment/) | Sub-component used to display a single segment | | [v-pie-tooltip](/api/v-pie-tooltip/) | Chart tooltip component based on `v-list-item` |

`v-pie` does not have any opinionated way to use. You may start by providing an array of items (data) and then customize, hide or replace elements to make it behave as you wish to fit your project.

There are some notable features that are not common in other Vuetify components:

The `v-pie` supports various stylistic props to customize the appearance and hover transitions.

Charts are more like drawings then regular HTML elements and their size needs to be controlled externally. `hover-scale` will reserve some space to enlarge segments on hover.

Colors can be conveniently passed to a dedicated `palette` prop.

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { VPie } from 'vuetify/labs/VPie'

export default createVuetify({
  components: {
    VPie,
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
