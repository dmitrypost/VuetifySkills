---
title: "VFooter"
nav_title: "VFooter"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-footer"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VFooter

Source: https://vuetifyjs.com/en/api/v-footer

## Agent Use

Use this page when you need the Vuetify 4 API contract for VFooter, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VFooter.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VFooter/VFooter.tsx

## Props

- app: Determines the position of the footer. If true, the footer would be given a fixed position at the bottom of the viewport. If false, the footer is set to the bottom of the page.

## Source-derived Keys

- Props: app, color, height

## Source Snippets

### propsFactory

```tsx
{
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 'auto',
  },

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({ tag: 'footer' }),
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
