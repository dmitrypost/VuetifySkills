---
title: "Items"
nav_title: "Items"
section: "Common concepts"
source_url: "https://vuetifyjs.com/en/concepts/items"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Items

Source: https://vuetifyjs.com/en/concepts/items

## Agent Use

Use this page when you need Vuetify 4 guidance about Items.

## Overview

Items

## Key Headings

- Guide
- Accessor props
- String
- Array
- Function

## Extracted Guidance

Items are the data that is displayed in a component. They can be passed as an array of objects or strings.

Item props allow you to map the properties of each item to the component's props. This allows you to customize the display of each item without having to manually extract the data.

Accessor props are they keys to look for in each item object. They can be set to a string, array, or function.

Specify the property to use for the title when you have an array of user objects:

This makes it easy to display nested properties without manually extracting them.

Lookup on each item object. Like dot notation (each member is a key in the current object), but can be used if the key contains a dot.

A function that returns the value to use for the title. This is useful if you need to format the value or access a property that is not a direct child of the item.

## Code Patterns

```html
<v-component
  item-title="name"
  item-title="user.name"
/>
```

```html
<v-component
  :item-title="['name']"
  :item-title="['user', 'name']"
/>
```

```html
<v-component
  :item-title="item => item.name"
  :item-title="item => item.user.name"
/>
```

## Related Pages

- [Density and sizing](density-and-sizing.md)
- [Routing](routing.md)
- [v-model](v-model.md)
- [Variants](variants.md)
