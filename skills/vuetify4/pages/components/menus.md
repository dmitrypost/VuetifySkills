---
title: "Menus"
nav_title: "Menus"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/menus"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Menus

Source: https://vuetifyjs.com/en/components/menus

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Menus component.

## Overview

The menu component exposes a dropdown of potential selections or actions that the user can make.

## Key Headings

- Usage
- API
- Examples
- Props
- Absolute without activator
- Close on content click
- Location
- Open on hover
- Nested menus
- Positioning Menus with Coordinates
- Slots
- Activator and tooltip
- Misc
- Transitions
- Popover menu
- Gliding navigation
- Use In components

## Extracted Guidance

The `v-menu` component shows a menu at the position of the element used to activate it.

There are three main ways that menus can be defined in markup.

The first one is by using the **activator** slot. Don't forget to bind the slot **props** to the activating element.

The second one is by using the **activator** prop with value `parent`. This will turn the parent element of the menu into the activator.

The third one is to supply a CSS selector string to **activator** prop. This allows you to place the menu and its activator in separate parts of the markup.

| Component | Description | | - | - | | [v-menu](/api/v-menu/) | Primary Component | | [v-btn](/api/v-btn/) | Sub-component often used for the `v-menu` activator | | [v-list-item](/api/v-list-item/) | Sub-component often used for the `v-menu` content |

<!-- #### Absolute

Menus can also be placed absolutely on top of the activator element using the **absolute** prop. Try clicking anywhere on the image.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
