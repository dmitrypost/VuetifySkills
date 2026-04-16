---
title: "VBtnGroup"
nav_title: "VBtnGroup"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-btn-group"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VBtnGroup

Source: https://vuetifyjs.com/en/api/v-btn-group

## Agent Use

Use this page when you need the Vuetify 4 API contract for VBtnGroup, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VBtnGroup.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBtnGroup/VBtnGroup.tsx

## Props

- direction: Control how children components are arranged - in a row or column.
- divided: Add dividers between children [v-btn](/components/buttons) components.

## Source-derived Keys

- Props: baseColor, divided, direction

## Source Snippets

### propsFactory

```tsx
{
  baseColor: String,
  divided: Boolean,
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
