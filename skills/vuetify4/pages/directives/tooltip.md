---
title: "Tooltip directive"
nav_title: "Tooltip"
section: "Directives"
source_url: "https://vuetifyjs.com/en/directives/tooltip"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Tooltip directive

Source: https://vuetifyjs.com/en/directives/tooltip

## Agent Use

Use this page when applying the Vuetify 4 Tooltip directive directive and its runtime behavior.

## Overview

The Tooltip directive is an easy to use implementation of VTooltip.

## Key Headings

- Usage
- API
- Guide
- Location
- Tooltip text
- Other props

## Extracted Guidance

The `v-tooltip` directive is a shorthand way of adding tooltips to elements in your application.

The `v-tooltip` directive makes it easy to add a tooltip to any element in your application. It is a wrapper around the `v-tooltip` component.

| Directive | Description | |------------------------------------|---------------------| | [v-tooltip](/api/v-tooltip-directive/) | The Tooltip directive |

The `v-tooltip` directive is a simple way to add a tooltip to any element in your application. It is a wrapper around the `v-tooltip` component.

Location is set as a directive argument with the same syntax as the component's `location` prop separated by a hyphen instead of a space.

By default the tooltip will use the target element's [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext), or you can pass another string as a directive value. Remember directive values are expressions so static strings must be quoted.

The `v-tooltip` directive can also accept an object of [VTooltip props](/api/v-tooltip/#props) as a value (use camelCase keys).

## Related Pages

- [Click outside](click-outside.md)
- [Intersection observer](intersect.md)
- [Mutation observer](mutate.md)
- [Resize](resize.md)
- [Ripple](ripple.md)
- [Scroll](scroll.md)
