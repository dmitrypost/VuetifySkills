---
title: "VDatePickerMonths"
nav_title: "VDatePickerMonths"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-date-picker-months"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDatePickerMonths

Source: https://vuetifyjs.com/en/api/v-date-picker-months

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDatePickerMonths, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDatePickerMonths.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDatePicker/VDatePickerMonths.tsx

## Props

- min: Sets the minimum selectable date. Months before this date will be disabled.
- max: Sets the maximum selectable date. Months after this date will be disabled.
- year: Sets the year for the given months.
- allowedMonths: Restricts which months can be selected.

## Slots

- month: Slot for the month.

## Source-derived Keys

- Props: color, height, min, max, modelValue, year, allowedMonths
- Events: update:modelValue
- Slots: month

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  height: [String, Number],
  min: null as any as PropType<unknown>,
  max: null as any as PropType<unknown>,
  modelValue: Number,
  year: Number,
  allowedMonths: [Array, Function] as PropType<number[] | ((date: number) => boolean)>,
}
```

### slots

```tsx
{
  month: {
    month: {
      text: string
      value: number
    }
    i: number
    props: {
      onClick: () => void
    }
  }
}
```

### emits

```tsx
{
    'update:modelValue': (date: any) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
