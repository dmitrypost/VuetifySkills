---
title: "VOtpInput"
nav_title: "VOtpInput"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-otp-input"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VOtpInput

Source: https://vuetifyjs.com/en/api/v-otp-input

## Agent Use

Use this page when you need the Vuetify 4 API contract for VOtpInput, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VOtpInput.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VOtpInput/VOtpInput.tsx

## Props

- autofocus: Automatically focuses the first input on page load
- divider: Specifies the dividing character between items.
- focusAll: Puts all inputs into a focus state when any are focused
- length: The OTP field's length.
- placeholder: Sets the input’s placeholder text.
- masked: Hides the entered characters with bullets, similar to a password input, but makes it possible to also restrict characters to digits with `type="number"`.
- type: Supported types: `text`, `password`, `number`.

## Events

- finish: Emitted when the input is filled completely and cursor is blurred.

## Exposed

- reset: Reset's the input model to an empty array

## Source-derived Keys

- Props: autofocus, divider, focusAll, label, length, masked, modelValue, placeholder, type
- Events: finish, update:focused, update:modelValue
- Slots: default, loader

## Source Snippets

### propsFactory

```tsx
{
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: '$vuetify.input.otp',
  },
  length: {
    type: [Number, String],
    default: 6,
  },
  masked: Boolean,
  modelValue: {
    type: [Number, String],
    default: undefined,
  },
  placeholder: String,
  type: {
    type: String as PropType<'text' | 'password' | 'number'>,
    default: 'number',
  },

  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeFocusProps(),
  ...pick(makeVFieldProps({
    variant: 'outlined' as const,
  }), [
    'baseColor',
    'bgColor',
    'class',
    'color',
    'disabled',
    'error',
    'loading',
    'rounded',
    'style',
    'theme',
    'variant',
  ]),
}
```

### slots

```tsx
{
  default: never
  loader: never
}
```

### emits

```tsx
{
    finish: (val: string) => true,
    'update:focused': (val: boolean) => true,
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
