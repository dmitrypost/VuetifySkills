---
title: "VDateInput"
nav_title: "VDateInput"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-date-input"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDateInput

Source: https://vuetifyjs.com/en/api/v-date-input

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDateInput, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDateInput.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VDateInput/VDateInput.tsx

## Props

- hideActions: Hide the Cancel and OK buttons, and automatically update the value when a date is selected.
- displayFormat: The format of the date that is displayed in the input. Can use any format [here](/features/dates/#format-options) or a custom function.
- inputFormat: Format for manual date input. Use yyyy, mm, dd with separators '.', '-', '/' (e.g. 'yyyy-mm-dd', 'dd/mm/yyyy').
- location: Specifies the date picker's location. Can combine by using a space separated string.
- updateOn: Specifies when the text input should update the model value. If empty, the text field will go into read-only state.

## Source-derived Keys

- Props: displayFormat, location, menu, menuProps, updateOn, pickerProps
- Events: save, cancel, update:focused, update:modelValue, update:menu

## Source Snippets

### propsFactory

```tsx
{
  displayFormat: {
    type: [Function, String] as PropType<string | ((date: unknown) => any)>,
    default: undefined,
  },
  location: {
    type: String as PropType<StrategyProps['location']>,
    default: 'bottom start',
  },
  menu: Boolean,
  menuProps: Object as PropType<VMenu['$props']>,
  updateOn: {
    type: Array as PropType<('blur' | 'enter')[]>,
    default: () => ['blur', 'enter'],
  },
  pickerProps: Object as PropType<VDatePicker['$props']>,

  ...makeDateFormatProps(),
  ...makeDisplayProps({
    mobile: null,
  }),
  ...makeFocusProps(),
  ...makeVConfirmEditProps({
    hideActions: true,
  }),
  ...makeVTextFieldProps({
    prependIcon: '$calendar',
  }),
  ...omit(makeVDatePickerProps({
    hideHeader: true,
    showAdjacentMonths: true,
  }), [
    'location',
    'rounded',
    'height',
    'minHeight',
    'maxHeight',
  ]),
}
```

### emits

```tsx
{
    save: (value: unknown) => true,
    cancel: () => true,
    'update:focused': (val: boolean) => true,
    'update:modelValue': (val: unknown) => true,
    'update:menu': (val: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
