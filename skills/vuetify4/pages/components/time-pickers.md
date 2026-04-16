---
title: "Time pickers"
nav_title: "Time pickers"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/time-pickers"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Time pickers

Source: https://vuetifyjs.com/en/components/time-pickers

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Time pickers component.

## Overview

The time picker component is a stand-alone interface that allows the selection of hours and minutes in AM/PM and 24hr formats.

## Key Headings

- Usage
- API
- Examples
- Props
- Allowed times
- Colors
- Disabled
- Elevation
- Format
- No header
- Range
- Read-only
- Scrollable
- Use seconds
- Misc
- Dialog and menu

## Extracted Guidance

The `v-time-picker` is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting the time.

Time pickers have the light theme enabled by default.

| Component | Description | | - | - | | [v-time-picker](/api/v-time-picker/) | Primary Component |

You can specify allowed times using arrays, objects, and functions. You can also specify time step/precision/interval - e.g. 10 minutes.

Time picker colors can be set using the `color` prop.

You can't interact with disabled picker.

Emphasize the `v-time-picker` component by providing an **elevation** from 0 to 5. Elevation modifies the `box-shadow` css property.

A time picker can be switched to 24hr format. Note that the `format` prop defines only the way the picker is displayed, picker's value (model) is always in 24hr format.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
