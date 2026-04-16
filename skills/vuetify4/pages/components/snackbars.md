---
title: "Snackbars"
nav_title: "Snackbars"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/snackbars"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Snackbars

Source: https://vuetifyjs.com/en/components/snackbars

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Snackbars component.

## Overview

The snackbar component informs user of a process that your application has performed is will perform. It can be temporary and often contains actions. Timer will stop when user hovers over the snackbar.

## Key Headings

- Usage
- API
- Examples
- Props
- Timeout
- Variants
- Prepend icon
- Prepend avatar
- Loading
- Timer position
- Vertical
- Slots
- Header
- Prepend

## Extracted Guidance

The `v-snackbar` component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.

a `v-snackbar` in its simplest form displays a temporary and closable notification to the user.

| Component | Description | | - | - | | [v-snackbar](/api/v-snackbar/) | Primary Component | | [v-btn](/api/v-btn/) | Sub-component typically used for actions |

The **timeout** property lets you customize the delay before the `v-snackbar` is hidden.

Use the **variant** and **rounded** prop to apply distinct look and shape to the snackbar. Transparent variants such as `tonal` and `outlined` render with a surface background to remain legible against the page.

The **prepend-icon** prop adds an icon to the start of the snackbar.

The **prepend-avatar** prop adds an avatar image to the start of the snackbar.

The **loading** prop displays a circular progress indicator in the prepend area, useful for indicating an ongoing process.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
