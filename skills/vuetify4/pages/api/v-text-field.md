---
title: "VTextField"
nav_title: "VTextField"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-text-field"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTextField

Source: https://vuetifyjs.com/en/api/v-text-field

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTextField, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTextField.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTextField/VTextField.tsx

## Props

- autofocus: Enables autofocus.
- clearIcon: Applied when using **clearable** and the input is dirty.
- counterValue: Function returns the counter display text.
- flat: Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props.
- persistentPlaceholder: Forces placeholder to always be visible.
- placeholder: Sets the input’s placeholder text.
- prefix: Displays prefix text.
- prependIcon: Prepends an icon to the outside the component's input, uses the same syntax as `v-icon`.
- prependInnerIcon: Prepends an icon inside the component's input, uses the same syntax as `v-icon`.
- reverse: Reverses the input orientation.
- role: The role attribute applied to the input.
- rounded: Adds a border radius to the input.
- suffix: Displays suffix text.
- type: Sets input type.

## Events

- click:append: Emitted when append icon is clicked.
- click:appendInner: Emitted when appended inner icon is clicked.
- click:clear: Emitted when clearable icon clicked.
- click:prepend: Emitted when prepended icon is clicked.
- click:prependInner: Emitted when prepended inner icon is clicked.
- mousedown:control: Event that is emitted when using mousedown on the main control area.

## Slots

- counter: Slot for the input’s counter text.

## Source-derived Keys

- Props: autofocus, counter, counterValue, prefix, placeholder, persistentPlaceholder, persistentCounter, suffix, role, type, modelModifiers
- Events: click:control, mousedown:control, update:focused, update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function] as PropType<number | ((value: any) => number)>,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: 'text',
  },
  modelModifiers: Object as PropType<Record<string, boolean>>,

  ...makeAutocompleteProps(),
  ...omit(makeVInputProps(), ['direction']),
  ...makeVFieldProps(),
}
```

### emits

```tsx
{
    'click:control': (e: MouseEvent) => true,
    'mousedown:control': (e: MouseEvent) => true,
    'update:focused': (focused: boolean) => true,
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
