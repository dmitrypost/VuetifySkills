---
title: "VSwitch"
nav_title: "VSwitch"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-switch"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSwitch

Source: https://vuetifyjs.com/en/api/v-switch

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSwitch, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSwitch.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSwitch/VSwitch.tsx

## Props

- flat: Display component without elevation. Default elevation for thumb is 4dp, `flat` resets it.
- indeterminate: Sets an indeterminate state for the switch.
- inset: Enlarge the `v-switch` track to encompass the thumb.
- loading: Displays circular progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it's supported by the component) or the primary color.
- multiple: Changes expected model to an array.

## Events

- update:indeterminate: Event that is emitted when the component's indeterminate state changes.

## Slots

- thumb: Slot for custom thumb content.
- track-true: Slot for custom track content when value is true.
- track-false: Slot for custom track content when value is false.

## Source-derived Keys

- Props: indeterminate, inset, flat, loading
- Events: update:focused, update:modelValue, update:indeterminate

## Source Snippets

### propsFactory

```tsx
{
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: false,
  },

  ...makeVInputProps(),
  ...makeVSelectionControlProps(),
}
```

### emits

```tsx
{
    'update:focused': (focused: boolean) => true,
    'update:modelValue': (value: any) => true,
    'update:indeterminate': (value: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
