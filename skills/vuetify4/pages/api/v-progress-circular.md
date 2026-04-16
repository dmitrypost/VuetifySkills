---
title: "VProgressCircular"
nav_title: "VProgressCircular"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-progress-circular"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VProgressCircular

Source: https://vuetifyjs.com/en/api/v-progress-circular

## Agent Use

Use this page when you need the Vuetify 4 API contract for VProgressCircular, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VProgressCircular.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VProgressCircular/VProgressCircular.tsx

## Props

- indeterminate: Constantly animates, use when loading progress is unknown. If set to the string `'disable-shrink'` it will use a simpler animation that does not run on the main thread.
- reveal: Animates the progress circle from 0 to its model value when the component mounts.
- rounded: Rounds the ends of the progress arc for a softer appearance. When enabled, the progress stroke will have rounded caps instead of square ends.
- modelValue: The percentage value for current progress.
- rotate: Rotates the circle start point in degrees.
- size: Sets the diameter of the circle in pixels.
- width: Sets the stroke of the circle in pixels.

## Source-derived Keys

- Props: bgColor, color, indeterminate, rounded, modelValue, rotate, width

## Source Snippets

### propsFactory

```tsx
{
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String] as PropType<boolean | 'disable-shrink'>,
  rounded: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  rotate: {
    type: [Number, String],
    default: 0,
  },
  width: {
    type: [Number, String],
    default: 4,
  },

  ...makeComponentProps(),
  ...makeRevealProps(),
  ...makeSizeProps(),
  ...makeTagProps({ tag: 'div' }),
  ...makeThemeProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
