---
title: "VRadio"
nav_title: "VRadio"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-radio"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VRadio

Source: https://vuetifyjs.com/en/api/v-radio

## Agent Use

Use this page when you need the Vuetify 4 API contract for VRadio, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VRadio.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VRadio/VRadio.tsx

## Props

- falseIcon: The icon used when inactive.
- trueIcon: The icon used when active.

## Source Snippets

### propsFactory

```tsx
{
  ...makeVSelectionControlProps({
    falseIcon: '$radioOff',
    trueIcon: '$radioOn',
  }),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
