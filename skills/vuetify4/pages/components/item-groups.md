---
title: "Item groups"
nav_title: "Item groups"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/item-groups"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Item groups

Source: https://vuetifyjs.com/en/components/item-groups

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Item groups component.

## Overview

The item group components provides the ability to create a group of selectable items out of any component.

## Key Headings

- Usage
- API
- Examples
- Props
- Selected class
- Mandatory
- Multiple
- Misc
- Selection

## Extracted Guidance

The `v-item-group` provides the ability to create a group of selectable items out of any component. This is the baseline functionality for components such as `v-tabs` and `v-carousel`.

The core usage of the `v-item-group` is to create groups of anything that should be controlled by a **model**.

| Component | Description | | - | - | | [v-item-group](/api/v-item-group/) | The item group component. | | [v-item](/api/v-item/) | Sub-component used for modifying the `v-item-group` state |

The **selected-class** prop allows you to designate a CSS class applied to _selected_ items.

**mandatory** item groups must have at least 1 item selected.

Item groups can have **multiple** items selected.

Icons can be used as toggle buttons when they allow selection, or deselection, of a single choice, such as marking an item as a favorite.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
