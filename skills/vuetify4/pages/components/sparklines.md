---
title: "Sparklines"
nav_title: "Sparklines"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/sparklines"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Sparklines

Source: https://vuetifyjs.com/en/components/sparklines

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Sparklines component.

## Overview

The sparkline component creates beautiful and expressive simple graphs for displaying numerical data.

## Key Headings

- Usage
- API
- Examples
- Props
- Fill
- Misc
- Custom labels
- Dashboard card
- Heart rate

## Extracted Guidance

The sparkline component can be used to create simple graphs, like GitHub's contribution chart.

A sparkline is a tiny chart that provides a visual representation of data. The sparkline component comes in 2 variations, **trend** (default) and **bar**. Each supports a multitude of options for customizing the look and feel of the sparkline.

| Component | Description | | - | - | | [v-sparkline](/api/v-sparkline/) | Primary Component |

You can create a `v-sparkline` with fill using the `fill` property.

By providing a **label** slot, we are able to modify the displayed content by adding a dollar sign ($). This slot is **_exclusively_** for text content. For more information on the svg ` ` element, [navigate here](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text).

The `v-sparkline` component pairs nicely with `v-card` and `v-sheet` to create customized information cards, perfect for admin dashboards. Here we use custom labels to provide additional context for the sparkline.

For concise information, a complete chart might be overkill. Using a trend line with gradient provides enough detail for the user without showing too much information.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
