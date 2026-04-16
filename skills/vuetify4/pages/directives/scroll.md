---
title: "Scroll directive"
nav_title: "Scroll"
section: "Directives"
source_url: "https://vuetifyjs.com/en/directives/scroll"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Scroll directive

Source: https://vuetifyjs.com/en/directives/scroll

## Agent Use

Use this page when applying the Vuetify 4 Scroll directive directive and its runtime behavior.

## Overview

The scroll directive gives you the ability to conditionally invoke methods when the screen or an element are scrolled.

## Key Headings

- API
- Examples
- Options
- Self
- Target

## Extracted Guidance

The `v-scroll` directive allows you to provide callbacks when the window, specified target or element itself (with `.self` modifier) is scrolled.

<!-- ## Usage

The default behavior is to bind to the window. If no additional configuration options are needed, you can simply pass your callback function.

| Directive | Description | |--------------------------------------|----------------------| | [v-scroll](/api/v-scroll-directive/) | The scroll directive |

`v-scroll` targets the `window` by default but can also watch the element it's being bound to. In the following example we use the **self** modifier, `v-scroll.self`, to watch the [`v-card`](/components/cards) element specifically. This causes the method `onScroll` to invoke as you scroll the card contents; incrementing the counter.

For a more fine tuned approach, you can designate the target to bind the scroll event listener.

## Related Pages

- [Click outside](click-outside.md)
- [Intersection observer](intersect.md)
- [Mutation observer](mutate.md)
- [Resize](resize.md)
- [Ripple](ripple.md)
- [Tooltip](tooltip.md)
