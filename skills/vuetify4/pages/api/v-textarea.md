---
title: "VTextarea"
nav_title: "VTextarea"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-textarea"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTextarea

Source: https://vuetifyjs.com/en/api/v-textarea

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTextarea, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTextarea.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTextarea/VTextarea.tsx

## Props

- autoGrow: Automatically grow the textarea depending on amount of text.
- counterValue: Display the input length but do not provide any validation.
- noResize: Remove resize handle.
- persistentPlaceholder: Forces placeholder to always be visible.
- prefix: Displays prefix text.
- rows: Default row count.
- suffix: Displays suffix text.
- maxHeight: Alternative for **max-rows**. Specifies the maximum height in pixels (including the field padding) for **auto-grow**.
- maxRows: Specifies the maximum number of rows for **auto-grow**.
- autofocus: The element should be focused as soon as the page loads.

## Events

- mousedown:control: Event that is emitted when using mousedown on the main control area.
- update:rows: Emitted when the number of rows changes.

## Slots

- counter: Slot for the input’s counter text.

## Source-derived Keys

- Props: autoGrow, autofocus, counter, counterValue, prefix, placeholder, persistentPlaceholder, persistentCounter, noResize, rows, maxHeight, maxRows, suffix, modelModifiers
- Events: click:control, mousedown:control, update:focused, update:modelValue, update:rows

## Source Snippets

### propsFactory

```tsx
{
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String] as PropType<true | number | string>,
  counterValue: Function as PropType<(value: any) => number>,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (v: any) => !isNaN(parseFloat(v)),
  },
  maxHeight: {
    type: [Number, String],
    validator: (v: any) => !isNaN(parseFloat(v)),
  },
  maxRows: {
    type: [Number, String],
    validator: (v: any) => !isNaN(parseFloat(v)),
  },
  suffix: String,
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
    'update:rows': (rows: number) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
