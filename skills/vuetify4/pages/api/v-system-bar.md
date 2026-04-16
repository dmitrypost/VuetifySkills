---
title: "VSystemBar"
nav_title: "VSystemBar"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-system-bar"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSystemBar

Source: https://vuetifyjs.com/en/api/v-system-bar

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSystemBar, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSystemBar.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSystemBar/VSystemBar.tsx

## Props

- height: Sets the height for the component.
- window: Increases the system bar height to 32px (24px default).

## Source-derived Keys

- Props: color, height, window

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  height: [Number, String],
  window: Boolean,

  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
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
