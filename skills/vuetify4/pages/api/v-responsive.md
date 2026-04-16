---
title: "VResponsive"
nav_title: "VResponsive"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-responsive"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VResponsive

Source: https://vuetifyjs.com/en/api/v-responsive

## Agent Use

Use this page when you need the Vuetify 4 API contract for VResponsive, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VResponsive.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VResponsive/VResponsive.tsx

## Props

- aspectRatio: Sets a base aspect ratio, calculated as width/height. This will only set a **minimum** height, the component can still grow if it has a lot of content.
- contentClass: Apply a custom class to the internal content element.
- inline: Display as an inline element instead of a block, also disables flex-grow.

## Slots

- additional: The slot for additional content.

## Source-derived Keys

- Props: aspectRatio, contentClass, inline
- Slots: default, additional

## Source Snippets

### propsFactory

```tsx
{
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,

  ...makeComponentProps(),
  ...makeDimensionProps(),
}
```

### slots

```tsx
{
  default: never
  additional: never
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
