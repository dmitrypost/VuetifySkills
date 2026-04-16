---
title: "VPieSegment"
nav_title: "VPieSegment"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-pie-segment"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VPieSegment

Source: https://vuetifyjs.com/en/api/v-pie-segment

## Agent Use

Use this page when you need the Vuetify 4 API contract for VPieSegment, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VPieSegment.json

## Props

- animation: Controls duration and easing of the expand/collapse and hover effect. Defaults to `easeInOutCubic` over 400ms.
- color: Sets segment color to be passed straight to CSS style attribute.
- gap: Reduces segment size by a specified angle. Recommended to in range (0-10).
- hideSlice: Makes inner slice invisible instead of semi-transparent.
- innerCut: Sets inner slice size in percent (0-100).
- pattern: Decal pattern to put on top of the outer slice.
- rotate: Sets segment offset angle.
- rounded: Number passed as corner radius relative to 100x100 SVG viewport
- value: The value used for calculate segment/arc angle size.
- hoverScale: Reduces outer radius until segment is hovered. Expects fraction value (0-0.25)
- reveal: Enables and controls duration for initial reveal animation. Easing function is shared with `animation` prop.

## Events

- update:active: Emitted when the segment's active (hovered) state changes.

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
