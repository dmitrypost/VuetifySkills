---
title: "VProgress"
nav_title: "VProgress"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-progress"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VProgress

Source: https://vuetifyjs.com/en/api/v-progress

## Agent Use

Use this page when you need the Vuetify 4 API contract for VProgress, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VProgress.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VProgress/VProgress.tsx

## Props

- absolute: Positions the component absolutely within its parent, centering the progress indicator and placing details without affecting layout.
- type: Determines which progress indicator to render.
- label: Text displayed alongside the progress indicator and placed in `aria-label`.
- detailsPosition: Controls the position of the details (label and value) relative to the progress indicator.
- max: Sets the maximum value for the progress indicator.
- hideLabel: Hides the label text.
- hideValue: Hides the value text.
- valueFormat: Formatter for the visible value text and `aria-valuetext`. Use `[value]` and `[max]` as placeholders in strings, or pass a function that receives `{ value, max }` and returns a string.

## Slots

- label: Slot for custom label content.
- value: Slot for custom value content.

## Source-derived Keys

- Props: type, label, detailsPosition, valueFormat, max, absolute, hideLabel, hideValue, indeterminate, rounded

## Source Snippets

### propsFactory

```tsx
{
  type: {
    type: String as PropType<'linear' | 'circular'>,
    default: 'linear',
  },
  label: String,
  detailsPosition: {
    type: String as PropType<'top' | 'bottom'>,
    default: 'top',
  },
  valueFormat: {
    type: [String, Function] as PropType<ValueFormat>,
    default: '[percent]%',
  },
  max: {
    type: [Number, String],
    default: 100,
  },
  absolute: Boolean,
  hideLabel: Boolean,
  hideValue: Boolean,
  indeterminate: Boolean,
  rounded: Boolean,

  ...pick(makeVProgressLinearProps(), [
    // relevant props shared between linear and circular
    'modelValue',
    'color',
    'bgColor',
    'theme',
  ]),
  ...makeComponentProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
