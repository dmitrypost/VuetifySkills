---
title: "VIcon"
nav_title: "VIcon"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-icon"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VIcon

Source: https://vuetifyjs.com/en/api/v-icon

## Agent Use

Use this page when you need the Vuetify 4 API contract for VIcon, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VIcon.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VIcon/VIcon.tsx

## Source-derived Keys

- Props: color, disabled, start, end, icon, opacity

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  opacity: [String, Number],

  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({ tag: 'i' }),
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
