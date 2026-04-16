---
title: "VColorPicker"
nav_title: "VColorPicker"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-color-picker"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VColorPicker

Source: https://vuetifyjs.com/en/api/v-color-picker

## Agent Use

Use this page when you need the Vuetify 4 API contract for VColorPicker, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VColorPicker.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VColorPicker/VColorPicker.tsx

## Props

- canvasHeight: Height of canvas.
- dotSize: Changes the size of the selection dot on the canvas.
- eyeDropperIcon: Icon used to trigger EyeDropper API.
- hideCanvas: Hides canvas.
- hideEyeDropper: Hides eyedropper icon.
- hideSliders: Hides sliders.
- hideInputs: Hides inputs.
- mode: The current selected input type. Syncable with `v-model:mode`.
- modes: Sets available input types.
- readonly: Puts the color picker in a readonly state.
- showSwatches: Displays color swatches.
- swatches: Sets the available color swatches to select from. 2D array of rows and columns, accepts any color format the picker does.
- swatchesMaxHeight: Sets the maximum height of the swatches section.
- width: Sets the width of the color picker.

## Events

- update:mode: Selected mode.

## Source-derived Keys

- Props: canvasHeight, disabled, dotSize, hideCanvas, hideSliders, hideInputs, mode, modes, showSwatches, readonly, swatches, swatchesMaxHeight, modelValue
- Events: update:modelValue, update:mode

## Source Snippets

### propsFactory

```tsx
{
  canvasHeight: {
    type: [String, Number],
    default: 150,
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10,
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String as PropType<keyof typeof modes>,
    default: 'rgba',
    validator: (v: string) => Object.keys(modes).includes(v),
  },
  modes: {
    type: Array as PropType<readonly (keyof typeof modes)[]>,
    default: () => Object.keys(modes),
    validator: (v: any) => Array.isArray(v) && v.every(m => Object.keys(modes).includes(m)),
  },
  showSwatches: Boolean,
  readonly: Boolean,
  swatches: Array as PropType<DeepReadonly<Color[][]>>,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150,
  },
  modelValue: {
    type: [Object, String] as PropType<Record<string, unknown> | string | undefined | null>,
  },

  ...makeVPickerProps({ hideHeader: true }),
  ...pick(makeVColorPickerPreviewProps(), ['hideEyeDropper', 'eyeDropperIcon']),
}
```

### emits

```tsx
{
    'update:modelValue': (color: any) => true,
    'update:mode': (mode: keyof typeof modes) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
