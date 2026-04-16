---
title: "VStepper"
nav_title: "VStepper"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-stepper"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VStepper

Source: https://vuetifyjs.com/en/api/v-stepper

## Agent Use

Use this page when you need the Vuetify 4 API contract for VStepper, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VStepper.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VStepper/VStepper.tsx

## Props

- completeIcon: Icon to display when step is marked as completed.
- editIcon: Icon to display when step is editable.
- errorIcon: Icon to display when step has an error.
- flat: Removes the stepper's elevation.

## Exposed

- next: Move to the next step.
- prev: Move to the prev step.

## Source-derived Keys

- Props: altLabels, bgColor, completeIcon, editIcon, editable, errorIcon, hideActions, items, itemTitle, itemValue, itemProps, nonLinear, flat
- Events: update:modelValue
- Slots: actions, default, header, header-item, icon, title, subtitle, item, prev, next

## Source Snippets

### propsFactory

```tsx
{
  altLabels: Boolean,
  bgColor: String,
  completeIcon: IconValue,
  editIcon: IconValue,
  editable: Boolean,
  errorIcon: IconValue,
  hideActions: Boolean,
  items: {
    type: Array as PropType<readonly StepperItem[]>,
    default: () => ([]),
  },
  itemTitle: {
    type: [String, Array, Function] as PropType<SelectItemKey>,
    default: 'title',
  },
  itemValue: {
    type: [String, Array, Function] as PropType<SelectItemKey>,
    default: 'value',
  },
  itemProps: {
    type: [Boolean, String, Array, Function] as PropType<SelectItemKey>,
    default: 'props',
  },
  nonLinear: Boolean,
  flat: Boolean,

  ...makeDisplayProps(),
}
```

### slots

```tsx
{
  actions: VStepperSlot
  default: VStepperSlot
  header: StepperItem
  'header-item': StepperItemSlot
  icon: StepperItemSlot
  title: StepperItemSlot
  subtitle: StepperItemSlot
  item: StepperItem
  prev: never
  next: never
}
```

### emits

```tsx
{
    'update:modelValue': (v: unknown) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
