---
title: "VPie"
nav_title: "VPie"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-pie"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VPie

Source: https://vuetifyjs.com/en/api/v-pie

## Agent Use

Use this page when you need the Vuetify 4 API contract for VPie, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VPie.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VPie/VPie.tsx

## Props

- gaugeCut: Allows removing bottom part of the chart to make it into a gauge. Expects angle (0-180).
- hoverScale: Enables interactive behavior by reducing segment size until it gets hovered. Expects fraction value (0-0.25).
- innerCut: Specifies inner radius for a donut-style chart as a percent (0-100). Without `hide-slice`, inner slice is visible with translucent color matching the item.
- items: Data items expected to contain `key`, `title` and `value`.
- legend: Controls legend visibility, position and text format.
- palette: Defines colors and patterns to be applied based on the data items order. Data items can also define their colors.
- rotate: Rotates the chart segments clockwise.
- size: Sets the height and width of the chart (excluding title and legend).
- tooltip: Controls tooltip visibility, transition, offset from the cursor and formats of title and subtitle.

## Slots

- center: Slot used to put custom content in the center of the chart
- legend: Slot used to override how legend is being displayed
- legend-text: Slot used to customize as text content of single legend item
- title: Slot used to customize the title above the chart
- tooltip: Slot used to customize tooltip content

## Source-derived Keys

- Props: title, bgColor, items, palette, itemKey, itemValue, itemTitle, size, rotate, gaugeCut, legend, tooltip
- Slots: center, legend, legend-text, title, tooltip

## Source Snippets

### propsFactory

```tsx
{
  title: String,
  bgColor: String,
  items: {
    type: Array as PropType<Record<string, any> | { color?: string, pattern?: string }[]>,
    default: () => [],
  },
  palette: {
    type: Array as PropType<({ color?: string, pattern?: string } | string)[]>,
    default: () => [],
  },
  itemKey: {
    type: String,
    default: 'key',
  },
  itemValue: {
    type: String,
    default: 'value',
  },
  itemTitle: {
    type: String,
    default: 'title',
  },
  size: {
    type: [Number, String],
    default: 250,
  },
  rotate: [Number, String],
  gaugeCut: [Number, String],
  legend: {
    type: [Boolean, Object] as PropType<boolean | {
      position?: 'left' | 'top' | 'right' | 'bottom'
      textFormat?: TextTemplate
    }>,
    default: false,
  },
  tooltip: {
    type: [Boolean, Object] as PropType<boolean | {
      titleFormat?: TextTemplate
      subtitleFormat?: TextTemplate
      avatarSize?: number
      transition?: string | boolean | TransitionProps
      offset?: number
    }>,
    default: false,
  },

  ...makeDensityProps(),
  ...pick(makeVPieSegmentProps(), [
    'animation',
    'gap',
    'rounded',
    'innerCut',
    'hoverScale',
    'hideSlice',
    'reveal',
  ]),
}
```

### slots

```tsx
{
  center: { total: number }
  legend: {
    isActive: (item: PieItem) => boolean
    toggle: (item: PieItem) => void
    items: PieItem[]
    total: number
  }
  'legend-text': {
    item: PieItem
    total: number
  }
  title: never
  tooltip: {
    item: PieItem
    total: number
  }
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
