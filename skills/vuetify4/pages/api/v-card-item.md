---
title: "VCardItem"
nav_title: "VCardItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-card-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VCardItem

Source: https://vuetifyjs.com/en/api/v-card-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VCardItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VCard/VCardItem.tsx

## Source-derived Keys

- Props: appendAvatar, appendIcon, prependAvatar, prependIcon, subtitle, title
- Slots: default, prepend, append, title, subtitle

## Source Snippets

### propsFactory

```tsx
{
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  title: {
    type: [String, Number, Boolean],
    default: undefined,
  },

  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
}
```

### slots

```tsx
{
  default: never
  prepend: never
  append: never
  title: never
  subtitle: never
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
