---
title: "Selects"
nav_title: "Selects"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/selects"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Selects

Source: https://vuetifyjs.com/en/components/selects

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Selects component.

## Overview

The select component provides a list of options that a user can make selections from.

## Key Headings

- Usage
- API
- Caveats
- Guide
- Props
- Density
- Multiple
- Chips
- Readonly
- Disabled
- Custom title and value
- Menu props
- List props
- Custom item props
- Slots
- Item
- Append and prepend item
- Selection

## Extracted Guidance

Select fields components are used for collecting user provided information from a list of options.

| Component | Description | | - | - | | [v-select](/api/v-select/) | Primary Component | | [v-autocomplete](/api/v-autocomplete/) | A select component that allows for advanced filtering | | [v-combobox](/api/v-combobox/) | A select component that allows for filtering and custom values |

When using objects for the **items** prop, you must associate **item-title** and **item-value** with existing properties on your objects. These values are defaulted to **title** and **value** and can be changed.

The `v-select` component is meant to be a direct replacement for a standard ` ` element. It is commonly used with [v-form](/components/forms/) and other inputs & controls.

All form inputs have a massive API that make it super easy to configure everything just the way you want it.

You can use **density** prop to adjust vertical spacing within the component.

The **multiple** prop allows for multiple selections.

Display selected items as chips with the **chips** prop.

## Code Patterns

```js
const items = [
  {
    title: 'John',
    props: { subtitle: 'Engineering' },
  },
]
```

```js
const items = [
  {
    title: 'John',
    subtitle: 'Engineering',
  },
]
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
