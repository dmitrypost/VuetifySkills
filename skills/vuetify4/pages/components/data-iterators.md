---
title: "Data iterators"
nav_title: "Data iterators"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/data-iterators"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Data iterators

Source: https://vuetifyjs.com/en/components/data-iterators

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Data iterators component.

## Overview

The data iterator component is used for filter and displaying data including sorting, searching, pagination, and selection.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Examples
- Slots
- Default
- Header and footer
- Controllable props
- Loader props

## Extracted Guidance

The `v-data-iterator` component is used for displaying arbitrary data, and shares a majority of its functionality with the `v-data-table` component. Features include sorting, searching, pagination, and selection.

The `v-data-iterator` allows you to customize exactly how to display your data. In this example we are using a grid with cards.

| Component | Description | |------------------------------------------|-------------------| | [v-data-iterator](/api/v-data-iterator/) | Primary Component |

The recommended placement of elements inside of a `v-data-iterator` are:

![Data iterator Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-data-iterator/v-data-iterator-anatomy.png){ height=392 }

| Element / Area | Description | | - | - | | 1. Header (optional) | The header is used to display a title and actions | | 2. Container | The container is the root element of the component | | 3. Footer (optional) | The footer is used to display pagination |

The `v-data-iterator` component is used for displaying data, and shares a majority of its functionality with the `v-data-table` component. Features include sorting, searching, pagination, and selection.

The following code snippet is an example of a basic `v-data-iterator` component:

## Code Patterns

```html
<v-data-iterator :items="[1, 2, 3, 4, 5]">
  <template v-slot:default="{ items }">
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :title="`Item ${i}`"
    ></v-list-item>
  </template>
</v-data-iterator>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
