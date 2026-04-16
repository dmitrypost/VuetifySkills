---
title: "VParallax"
nav_title: "VParallax"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-parallax"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VParallax

Source: https://vuetifyjs.com/en/api/v-parallax

## Agent Use

Use this page when you need the Vuetify 4 API contract for VParallax, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VParallax.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VParallax/VParallax.tsx

## Props

- scale: The scale of the parallax image.

## Slots

- error: Puts the input in a manual error state.
- placeholder: Sets the input's placeholder text.
- sources: A list of `<source>` elements.

## Source-derived Keys

- Props: scale

## Source Snippets

### propsFactory

```tsx
{
  scale: {
    type: [Number, String],
    default: 0.5,
  },

  ...makeComponentProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
