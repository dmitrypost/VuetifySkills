---
title: "VHover"
nav_title: "VHover"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-hover"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VHover

Source: https://vuetifyjs.com/en/api/v-hover

## Agent Use

Use this page when you need the Vuetify 4 API contract for VHover, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VHover.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VHover/VHover.tsx

## Props

- disabled: Removes hover functionality.

## Source-derived Keys

- Props: disabled, modelValue
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null,
  },

  ...makeDelayProps(),
}
```

### emits

```tsx
{
    'update:modelValue': (value: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
