---
title: "VStepperVertical"
nav_title: "VStepperVertical"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-stepper-vertical"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VStepperVertical

Source: https://vuetifyjs.com/en/api/v-stepper-vertical

## Agent Use

Use this page when you need the Vuetify 4 API contract for VStepperVertical, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VStepperVertical.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VStepperVertical/VStepperVertical.tsx

## Props

- completeIcon: Icon to display when step is marked as completed.
- editIcon: Icon to display when step is editable.
- errorIcon: Icon to display when step has an error.

## Source-derived Keys

- Props: prevText, nextText
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  prevText: {
    type: String,
    default: '$vuetify.stepper.prev',
  },
  nextText: {
    type: String,
    default: '$vuetify.stepper.next',
  },

  ...makeStepperProps(),
  ...omit(makeVExpansionPanelsProps({
    mandatory: 'force' as const,
    variant: 'accordion' as const,
  }), ['static']),
}
```

### emits

```tsx
{
    'update:modelValue': (val: any) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
