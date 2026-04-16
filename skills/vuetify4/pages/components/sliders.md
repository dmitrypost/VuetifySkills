---
title: "Sliders"
nav_title: "Sliders"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/sliders"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Sliders

Source: https://vuetifyjs.com/en/components/sliders

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Sliders component.

## Overview

The slider component can be used as an alternative visualization instead of a number input.

## Key Headings

- Usage
- API
- Examples
- Props
- Colors
- Disabled
- Step
- Icons
- Min and max
- Readonly
- Thumb
- Ticks
- Vertical sliders
- Slots
- Append and prepend
- Append text field

## Extracted Guidance

The `v-slider` component can be used as an alternative visualization instead of a number input.

Sliders reflect a range of values along a track, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.

| Component | Description | | - | - | | [v-slider](/api/v-slider/) | Primary Component |

You can set the colors of the slider using the props **color**, **track-color** and **thumb-color**.

You cannot interact with **disabled** sliders.

Using the **step** prop you can control the precision of the slider, and how much it should move each step.

You can add icons to the slider with the **append-icon** and **prepend-icon** props. With `@click:append` and `@click:prepend` you can trigger a callback function when click the icon.

You can set **min** and **max** values of sliders.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
