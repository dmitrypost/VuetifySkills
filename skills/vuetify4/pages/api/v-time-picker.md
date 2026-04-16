---
title: "VTimePicker"
nav_title: "VTimePicker"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-time-picker"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTimePicker

Source: https://vuetifyjs.com/en/api/v-time-picker

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTimePicker, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTimePicker.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTimePicker/VTimePicker.tsx

## Props

- allowedHours: Restricts which hours can be selected.
- allowedMinutes: Restricts which minutes can be selected.
- allowedSeconds: Restricts which seconds can be selected.
- format: Defines the format of a time displayed in picker. Available options are `ampm` and `24hr`.
- max: Maximum allowed time.
- min: Minimum allowed time.
- period: Sets period for 12hr format.
- readonly: Puts picker in readonly state.
- scrollable: Allows changing hour/minute with mouse scroll.
- useSeconds: Toggles the use of seconds in picker.
- width: Width of the picker.
- viewMode: The current view mode of the picker.`

## Events

- update:hour: Emitted when user selects the hour.
- update:minute: Emitted when user selects the minute.
- update:second: Emitted when user selects the second.
- update:period: Emitted when user clicks the AM/PM button.
- update:viewMode: Emitted when the view mode changes.

## Slots

- default: Displayed below the clock, can be used for example for adding action button (`OK` and `Cancel`)

## Source-derived Keys

- Props: disabled, format, viewMode, period, modelValue, readonly, scrollable, useSeconds, variant
- Events: update:hour, update:minute, update:period, update:second, update:modelValue, update:viewMode

## Source Snippets

### propsFactory

```tsx
{
  disabled: Boolean,
  format: {
    type: String as PropType<'ampm' | '24hr'>,
    default: 'ampm',
  },
  viewMode: {
    type: String as PropType<VTimePickerViewMode>,
    default: 'hour',
  },
  period: {
    type: String as PropType<Period>,
    default: 'am',
    validator: (v: any) => ['am', 'pm'].includes(v),
  },
  modelValue: null as any as PropType<any>,
  readonly: Boolean,
  scrollable: Boolean,
  useSeconds: Boolean,
  variant: {
    type: String as PropType<Variant>,
    default: 'dial',
  },
  ...makeTimeValidationProps(),
  ...omit(makeVPickerProps({ title: '$vuetify.timePicker.title' }), ['landscape']),
  ...makeDensityProps(),
}
```

### emits

```tsx
{
    'update:hour': (val: number) => true,
    'update:minute': (val: number) => true,
    'update:period': (val: Period) => true,
    'update:second': (val: number) => true,
    'update:modelValue': (val: string | null) => true,
    'update:viewMode': (val: VTimePickerViewMode) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
