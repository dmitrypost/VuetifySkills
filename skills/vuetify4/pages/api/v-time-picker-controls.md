---
title: "VTimePickerControls"
nav_title: "VTimePickerControls"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-time-picker-controls"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTimePickerControls

Source: https://vuetifyjs.com/en/api/v-time-picker-controls

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTimePickerControls, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTimePickerControls.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTimePicker/VTimePickerControls.tsx

## Props

- ampm: Enables AM/PM mode.
- hour: The current hour value.
- minute: The current minute value.
- second: The current second value.
- period: The current period value. either `am` or `pm`.
- readonly: Makes the timepicker readonly.
- useSeconds: Enables the display and selection of seconds in the timepicker.
- value: The current value of the timepicker.
- inputHints: Displays labels below the time input controls.
- viewMode: The current view mode of the timepicker. Can be either `hour`, `minute`, or `second`.

## Events

- update:period: Emitted when the period is changed. The event payload is either `am` or `pm`.
- update:hour: Emitted when the hour value changes.
- update:minute: Emitted when the minute value changes.
- update:second: Emitted when the second value changes.
- update:viewMode: Emitted when the view mode is changed. The event payload is either `hour`, `minute`, or `second`.

## Source-derived Keys

- Props: ampm, color, disabled, inputHints, hour, minute, second, period, readonly, useSeconds, value, viewMode
- Events: update:period, update:viewMode, update:hour, update:minute, update:second

## Source Snippets

### propsFactory

```tsx
{
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  inputHints: Boolean,
  hour: [Number, String] as PropType<number | string | null>,
  minute: [Number, String] as PropType<number | string | null>,
  second: [Number, String] as PropType<number | string | null>,
  period: String as PropType<Period>,
  readonly: Boolean,
  useSeconds: Boolean,
  value: Number,
  viewMode: String as PropType<VTimePickerViewMode>,
  ...makeTimeValidationProps(),
}
```

### emits

```tsx
{
    'update:period': (data: Period) => true,
    'update:viewMode': (data: VTimePickerViewMode) => true,
    'update:hour': (v: number) => true,
    'update:minute': (v: number) => true,
    'update:second': (v: number) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
