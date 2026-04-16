---
title: "Button toggles"
nav_title: "Button toggles"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/button-groups"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Button toggles

Source: https://vuetifyjs.com/en/components/button-groups

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Button toggles component.

## Overview

The button toggle component allows you to combine a series of selectable buttons together in a single element.

## Key Headings

- Usage
- API
- Examples
- Props
- Divided
- Variant
- Mandatory
- Multiple
- Rounded
- Misc
- WYSIWYG

## Extracted Guidance

The `v-btn-toggle` component is a simple wrapper for `v-item-group` built specifically to work with `v-btn`.

Toggle buttons allow you to create a styled group of buttons that can be selected or toggled under a single **v-model**.

| Component | Description | |------------------------------------| - | | [v-btn-toggle](/api/v-btn-toggle/) | Primary component | | [v-btn](/api/v-btn/) | Sub-component used for modifying the `v-btn-toggle` state | | [v-btn-group](/api/v-btn-group/) | A stateless version of `v-btn-toggle` |

You can add a visual divider between buttons with the **divided** prop.

You can switch the button variant by using **variant** prop on `v-btn-toggle`.

A `v-btn-toggle` with the **mandatory** prop will always have a value.

A `v-btn-toggle` with the **multiple** prop will allow a user to select multiple return values as an array.

You can control the border radius with the **rounded** prop.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
