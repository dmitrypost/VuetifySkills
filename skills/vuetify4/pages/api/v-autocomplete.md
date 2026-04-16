---
title: "VAutocomplete"
nav_title: "VAutocomplete"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-autocomplete"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VAutocomplete

Source: https://vuetifyjs.com/en/api/v-autocomplete

## Agent Use

Use this page when you need the Vuetify 4 API contract for VAutocomplete, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VAutocomplete.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VAutocomplete/VAutocomplete.tsx

## Props

- autoSelectFirst: When searching, will always highlight the first option and select it on blur. `exact` will only highlight and select exact matches.
- clearOnSelect: Reset the search text when a selection is made while using the **multiple** prop.
- itemChildren: This property currently has **no effect**.
- items: Can be an array of objects or strings. By default objects should have **title** and **value** properties, and can optionally have a **props** property containing any [VListItem props](/api/v-list-item/#props). Keys to use for these can be changed with the **item-title**, **item-value**, and **item-props** props.
- noFilter: Do not apply filtering when searching. Useful when data is being filtered server side.

## Slots

- item: Define a custom item appearance. The root element of this slot must be a **v-list-item** with `v-bind="props"` applied. `props` includes everything required for the default select list behaviour - including title, value, click handlers, virtual scrolling, and anything else that has been added with `item-props`.

## Source-derived Keys

- Props: autoSelectFirst, clearOnSelect, search
- Events: update:focused, update:search, update:modelValue, update:menu

## Source Snippets

### propsFactory

```tsx
{
  autoSelectFirst: {
    type: [Boolean, String] as PropType<boolean | 'exact'>,
  },
  clearOnSelect: Boolean,
  search: String,

  ...makeFilterProps({ filterKeys: ['title'] }),
  ...makeSelectProps(),
  ...omit(makeVTextFieldProps({
    modelValue: null,
    role: 'combobox',
  }), ['validationValue', 'dirty']),
}
```

### emits

```tsx
{
    'update:focused': (focused: boolean) => true,
    'update:search': (value: any) => true,
    'update:modelValue': (value: any) => true,
    'update:menu': (value: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
