---
title: "Radio buttons"
nav_title: "Radio buttons"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/radio-buttons"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Radio buttons

Source: https://vuetifyjs.com/en/components/radio-buttons

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Radio buttons component.

## Overview

A radio button allows the user to choose only one of a set of options using a radio group.

## Key Headings

- Usage
- API
- Examples
- Props
- Model (group)
- Model (radio)
- Colors
- Direction
- Slots
- Label

## Extracted Guidance

The `v-radio` component is a simple radio button. When combined with the `v-radio-group` component you can provide grouping functionality to allow users to select from a predefined set of options.

Although `v-radio` can be used on its own, it is best used in conjunction with `v-radio-group`.

| Component | Description | | - | - | | [v-radio-group](/api/v-radio-group/) | Primary Component | | [v-radio](/api/v-radio/) | Sub-component used for modifying the `v-radio-group` state |

Using the **v-model** (or **model-value**) you can access and control the selected radio button defined by the set **value** on the child `v-radio` components.

The **v-model** (or **model-value**) you can access and control the value of a single radio button. The `true`/`false` values can be independently defined using the **true-value** and **false-value** props.

Radios can be colored by using any of the builtin colors and contextual names using the **color** prop.

Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column.

Radio Group labels can be defined in `label` slot - that will allow to use HTML content.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
