---
title: "Ripple directive"
nav_title: "Ripple"
section: "Directives"
source_url: "https://vuetifyjs.com/en/directives/ripple"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Ripple directive

Source: https://vuetifyjs.com/en/directives/ripple

## Agent Use

Use this page when applying the Vuetify 4 Ripple directive directive and its runtime behavior.

## Overview

The ripple directive adds touch and click feedback to any element in the form of a water ripple.

## Key Headings

- Usage
- API
- Examples
- Propagation
- Options
- Center
- Misc
- Custom color
- Ripple in components

## Extracted Guidance

The `v-ripple` directive is used to show action from a user. It can be applied to any block level element. Numerous components come with the ripple directive built in, such as the `v-btn`, `v-tabs-item` and many more.

Basic ripple functionality can be enabled just by using `v-ripple` directive on a component or an HTML element

| Directive | Description | |--------------------------------------|----------------------| | [v-ripple](/api/v-ripple-directive/) | The ripple directive |

If multiple elements have the ripple directive applied, only the inner one will show the effect. This can also be done without having a visible ripple by using `v-ripple.stop` to prevent ripples in the outer element if the inner element is clicked on. `v-ripple.stop` will not actually stop propagation of the mousedown/touchstart events unlike other workarounds.

When a `center` option is used ripple will always originate from the center of the target.

Using a helper class, you can change the color of the ripple.

Some components provide the `ripple` prop that allows you to control the ripple effect. You can turn it off or customize the behavior by using `class` or `center` options.

## Related Pages

- [Click outside](click-outside.md)
- [Intersection observer](intersect.md)
- [Mutation observer](mutate.md)
- [Resize](resize.md)
- [Scroll](scroll.md)
- [Tooltip](tooltip.md)
