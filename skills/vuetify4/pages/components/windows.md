---
title: "Windows"
nav_title: "Windows"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/windows"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Windows

Source: https://vuetifyjs.com/en/components/windows

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Windows component.

## Overview

The window component is a wrapper container that allows transitioning between content. It serves as the baseline for tabs and carousels.

## Key Headings

- Usage
- API
- Examples
- Props
- Show arrows
- Reverse
- Direction
- Customized arrows
- Misc
- Account creation
- Onboarding

## Extracted Guidance

The `v-window` component provides the baseline functionality for transitioning content from one pane to another. Other components such as `v-tabs`, `v-carousel` and `v-stepper` utilize this component at their core.

Designed to easily cycle through content, `v-window` provides a simple interface to create custom implementations.

| Component | Description | | - | - | | [v-window](/api/v-window/) | Primary Component | | [v-window-item](/api/v-window-item/) | Sub-component used to display a single window item |

By default no arrows are displayed. You can change this by adding the **show-arrows** prop. If you set the prop value to `"hover"`, they will only show when you mouse over the window.

The **reverse** prop will reverse the transitions

You can change the transition to vertical using the **direction** prop

Arrows can be customized by using **prev** and **next** slots.

Create rich forms with smooth animations. `v-window` automatically tracks the current selection index to change the transition direction.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
