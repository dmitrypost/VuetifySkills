---
title: "Progress linear"
nav_title: "Progress linear"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/progress-linear"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Progress linear

Source: https://vuetifyjs.com/en/components/progress-linear

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Progress linear component.

## Overview

The progress-linear component is useful for displaying a visual indicator of numerical data in a straight line.

## Key Headings

- Usage
- API
- Examples
- Props
- Buffering
- Chunks
- Colors
- Indeterminate
- Reversed
- Rounded
- Stream
- Striped
- Slots
- Default
- Misc
- Determinate
- File loader
- Toolbar loader

## Extracted Guidance

The `v-progress-linear` component is used to convey data visually to users. It supports both indeterminate amounts, such as loading or processing, and finite amounts of progress (including separate buffer values).

In its simplest form, `v-progress-linear` displays a horizontal progress bar. Use the **value** prop to control the progress.

| Component | Description | | - | - | | [v-progress-linear](/api/v-progress-linear/) | Primary Component |

The primary value is controlled by **v-model**, whereas the buffer is controlled by the **buffer-value** prop.

The component can be split into chunks using `chunk-count` or `chunk-width`. Visible progress is snapped to the last filled chunk.

You can set the colors of the progress bar using the props **color** and **bg-color**.

Using the **indeterminate** prop, `v-progress-linear` continuously animates.

Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with **reverse** prop enabled will display left-to-right.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
