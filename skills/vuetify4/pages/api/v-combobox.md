---
title: "VCombobox"
nav_title: "VCombobox"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-combobox"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VCombobox

Source: https://vuetifyjs.com/en/api/v-combobox

## Agent Use

Use this page when you need the Vuetify 4 API contract for VCombobox, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VCombobox.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VCombobox/VCombobox.tsx

## Props

- alwaysFilter: When enabled, dropdown list will always show items matching non-empty value within the field. Recommended when the list is meant to show suggestions rather than options to choose from. For optimal UX, should be combined with `:menu-icon="false"` and `hide-selected`.
- autoSelectFirst: When searching, will always highlight the first option and select it on blur. `exact` will only highlight and select exact matches.
- clearOnSelect: Reset the search text when a selection is made while using the **multiple** prop.
- itemChildren: This property currently has **no effect**.
- delimiters: Accepts an array of strings that will trigger a new tag when typing. Does not replace the normal Tab and Enter keys.
- items: Can be an array of objects or strings. By default objects should have **title** and **value** properties, and can optionally have a **props** property containing any [VListItem props](/api/v-list-item/#props). Keys to use for these can be changed with the **item-title**, **item-value**, and **item-props** props.

## Slots

- item: Define a custom item appearance. The root element of this slot must be a **v-list-item** with `v-bind="props"` applied. `props` includes everything required for the default select list behaviour - including title, value, click handlers, virtual scrolling, and anything else that has been added with `item-props`.

## Exposed

- selectionIndex: The index of the currently selected item.

## Source-derived Keys

- Props: alwaysFilter, autoSelectFirst, clearOnSelect, delimiters
- Events: update:focused, update:modelValue, update:search, update:menu

## Source Snippets

### propsFactory

```tsx
{
  alwaysFilter: Boolean,
  autoSelectFirst: {
    type: [Boolean, String] as PropType<boolean | 'exact'>,
  },
  clearOnSelect: {
    type: Boolean,
    default: true,
  },
  delimiters: Array as PropType<readonly string[]>,

  ...makeFilterProps({ filterKeys: ['title'] }),
  ...makeSelectProps({ hideNoData: true, returnObject: true }),
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
    'update:modelValue': (value: any) => true,
    'update:search': (value: string) => true,
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
