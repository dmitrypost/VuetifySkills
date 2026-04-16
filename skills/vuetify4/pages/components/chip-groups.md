---
title: "Chip groups"
nav_title: "Chip groups"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/chip-groups"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Chip groups

Source: https://vuetifyjs.com/en/components/chip-groups

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Chip groups component.

## Overview

The chip group component combines numerous selectable chips into single or multiple lines.

## Key Headings

- Usage
- API
- Examples
- Props
- Column
- Filter results
- Mandatory
- Multiple
- Misc
- Product card
- Toothbrush card
- Reddit style categories

## Extracted Guidance

The `v-chip-group` supercharges the `v-chip` component by providing groupable functionality. It is used for creating groups of selections using chips.

Chip groups make it easy for users to select filtering options for more complex implementations. By default `v-chip-group` will overflow to the right but can be changed to a **column** only mode.

| Component | Description | | - | - | | [v-chip-group](/api/v-chip-group/) | Primary component |

Chip groups with **column** prop can wrap their chips.

Easily create chip groups that provide additional feedback with the **filter** prop. This creates an alternative visual style that communicates to the user that the chip is selected.

Chip groups with **mandatory** prop must always have a value selected.

Chip groups with **multiple** prop can have many values selected.

The `v-chip` component can have an explicit value used for its model. This gets passed to the `v-chip-group` component and is useful for when you don't want to use the chips index as their values.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
