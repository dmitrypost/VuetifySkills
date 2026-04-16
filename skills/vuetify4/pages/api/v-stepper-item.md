---
title: "VStepperItem"
nav_title: "VStepperItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-stepper-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VStepperItem

Source: https://vuetifyjs.com/en/api/v-stepper-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VStepperItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VStepperItem.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VStepper/VStepperItem.tsx

## Props


## Events


## Slots

- icon: Slot for customizing all stepper item icons.

## Source-derived Keys

- Props: color, title, subtitle, complete, completeIcon, editable, editIcon, error, errorIcon, icon, ripple, rules
- Events: group:selected

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: IconValue,
    default: '$complete',
  },
  editable: Boolean,
  editIcon: {
    type: IconValue,
    default: '$edit',
  },
  error: Boolean,
  errorIcon: {
    type: IconValue,
    default: '$error',
  },
  icon: IconValue,
  ripple: {
    type: [Boolean, Object] as PropType<RippleDirectiveBinding['value']>,
    default: true,
  },
  rules: {
    type: Array as PropType<readonly ValidationRule[]>,
    default: () => ([]),
  },
}
```

### emits

```tsx
{
    'group:selected': (val: { value: boolean }) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
