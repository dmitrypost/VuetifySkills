---
title: "Intersection observer"
nav_title: "Intersection observer"
section: "Directives"
source_url: "https://vuetifyjs.com/en/directives/intersect"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Intersection observer

Source: https://vuetifyjs.com/en/directives/intersect

## Agent Use

Use this page when applying the Vuetify 4 Intersection observer directive and its runtime behavior.

## Overview

The intersection observer directive utilizes the Intersection observer API. It allows you to determine when elements are visible on the screen.

## Key Headings

- Usage
- API
- Examples
- Props
- Options

## Extracted Guidance

The `v-intersect` directive utilizes the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). It provides an easy-to-use interface for detecting when elements are visible within the user's viewport. This is also used for the [v-lazy](/components/lazy) component.

Scroll the window and watch the colored dot. Notice as the [v-card](/components/cards) comes into view that it changes from error to success.

| Directive | Description | |--------------------------------------------|-------------------------------------| | [v-intersect](/api/v-intersect-directive/) | The intersection observer directive |

The `v-intersect` directive accepts options. Available options can be found in the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). Below is an example using the `threshold` option.

## Related Pages

- [Click outside](click-outside.md)
- [Mutation observer](mutate.md)
- [Resize](resize.md)
- [Ripple](ripple.md)
- [Scroll](scroll.md)
- [Tooltip](tooltip.md)
