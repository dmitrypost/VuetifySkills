---
title: "Click outside"
nav_title: "Click outside"
section: "Directives"
source_url: "https://vuetifyjs.com/en/directives/click-outside"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Click outside

Source: https://vuetifyjs.com/en/directives/click-outside

## Agent Use

Use this page when applying the Vuetify 4 Click outside directive and its runtime behavior.

## Overview

The v-click-outside directive calls a function when something outside of the target element is clicked on.

## Key Headings

- Usage
- API
- Examples
- Options
- Close conditional
- Include

## Extracted Guidance

The `v-click-outside` directive calls a function when something outside of the target element is clicked on. This is used internally by components like `v-menu` and `v-dialog`.

The `v-click-outside` directive allows you to provide a handler to be invoked when the user clicks outside of the target element.

Optionally provide a `closeConditional` handler that returns `true` or `false`. This function determines whether the outside click function is invoked or not.

Optionally provide an `include` function in the `options` object that returns an array of `HTMLElement`s. This function determines which additional elements that the click must be outside of, for the handler to be called.

## Related Pages

- [Intersection observer](intersect.md)
- [Mutation observer](mutate.md)
- [Resize](resize.md)
- [Ripple](ripple.md)
- [Scroll](scroll.md)
- [Tooltip](tooltip.md)
