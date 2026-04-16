---
title: "VDatePickerControls"
nav_title: "VDatePickerControls"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-date-picker-controls"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDatePickerControls

Source: https://vuetifyjs.com/en/api/v-date-picker-controls

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDatePickerControls, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDatePickerControls.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDatePicker/VDatePickerControls.tsx

## Props

- controlHeight: Sets the height of the controls.
- controlVariant: - **docked:** Separate control groups for month and year.
- **modal:** Month and year are displayed together, clicking the text opens a month picker, clicking the dropdown arrow opens a year picker. There are also arrow buttons to scroll between months.
- modeIcon: Icon used for the mode button.
- nextIcon: Icon used for the next button.
- noMonthPicker: Only applies to `controlVariant="modal"`, the month and year picker buttons are combined into one that only opens the year picker.
- prevIcon: Icon used for the previous button.
- monthText: Text displayed for the current month.
- yearText: Text displayed for the current year.
- viewMode: Sets the view mode of the date picker.

## Events

- click:month: Event fired when clicking on the month.
- click:next: Event fired when clicking the next button.
- click:prev: Event fired when clicking the previous button.
- click:year: Event fired when clicking the date text.
- click:prev-year: Event fired when clicking the previous year button.
- click:next-year: Event fired when clicking the next year button.

## Source-derived Keys

- Props: active, controlHeight, controlVariant, noMonthPicker, disabled, nextIcon, prevIcon, modeIcon, text, monthText, yearText, viewMode
- Events: click:year, click:month, click:prev, click:next, click:prev-year, click:next-year

## Source Snippets

### propsFactory

```tsx
{
  active: {
    type: [String, Array] as PropType<string | string[]>,
    default: undefined,
  },
  controlHeight: [Number, String],
  controlVariant: {
    type: String as PropType<ControlVariant>,
    default: 'docked',
  },
  noMonthPicker: Boolean,
  disabled: {
    type: [Boolean, String, Array] as PropType<boolean | string | string[] | null>,
    default: null,
  },
  nextIcon: {
    type: IconValue,
    default: '$next',
  },
  prevIcon: {
    type: IconValue,
    default: '$prev',
  },
  modeIcon: {
    type: IconValue,
    default: '$subgroup',
  },
  text: String,
  monthText: String,
  yearText: String,
  viewMode: {
    type: String as PropType<'month' | 'months' | 'year'>,
    default: 'month',
  },
}
```

### emits

```tsx
{
    'click:year': () => true,
    'click:month': () => true,
    'click:prev': () => true,
    'click:next': () => true,
    'click:prev-year': () => true,
    'click:next-year': () => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
