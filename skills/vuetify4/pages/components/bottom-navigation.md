---
title: "Bottom navigation"
nav_title: "Bottom navigation"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/bottom-navigation"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Bottom navigation

Source: https://vuetifyjs.com/en/components/bottom-navigation

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Bottom navigation component.

## Overview

The bottom navigation component is used for mobile devices and acts as the primary navigation for your application.

## Key Headings

- Usage
- API
- Examples
- Props
- Color
- Grow
- Hide on scroll
- Horizontal
- Scroll threshold
- Shift
- Toggle

## Extracted Guidance

The `v-bottom-navigation` component is an alternative to the sidebar. It is primarily used for mobile applications and comes in three variants, **icons** and **text**, and **shift**.

While `v-bottom navigation` is meant to be used with [vue-router](https://router.vuejs.org/), you can also programmatically control the active state of the buttons by using the **value** property. A button is given a default value of its _index_ with `v-bottom-navigation`.

| Component | Description | | - | - | | [v-bottom-navigation](/api/v-bottom-navigation/) | Primary Component | | [v-btn](/api/v-btn/) | Sub-component used for modifying the `v-bottom-navigation` state |

For styles to apply properly when using the **shift** prop, `v-btn` text is **required** to be wrapped in a `span` tag.

The **color** prop applies a color to the background of the bottom navigation. We recommend using the **light** and **dark** props to properly contrast text color.

Using the **grow** property forces [v-btn](/components/buttons/) components to _fill_ all available space. Buttons have a maximum width of **168px** per the [Bottom Navigation MD specification](https://material.io/components/bottom-navigation#specs).

<!-- TODO: Fix this example when scrolling techniques is implemented #### Hide on scroll

The `v-bottom-navigation` component hides when *scrolling up* when using the **hide-on-scroll** property. This is similar to the [scrolling techniques](https://material.io/archive/guidelines/patterns/scrolling-techniques.html) that are supported in [v-app-bar](/components/app-bars/). In the following example, scroll *up and down* to see this behavior.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
