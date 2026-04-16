---
title: "Slide groups"
nav_title: "Slide groups"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/slide-groups"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Slide groups

Source: https://vuetifyjs.com/en/components/slide-groups

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Slide groups component.

## Overview

The slide group component is similar to item groups in that you can make selectable content out of elements but does so in a single line fashion.

## Key Headings

- Usage
- API
- Examples
- Props
- Selected class
- Center active
- Custom icons
- Mandatory
- Multiple
- Misc
- Pseudo Carousel

## Extracted Guidance

The `v-slide-group` component is used to display pseudo paginated information. It uses [v-item-group](/components/item-groups) at its core and provides a baseline for components such as [v-tabs](/components/tabs) and [v-chip-group](/components/chip-groups).

Similar to the [v-window](/components/windows) component, `v-slide-group` lets items to take up as much space as needed, allowing the user to move horizontally through the provided information.

| Component | Description | | - | - | | [v-slide-group](/api/v-slide-group/) | Primary Component | | [v-slide-group-item](/api/v-slide-group-item/) | Sub-component used for modifying the `v-slide-group` state |

**selected-class** prop allows you to pass a class to customize the active items.

Using the **center-active** prop will make the active item always centered.

You can add your custom pagination icons instead of arrows using the **next-icon** and **prev-icon** props.

the **mandatory** prop will make the slide group require at least 1 item must be selected.

You can select multiple items by setting the **multiple** prop.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
