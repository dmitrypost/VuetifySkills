---
title: "Range Sliders"
nav_title: "Range sliders"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/range-sliders"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Range Sliders

Source: https://vuetifyjs.com/en/components/range-sliders

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Range Sliders component.

## Overview

The range slider component is a better visualization of the number input. It is used for gathering a range of numerical user data.

## Key Headings

- Usage
- API
- Examples
- Props
- Strict
- Disabled
- Min and max
- Step
- Vertical sliders
- Slots
- Thumb label

## Extracted Guidance

The `v-range-slider` component complements the `v-slider` component nicely when you are in need of representing a range of values.

Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.

| Component | Description | | - | - | | [v-range-slider](/api/v-range-slider/) | Primary Component |

With the **strict** prop applied, the thumbs of the range slider are not allowed to cross over each other.

You cannot interact with **disabled** sliders.

You can set **min** and **max** values of sliders.

`v-range-slider` can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.

You can use the **vertical** prop to switch sliders to a vertical orientation. If you need to change the height of a vertical slider, be aware that `v-range-slider` is not a simple HTML element. This means plain CSS on the component will not affect the correct internal element. Instead, you must use a **deep selector**.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
