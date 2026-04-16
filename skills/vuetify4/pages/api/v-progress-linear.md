---
title: "VProgressLinear"
nav_title: "VProgressLinear"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-progress-linear"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VProgressLinear

Source: https://vuetifyjs.com/en/api/v-progress-linear

## Agent Use

Use this page when you need the Vuetify 4 API contract for VProgressLinear, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VProgressLinear.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VProgressLinear/VProgressLinear.tsx

## Props

- absolute: Applies position: absolute to the component.
- active: Reduce the height to 0, hiding component.
- bgOpacity: Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise.
- bufferColor: Sets the color of the buffer bar.
- bufferOpacity: Set the opacity of the buffer bar.
- bufferValue: The percentage value for the buffer.
- chunkCount: Specifies amount of chunks to divide the bar into.
- chunkGap: Defines size of the gap between chunks.
- chunkWidth: Defines chunk absolute size. Useful when chunk is narrow.
- clickable: Clicking on the progress track will automatically set the value.
- indeterminate: Constantly animates, use when loading progress is unknown.
- max: Sets the maximum value the progress can reach.
- opacity: Set the opacity of the progress bar.
- reverse: Displays reversed progress (right to left in LTR mode and left to right in RTL).
- roundedBar: Applies a border radius to the progress bar.
- stream: An alternative style for portraying loading that works in tandem with **buffer-value**.
- striped: Adds a stripe background to the filled portion of the progress component.

## Slots

- default: Provides the current value of the component.

## Source-derived Keys

- Props: absolute, active, bgColor, bgOpacity, bufferValue, bufferColor, bufferOpacity, clickable, color, height, indeterminate, max, modelValue, opacity, reverse, stream, striped, roundedBar
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  absolute: Boolean,
  active: {
    type: Boolean,
    default: true,
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0,
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4,
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100,
  },
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,

  ...makeChunksProps(),
  ...makeComponentProps(),
  ...makeLocationProps({ location: 'top' } as const),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
}
```

### emits

```tsx
{
    'update:modelValue': (value: number) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
