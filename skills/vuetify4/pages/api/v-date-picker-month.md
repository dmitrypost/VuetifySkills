---
title: "VDatePickerMonth"
nav_title: "VDatePickerMonth"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-date-picker-month"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDatePickerMonth

Source: https://vuetifyjs.com/en/api/v-date-picker-month

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDatePickerMonth, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDatePickerMonth.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDatePicker/VDatePickerMonth.tsx

## Props

- allowedDates: Sets the allowed dates of the month.
- hideWeekdays: Hide the days of the week letters.
- max: Sets the maximum date of the month.
- min: Sets the minimum date of the month.
- month: Sets the month.
- year: Sets the year.
- multiple: Sets the multiple of the month.
- readonly: Puts the picker in a readonly state.
- showAdjacentMonths: Show adjacent months.
- showWeek: Show the week number.
- transition: The transition used when changing months into the future
- reverseTransition: The transition used when changing months into the past

## Events

- update:month: Fired when the month changes.
- update:year: Fired when the year changes.

## Slots

- day: Slot for a day in the month.

## Source-derived Keys

- Props: color, hideWeekdays, multiple, showWeek, readonly, transition, reverseTransition, events, eventColor
- Events: update:modelValue, update:month, update:year
- Slots: day

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String] as PropType<boolean | 'range' | number | (string & {})>,
  showWeek: Boolean,
  readonly: Boolean,
  transition: {
    type: String,
    default: 'picker-transition',
  },
  reverseTransition: {
    type: String,
    default: 'picker-reverse-transition',
  },
  events: {
    type: [Array, Function, Object] as PropType<DatePickerEvents | null>,
    default: () => null,
  },
  eventColor: {
    type: [Array, Function, Object, String] as PropType<DatePickerEventColors>,
    default: () => null,
  },
  ...omit(makeCalendarProps(), ['displayValue']),
}
```

### slots

```tsx
{
  day: {
    props: {
      onClick: () => void
    }
    item: any
    i: number
  }
}
```

### emits

```tsx
{
    'update:modelValue': (date: unknown) => true,
    'update:month': (date: number) => true,
    'update:year': (date: number) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
