---
title: "VThemeProvider"
nav_title: "VThemeProvider"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-theme-provider"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VThemeProvider

Source: https://vuetifyjs.com/en/api/v-theme-provider

## Agent Use

Use this page when you need the Vuetify 4 API contract for VThemeProvider, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VThemeProvider.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VThemeProvider/VThemeProvider.tsx

## Props

- withBackground: Wraps its children in an element and applies the current theme's background color to it.

## Slots

- default: All child components will have their theme overridden. Must have exactly one root element.

## Source-derived Keys

- Props: withBackground

## Source Snippets

### propsFactory

```tsx
{
  withBackground: Boolean,

  ...makeComponentProps(),
  ...makeThemeProps(),
  ...makeTagProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
