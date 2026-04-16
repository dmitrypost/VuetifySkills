---
title: "VSlider"
nav_title: "VSlider"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-slider"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSlider

Source: https://vuetifyjs.com/en/api/v-slider

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSlider, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSlider.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSlider/VSlider.tsx

## Events

- end: Slider value emitted at the end of slider movement.
- start: Slider value emitted at start of slider movement.

## Slots

- thumb-label: Slot for the thumb label.
- tick-label: Slot for the tick label.

## Exposed

- focus: Focus the slider handle.

## Source-derived Keys

- Props: modelValue
- Events: update:focused, update:modelValue, start, end

## Source Snippets

### propsFactory

```tsx
{
  ...makeFocusProps(),
  ...makeSliderProps(),
  ...makeVInputProps(),

  modelValue: {
    type: [Number, String],
    default: 0,
  },
}
```

### emits

```tsx
{
    'update:focused': (value: boolean) => true,
    'update:modelValue': (v: number) => true,
    start: (value: number) => true,
    end: (value: number) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
