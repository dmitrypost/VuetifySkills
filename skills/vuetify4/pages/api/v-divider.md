---
title: "VDivider"
nav_title: "VDivider"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-divider"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDivider

Source: https://vuetifyjs.com/en/api/v-divider

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDivider, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDivider.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDivider/VDivider.tsx

## Props

- contentOffset: Increases content spacing from the lines. When passed as an array, the second value shifts slot content down (or right in vertical mode).
- gradient: Adds fading effect for both sides.
- inset: Adds indentation (72px) for **normal** dividers, reduces max height for **vertical**.
- length: Sets the dividers length. Default unit is px.
- thickness: Sets the dividers thickness. Default unit is px.
- variant: Applies `border-style`.
- vertical: Displays dividers vertically.

## Source-derived Keys

- Props: color, contentOffset, gradient, inset, length, opacity, thickness, vertical, variant

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  contentOffset: [Number, String, Array] as PropType<number | string | (string | number)[]>,
  gradient: Boolean,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  variant: {
    type: String as PropType<Variant>,
    default: 'solid',
    validator: (v: any) => allowedVariants.includes(v),
  },

  ...makeComponentProps(),
  ...makeThemeProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
