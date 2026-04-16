---
title: "VBtnToggle"
nav_title: "VBtnToggle"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-btn-toggle"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VBtnToggle

Source: https://vuetifyjs.com/en/api/v-btn-toggle

## Agent Use

Use this page when you need the Vuetify 4 API contract for VBtnToggle, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VBtnToggle.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBtnToggle/VBtnToggle.tsx

## Props

- rounded: Round edge buttons.
- tile: Removes the component's border-radius.

## Exposed

- next: Activates the next button.
- prev: Activates the previous button.
- select: Selects a button by index, the second parameter is a boolean to indicate if the button should be selected or not.

## Source-derived Keys

- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  ...makeVBtnGroupProps(),
  ...makeGroupProps(),
}
```

### emits

```tsx
{
    'update:modelValue': (value: any) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
