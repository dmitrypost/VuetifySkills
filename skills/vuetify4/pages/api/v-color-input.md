---
title: "VColorInput"
nav_title: "VColorInput"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-color-input"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VColorInput

Source: https://vuetifyjs.com/en/api/v-color-input

## Agent Use

Use this page when you need the Vuetify 4 API contract for VColorInput, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VColorInput.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VColorInput/VColorInput.tsx

## Props

- hidePip: Hide pip icon
- colorPip: Synchronize pip color with current value
- pipIcon: The icon used for pip
- pipLocation: Move pip icon to a different slot
- pipVariant: Variant of the pip control

## Source-derived Keys

- Props: hidePip, colorPip, menuProps, pipIcon, pipLocation, pipVariant, pickerProps
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  hidePip: Boolean,
  colorPip: Boolean,
  menuProps: Object as PropType<VMenu['$props']>,
  pipIcon: {
    type: String,
    default: '$color',
  },
  pipLocation: {
    type: String as PropType<PipLocation>,
    default: 'prepend',
    validator: (v: any) => availablePipLocations.includes(v),
  },
  pipVariant: {
    type: String as PropType<VAvatar['$props']['variant']>,
    default: 'text',
  },
  pickerProps: Object as PropType<VColorPicker['$props']>,

  ...makeFocusProps(),
  ...makeVConfirmEditProps(),
  ...makeVTextFieldProps(),
  ...omit(makeVColorPickerProps(), [
    'location',
    'height',
    'minHeight',
    'maxHeight',
  ]),
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
