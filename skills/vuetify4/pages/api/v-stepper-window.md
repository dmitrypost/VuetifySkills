---
title: "VStepperWindow"
nav_title: "VStepperWindow"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-stepper-window"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VStepperWindow

Source: https://vuetifyjs.com/en/api/v-stepper-window

## Agent Use

Use this page when you need the Vuetify 4 API contract for VStepperWindow, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VStepperWindow.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VStepper/VStepperWindow.tsx

## Props


## Source-derived Keys

- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  ...omit(makeVWindowProps(), ['continuous', 'nextIcon', 'prevIcon', 'showArrows', 'touch', 'mandatory']),
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
