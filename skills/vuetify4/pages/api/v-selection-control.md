---
title: "VSelectionControl"
nav_title: "VSelectionControl"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-selection-control"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSelectionControl

Source: https://vuetifyjs.com/en/api/v-selection-control

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSelectionControl, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSelectionControl.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSelectionControl/VSelectionControl.tsx

## Props

- baseColor: Sets the color of the input when it is not focused.
- value: The value used when the component is selected in a group. If not provided, a unique ID will be used.

## Slots

- input: The slot used for the default input element.

## Exposed

- isFocused: Will return true if the component is currently focused.
- input: Reference to the root input element.

## Source-derived Keys

- Props: label, baseColor, trueValue, falseValue, value
- Events: update:modelValue
- Slots: default, label, input

## Source Snippets

### propsFactory

```tsx
{
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,

  ...makeComponentProps(),
  ...makeSelectionControlGroupProps(),
}
```

### slots

```tsx
{
  default: {
    backgroundColorClasses: Ref<string[]>
    backgroundColorStyles: Ref<CSSProperties>
  }
  label: { label: string | undefined, props: Record<string, unknown> }
  input: SelectionControlSlot
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
