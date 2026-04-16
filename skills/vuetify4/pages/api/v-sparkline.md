---
title: "VSparkline"
nav_title: "VSparkline"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-sparkline"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSparkline

Source: https://vuetifyjs.com/en/api/v-sparkline

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSparkline, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSparkline.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSparkline/VSparkline.tsx

## Props

- autoDraw: Trace the length of the line when first rendered.
- autoDrawDuration: Amount of time (in ms) to run the trace animation.
- autoDrawEasing: The easing function to use for the trace animation.
- autoLineWidth: Automatically expand bars to use space efficiently.
- fill: Using the **fill** property allows you to better customize the look and feel of your sparkline.
- gradient: An array of colors to use as a linear-gradient.
- gradientDirection: The direction the gradient should run.
- height: Height of the SVG trendline or bars.
- labels: An array of string labels that correspond to the same index as its data counterpart.
- labelSize: The label font size.
- lineWidth: The thickness of the line, in px.
- padding: Low `smooth` or high `line-width` values may result in cropping, increase padding to compensate.
- showLabels: Show labels below each data point.
- smooth: Number of px to use as a corner radius. `true` defaults to 8, `false` is 0.
- type: Choose between a trendline or bars.
- width: Width of the SVG trendline or bars.
- id: The id of the component.
- itemValue: The value of the item.
- max: The maximum value of the sparkline.
- min: The minimum value of the sparkline.

## Source-derived Keys

- Props: type
- Slots: default, label

## Source Snippets

### propsFactory

```tsx
{
  type: {
    type: String as PropType<'trend' | 'bar'>,
    default: 'trend',
  },

  ...makeVBarlineProps(),
  ...makeVTrendlineProps(),
}
```

### slots

```tsx
{
  default: void
  label: { index: number, value: string }
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
