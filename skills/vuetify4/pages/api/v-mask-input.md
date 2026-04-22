---
title: "VMaskInput"
nav_title: "VMaskInput"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-mask-input"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VMaskInput

Source: https://vuetifyjs.com/en/api/v-mask-input

## Agent Use

Use this page when you need the Vuetify 4 API contract for VMaskInput, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VMaskInput.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VMaskInput/VMaskInput.tsx

## Source-derived Keys

- Props: returnMaskedValue
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  returnMaskedValue: Boolean,
  ...makeVTextFieldProps(),
  ...makeMaskProps(),
}
```

### emits

```tsx
{
    'update:modelValue': (val: string) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
