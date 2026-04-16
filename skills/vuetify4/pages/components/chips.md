---
title: "Chips"
nav_title: "Chips"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/chips"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Chips

Source: https://vuetifyjs.com/en/components/chips

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Chips component.

## Overview

The chip component allows a user to enter information, make selections, filter content or trigger actions.

## Key Headings

- Usage
- API
- Guide
- Props
- Closable
- Color and variants
- Size and density
- Draggable
- Label
- No ripple
- Outlined
- Slots
- Icon
- Examples
- Action chips
- Custom list
- Expandable
- Filtering

## Extracted Guidance

The `v-chip` component is used to convey small pieces of information. Using the `close` property, the chip becomes interactive, allowing user interaction. This component is used by the [v-chip-group](/components/chip-groups) for advanced selection options.

Chips come in the following variations: closeable, filter, outlined, pill. The default slot of `v-chip` will also accept avatars and icons alongside text.

| Component | Description | | - | - | | [v-chip](/api/v-chip/) | Primary component |

The `v-chip` component is used to convey small pieces of information. Using the `close` property, the chip becomes interactive, allowing user interaction. This component is used by the [v-chip-group](/components/chip-groups) for advanced selection options.

Similar to other components such as [v-btn](/components/buttons/) and [v-list](/components/lists/), the `v-chip` component has a large selection of props for customizing the appearance.

Closable chips can be controlled with a v-model. You can also listen to the `click:close` event if you want to know when a chip has been closed.

Any color from the Material Design palette can be used to change a chips color.

The **variant** prop gives you easy access to several different button styles. Available variants are: **elevated**, **flat**, **tonal** (default), **outlined**, **text**, and **plain**.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
