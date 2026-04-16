---
title: "VRangeSlider"
nav_title: "VRangeSlider"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-range-slider"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VRangeSlider

Source: https://vuetifyjs.com/en/api/v-range-slider

## Agent Use

Use this page when you need the Vuetify 4 API contract for VRangeSlider, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VRangeSlider.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VRangeSlider/VRangeSlider.tsx

## Props

- strict: Disallows dragging the ending thumb past the starting thumb and vice versa.

## Events

- end: Slider value emitted at the end of slider movement.
- start: Slider value emitted at start of slider movement.

## Slots

- thumb-label: Slot for the thumb label.
- tick-label: Slot for the tick label.

## Exposed

- focus: Focus the first slider handle

## Source-derived Keys

- Props: strict, modelValue
- Events: update:focused, update:modelValue, end, start

## Source Snippets

### propsFactory

```tsx
{
  ...makeFocusProps(),
  ...makeVInputProps(),
  ...makeSliderProps(),

  strict: Boolean,
  modelValue: {
    type: Array as PropType<readonly (string | number)[]>,
    default: () => ([0, 0]),
  },
}
```

### emits

```tsx
{
    'update:focused': (value: boolean) => true,
    'update:modelValue': (value: [number, number]) => true,
    end: (value: [number, number]) => true,
    start: (value: [number, number]) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
