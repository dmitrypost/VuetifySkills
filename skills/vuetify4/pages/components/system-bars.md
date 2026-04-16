---
title: "System bars"
nav_title: "System bars"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/system-bars"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# System bars

Source: https://vuetifyjs.com/en/components/system-bars

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 System bars component.

## Overview

The system bar component creates an android style status bar that rests on the very top of your application.

## Key Headings

- Usage
- API
- Anatomy
- Examples
- Props
- Color
- Window

## Extracted Guidance

The `v-system-bar` component can be used for displaying statuses to the user. It looks like the Android system bar and can contain icons, spacers, and some text.

`v-system-bar` in its simplest form displays a small container with default theme.

| Component | Description | | - | - | | [v-system-bar](/api/v-system-bar/) | Primary Component |

The recommended placement of elements inside of `v-system-bar` is:

![System Bar Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-system-bar/v-system-bar-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | The System Bar container has a default slot with content justified right | | 2. Icon items (optional) | Used to convey information through the use of icons | | 3. Text (optional) | Textual content that is typically used to show time |

You can optionally change the color of the `v-system-bar` by using the `color` prop.

A window bar with window controls and status info.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
