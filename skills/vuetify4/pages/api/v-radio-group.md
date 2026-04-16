---
title: "VRadioGroup"
nav_title: "VRadioGroup"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-radio-group"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VRadioGroup

Source: https://vuetifyjs.com/en/api/v-radio-group

## Agent Use

Use this page when you need the Vuetify 4 API contract for VRadioGroup, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VRadioGroup.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VRadioGroup/VRadioGroup.tsx

## Props

- inline: Displays radio buttons in row.

## Source-derived Keys

- Props: height, trueIcon, falseIcon, type
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  height: {
    type: [Number, String],
    default: 'auto',
  },

  ...omit(makeVInputProps(), ['direction']),
  ...omit(makeSelectionControlGroupProps(), ['multiple']),

  trueIcon: {
    type: IconValue,
    default: '$radioOn',
  },
  falseIcon: {
    type: IconValue,
    default: '$radioOff',
  },
  type: {
    type: String,
    default: 'radio',
  },
}
```

### emits

```tsx
{
    'update:modelValue': (value: any) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
