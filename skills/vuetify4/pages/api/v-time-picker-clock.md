---
title: "VTimePickerClock"
nav_title: "VTimePickerClock"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-time-picker-clock"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTimePickerClock

Source: https://vuetifyjs.com/en/api/v-time-picker-clock

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTimePickerClock, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTimePickerClock.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTimePicker/VTimePickerClock.tsx

## Props

- allowedValues: Restricts which hours can be selected.
- ampm: Displays time in a 12-hour format.
- displayedValue: Used to display a custom value on the clock.
- double: If set, this probably indicates a double rotation or a mode where more than one set of values (like hours and minutes) is displayed on the clock at the same time.
- format: Specifies the format of the displayed time, either 12-hour or 24-hour, depending on the component's setup.
- max: Defines the maximum time value that can be selected.
- min: Defines the minimum time value that can be selected.
- readonly: When true, the picker is in a read-only state, and users cannot modify the selected time.
- rotate: Controls rotation, specifying the degree of rotation for the clock hands.
- scrollable: Allows the time selection to be scrollable, enhancing user experience for devices with scroll inputs.
- step: Defines the increments between selectable times, such as a step of 1 for every minute or a larger step for every 5 or 15 minutes.

## Events

- change: The event that is triggered when the selected time is changed.

## Source-derived Keys

- Props: allowedValues, ampm, color, disabled, displayedValue, double, format, max, min, scrollable, readonly, rotate, step, modelValue
- Events: change, input

## Source Snippets

### propsFactory

```tsx
{
  allowedValues: Function as PropType<(value: number) => boolean>,
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  displayedValue: null,
  double: Boolean,
  format: {
    type: Function,
    default: (val: string | number) => val,
  },
  max: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  scrollable: Boolean,
  readonly: Boolean,
  rotate: {
    type: Number,
    default: 0,
  },
  step: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
  },
}
```

### emits

```tsx
{
    change: (val: number) => true,
    input: (val: number) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
