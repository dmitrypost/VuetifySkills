---
title: "VNumberInput"
nav_title: "VNumberInput"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-number-input"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VNumberInput

Source: https://vuetifyjs.com/en/api/v-number-input

## Agent Use

Use this page when you need the Vuetify 4 API contract for VNumberInput, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VNumberInput.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VNumberInput/VNumberInput.tsx

## Props

- controlVariant: Controls layout of the stepper buttons.
- decimalSeparator: Expects single character to be used as decimal separator.
- hideInput: Hide the input field.
- inset: Applies an indentation to the dividers used in the stepper buttons.
- max: Specifies the maximum allowable value for the input.
- min: Specifies the minimum allowable value for the input.
- minFractionDigits: Specifies the minimum fraction digits to be displayed (capped to `precision`). Defaults to `precision` when not explicitly set.
- precision: Enforces strict precision. It is expected to be an integer value in range between `0` and `15`, or null for unrestricted.
- step: Defines the interval between allowed values when the user increments or decrements the input
- type: **IGNORED** underlying input is always of type 'text'

## Slots

- decrement: Slot for customizing the decrement button or icon used to decrease the value of the input.
- increment: Slot for customizing the increment button or icon used to increase the value of the input.

## Source-derived Keys

- Props: controlVariant, inset, hideInput, modelValue, min, max, step, precision, minFractionDigits, decimalSeparator
- Events: update:focused, update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  controlVariant: {
    type: String as PropType<ControlVariant>,
    default: 'default',
  },
  inset: Boolean,
  hideInput: Boolean,
  modelValue: {
    type: Number as PropType<number | null>,
    default: null,
  },
  min: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER,
  },
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER,
  },
  step: {
    type: Number,
    default: 1,
  },
  precision: {
    type: Number as PropType<number | null>,
    default: 0,
  },
  minFractionDigits: {
    type: Number as PropType<number | null>,
    default: null,
  },
  decimalSeparator: {
    type: String,
    validator: (v: any) => !v || v.length === 1,
  },

  ...omit(makeVTextFieldProps(), ['modelValue', 'validationValue']),
}
```

### emits

```tsx
{
    'update:focused': (val: boolean) => true,
    'update:modelValue': (val: number) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
