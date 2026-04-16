---
title: "VCheckbox"
nav_title: "VCheckbox"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-checkbox"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VCheckbox

Source: https://vuetifyjs.com/en/api/v-checkbox

## Agent Use

Use this page when you need the Vuetify 4 API contract for VCheckbox, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VCheckbox.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VCheckbox/VCheckbox.tsx

## Props

- falseIcon: The icon used when inactive.
- indeterminate: Sets an indeterminate state for the checkbox.
- indeterminateIcon: The icon used when in an indeterminate state.
- multiple: Changes expected model to an array.
- trueIcon: The icon used when active.

## Source-derived Keys

- Events: update:modelValue, update:focused

## Source Snippets

### propsFactory

```tsx
{
  ...omit(makeVInputProps(), ['direction']),
  ...omit(makeVCheckboxBtnProps(), ['inline']),
}
```

### emits

```tsx
{
    'update:modelValue': (value: any) => true,
    'update:focused': (focused: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
