---
title: "VDatePickerYears"
nav_title: "VDatePickerYears"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-date-picker-years"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDatePickerYears

Source: https://vuetifyjs.com/en/api/v-date-picker-years

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDatePickerYears, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDatePickerYears.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDatePicker/VDatePickerYears.tsx

## Props

- max: Sets the maximum date of the month.
- min: Sets the minimum date of the month.
- allowedYears: Restricts which years can be selected.

## Slots

- year: Slot for the year.

## Source-derived Keys

- Props: color, height, min, max, modelValue, allowedYears
- Events: update:modelValue
- Slots: year

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  height: [String, Number],
  min: null as any as PropType<unknown>,
  max: null as any as PropType<unknown>,
  modelValue: Number,
  allowedYears: [Array, Function] as PropType<number[] | ((date: number) => boolean)>,
}
```

### slots

```tsx
{
  year: {
    year: {
      text: string
      value: number
    }
    i: number
    props: {
      active: boolean
      color?: string
      rounded: boolean
      text: string
      variant: 'flat' | 'text'
      onClick: () => void
    }
  }
}
```

### emits

```tsx
{
    'update:modelValue': (year: number) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
