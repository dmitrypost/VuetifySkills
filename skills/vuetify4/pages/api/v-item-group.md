---
title: "VItemGroup"
nav_title: "VItemGroup"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-item-group"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VItemGroup

Source: https://vuetifyjs.com/en/api/v-item-group

## Agent Use

Use this page when you need the Vuetify 4 API contract for VItemGroup, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VItemGroup.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VItemGroup/VItemGroup.tsx

## Props

- selectedClass: Configure the selected CSS class. This class will be available in `v-item` default scoped slot.

## Source-derived Keys

- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  ...makeComponentProps(),
  ...makeGroupProps({
    selectedClass: 'v-item--selected',
  }),
  ...makeTagProps(),
  ...makeThemeProps(),
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
