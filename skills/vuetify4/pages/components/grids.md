---
title: "Grid system"
nav_title: "Grids"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/grids"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Grid system

Source: https://vuetifyjs.com/en/components/grids

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Grid system component.

## Overview

Vuetify supports the 12 point Material Design grid for laying out and controlling breakpoints for your application.

## Key Headings

- Usage
- API
- Sub-components
- v-container
- v-col
- v-row
- v-spacer
- Helper Classes
- Caveats
- Examples
- Props
- Size
- Align
- Breakpoint sizing
- Justify
- No gutters
- Offset
- Offset breakpoint

## Extracted Guidance

Vuetify comes with a 12 point grid system built using flexbox.

The grid is used to create specific layouts within an application's content. It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations: **xs**, **sm**, **md**, **lg** and **xl**. These breakpoints are defined below in the Viewport Breakpoints table and can be modified by customizing the [Breakpoint service](/features/display-and-platform).

The Vuetify grid is heavily inspired by the [Bootstrap grid](https://getbootstrap.com/docs/4.0/layout/grid/). It is implemented by using a series of containers, rows, and columns to layout and align content. If you are new to flexbox, read the [CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and code snippets.

| Component | Description | | - | - | | [v-container](/api/v-container/) | The container component. | | [v-row](/api/v-row/) | Sub-component used to create rows. | | [v-col](/api/v-col/) | Sub-component used to create columns. | | [v-spacer](/api/v-spacer/) | A component often used in grid scenarios. |

`v-container` provides the ability to center and horizontally pad your site's contents. You can also use the **fluid** prop to fully extend the container across all viewport and device sizes. Maintains previous 1.x functionality in which props are passed through as classes on `v-container` allowing for the application of helper classes (such as `ma-#`/`pa-#`/`fill-height`) to easily be applied.

`v-col` is a content holder that must be a direct child of `v-row`. This is the 2.x replacement for `v-flex` in 1.x.

`v-row` is a wrapper component for `v-col`. It utilizes flex properties to control the layout and flow of its inner columns. It uses a standard gutter of **24px**. This can be modified using the **density** prop - use **comfortable** for reduced gutters or **compact** to remove them completely. This is the 2.x replacement for `v-layout` in 1.x.

`v-spacer` is a basic yet versatile spacing component used to distribute remaining width in-between a parents child components. When placing a single `v-spacer` before or after the child components, the components will push to the right and left of its container. When more than one `v-spacer`'s are used between multiple components, the remaining width is evenly distributed between each spacer.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
