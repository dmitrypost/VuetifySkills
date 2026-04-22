---
title: "VSelectionControlGroup"
nav_title: "VSelectionControlGroup"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-selection-control-group"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSelectionControlGroup

Source: https://vuetifyjs.com/en/api/v-selection-control-group

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSelectionControlGroup, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSelectionControlGroup.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSelectionControlGroup/VSelectionControlGroup.tsx

## Source-derived Keys

- Props: color, disabled, defaultsTarget, error, id, inline, falseIcon, trueIcon, ripple, multiple, name, readonly, modelValue, type, valueComparator
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  disabled: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: IconValue,
  trueIcon: IconValue,
  ripple: {
    type: [Boolean, Object] as PropType<RippleDirectiveBinding['value']>,
    default: true,
  },
  multiple: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
  name: String,
  readonly: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function as PropType<ValueComparator>,
    default: deepEqual,
  },

  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeThemeProps(),
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
