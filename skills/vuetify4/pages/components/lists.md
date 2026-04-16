---
title: "Lists"
nav_title: "Lists"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/lists"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Lists

Source: https://vuetifyjs.com/en/components/lists

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Lists component.

## Overview

The list component is a continuous group of text, images and icons that may contain primary or supplemental actions.

## Key Headings

- Usage
- API
- Examples
- Props
- Items
- Density
- Disabled
- Variant
- Nav
- Rounded
- Shaped
- Sub group
- Three line
- Two lines and subheader
- Misc
- Action and item groups
- Action with text
- Card list

## Extracted Guidance

The `v-list` component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists present content in a way that makes it easy to identify a specific item in a collection. They provide a consistent styling for organizing groups of text and images.

Lists come in three main variations. **single-line** (default), **two-line** and **three-line**. The line declaration specifies the minimum height of the item and can also be controlled from `v-list` with the same prop.

| Component | Description | | - | - | | [v-list](/api/v-list/) | Primary Component | | [v-list-group](/api/v-list-group/) | Sub-component used to display or hide groups of items | | [v-list-subheader](/api/v-list-subheader/) | Sub-component used to separate groups of items | | [v-list-item](/api/v-list-item/) | Sub-component used to display a single item or modify the `v-list` state | | [v-list-item-title](/api/v-list-item-title/) | Sub-component used to display the title of a list item. Wraps the `#title` slot | | [v-list-item-subtitle](/api/v-list-item-subtitle/) | Sub-component used to display the subtitle of a list item. Wraps the `#subtitle` slot | | [v-list-item-action](/api/v-list-item-action/) | Sub-component used to display [v-checkbox](/components/checkboxes/) or [v-switch](/components/switches/) | | [v-list-img](/api/v-list-img/) | Sub-component that is used to wrap a the [v-img](/components/images/) component | | [v-list-item-media](/api/v-list-item-media/) | Sub-component that is used to wrap a the [v-img](/components/images/) component |

Lists can either be created by markup using the many sub-components that are available, or by using the **items** prop.

To customize which properties will be used for the title and value of each item, use the **item-title** and **item-value** props.

If you need to render subheaders or dividers, add an item with a **type** property. Which property to use can be customized using the **item-type** prop.

To customize individual items, you can use the **item-props** prop. It defaults to looking for a **props** property on the items. The value should be an object, and if found it will be spread on the **v-list-item** component.

If **item-props** is set to **true** then the whole item will be spread.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
