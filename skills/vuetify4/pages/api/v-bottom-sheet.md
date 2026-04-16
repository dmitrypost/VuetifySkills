---
title: "VBottomSheet"
nav_title: "VBottomSheet"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-bottom-sheet"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VBottomSheet

Source: https://vuetifyjs.com/en/api/v-bottom-sheet

## Agent Use

Use this page when you need the Vuetify 4 API contract for VBottomSheet, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VBottomSheet.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBottomSheet/VBottomSheet.tsx

## Props

- inset: Reduces the sheet content maximum width to 70%.

## Source-derived Keys

- Props: inset
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  inset: Boolean,

  ...makeVDialogProps({
    transition: 'bottom-sheet-transition',
  }),
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
