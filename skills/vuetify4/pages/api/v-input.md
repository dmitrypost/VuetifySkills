---
title: "VInput"
nav_title: "VInput"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-input"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VInput

Source: https://vuetifyjs.com/en/api/v-input

## Agent Use

Use this page when you need the Vuetify 4 API contract for VInput, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VInput.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VInput/VInput.tsx

## Props

- baseColor: Sets the color of the input when it is not focused.
- centerAffix: Vertically align **appendInner**, **prependInner**, **clearIcon** and **label** in the center.
- direction: Changes the direction of the input.
- hideDetails: Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display.
- hideSpinButtons: Hides spin buttons on the input when type is set to `number`.
- glow: Makes prepend/append icons full opacity when the input is focused and apply color.
- hint: Displays hint text below the input when focused. Force this always open with the [persistent-hint](#props-persistent-hint) property.
- iconColor: Sets the color of the prepend/append icons.
- id: Sets the DOM id on the component.
- indentDetails: Adds / removes inline padding in inputs details. Useful when trying to align different variants of fields and selection controls.
- persistentHint: Forces [hint](#props-hint) to always be visible.
- prependIcon: Prepends an icon to the component, uses the same syntax as `v-icon`.

## Events

- click:append: Emitted when appended icon is clicked.
- click:prepend: Emitted when prepended icon is clicked.

## Exposed

- errorMessages: An array of error messages that were set by the `setErrors` method.
- isValid: Boolean indicating if the input is valid.
- reset: Resets the input value.
- resetValidation: Resets validation of the input without modifying its value.
- validate: Validates the input's value.

## Source-derived Keys

- Props: id, appendIcon, baseColor, centerAffix, color, glow, iconColor, prependIcon, hideDetails, hideSpinButtons, hint, indentDetails, persistentHint, messages, direction, onClick:prepend, onClick:append
- Events: update:modelValue
- Slots: default, prepend, append, details, message

## Source Snippets

### propsFactory

```tsx
{
  id: String,
  appendIcon: IconValue,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: true,
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: IconValue,
  hideDetails: [Boolean, String] as PropType<boolean | 'auto'>,
  hideSpinButtons: Boolean,
  hint: String,
  indentDetails: {
    type: Boolean,
    default: null,
  },
  persistentHint: Boolean,
  messages: {
    type: [Array, String] as PropType<string | readonly string[]>,
    default: () => ([]),
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
    validator: (v: any) => ['horizontal', 'vertical'].includes(v),
  },

  'onClick:prepend': EventProp<[MouseEvent]>(),
  'onClick:append': EventProp<[MouseEvent]>(),

  ...makeComponentProps(),
  ...makeDensityProps(),
  ...pick(makeDimensionProps(), [
    'maxWidth',
    'minWidth',
    'width',
  ]),
  ...makeThemeProps(),
  ...makeValidationProps(),
}
```

### slots

```tsx
{
  default: VInputSlot
  prepend: VInputSlot
  append: VInputSlot
  details: VInputSlot
  message: VMessageSlot
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
