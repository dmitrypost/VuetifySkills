---
title: "Carousels"
nav_title: "Carousels"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/carousels"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Carousels

Source: https://vuetifyjs.com/en/components/carousels

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Carousels component.

## Overview

The carousel component is used to cycle through visual content such as images or slides of text.

## Key Headings

- Usage
- API
- Examples
- Props
- Custom delimiters
- Custom transition
- Cycle
- Hide controls
- Customized arrows
- Hide delimiters
- Progress
- Model
- Misc
- Vertical with overlay content

## Extracted Guidance

The `v-carousel` component is used to display large numbers of visual content on a rotating timer.

The `v-carousel` component expands upon `v-window` by providing additional features targeted at displaying images.

| Component | Description | | - | - | | [v-carousel](/api/v-carousel/) | Primary component | | [v-carousel-item](/api/v-carousel-item/) | Sub-component used for displaying the `v-carousel` state |

Use any available icon as your carousel's slide delimiter.

The `v-carousel-item` component can have its **transition/reverse-transition** changed.

With the **cycle** prop you can have your slides automatically transition to the next available every 6s (default).

You can hide the carousel navigation controls with `:show-arrows="false"`. Or you can make them only appear on hover with `show-arrows="hover"`.

Arrows can be customized by using **prev** and **next** slots.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
