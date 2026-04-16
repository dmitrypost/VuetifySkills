---
title: "VSelect"
nav_title: "VSelect"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-select"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSelect

Source: https://vuetifyjs.com/en/api/v-select

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSelect, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSelect.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSelect/VSelect.tsx

## Props

- chips: Changes display of selections to chips.
- closableChips: Enables the [closable](/api/v-chip/#props-closable) prop on all [v-chip](/components/chips/) components.
- hideSelected: Do not display in the select menu items that are already selected.
- itemColor: Sets color of selected items.
- itemChildren: This property currently has **no effect**.
- items: Can be an array of objects or strings. By default objects should have **title** and **value** properties, and can optionally have a **props** property containing any [VListItem props](/api/v-list-item/#props). Keys to use for these can be changed with the **item-title**, **item-value**, and **item-props** props.
- itemValue: Set property of **items**'s value - **must be primitive**. Dot notation is supported. **Note:** This is currently not supported with `v-combobox` [GitHub Issue](https://github.com/vuetifyjs/vuetify/issues/5479).
- minWidth: Sets the minimum width of the select's `v-menu` content.
- multiple: Changes select to multiple. Accepts array for value.
- openOnClear: When using the **clearable** prop, once cleared, the select menu will either open or stay open, depending on the current state.

## Slots

- item: Define a custom item appearance. The root element of this slot must be a **v-list-item** with `v-bind="props"` applied. `props` includes everything required for the default select list behaviour - including title, value, click handlers, virtual scrolling, and anything else that has been added with [`item-props`](api/v-select/#props-item-props).

## Source-derived Keys

- Props: chips, closableChips, eager, hideNoData, hideSelected, listProps, menu, menuElevation, menuIcon, menuProps, multiple, noDataText, openOnClear, itemColor, noAutoScroll
- Events: update:focused, update:modelValue, update:menu, update:search

## Source Snippets

### propsFactory

```tsx
{
  chips: Boolean,
  closableChips: Boolean,
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object as PropType<VList['$props']>,
  },
  menu: Boolean,
  menuElevation: [Number, String],
  menuIcon: {
    type: IconValue,
    default: '$dropdown',
  },
  menuProps: {
    type: Object as PropType<VMenu['$props']>,
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: '$vuetify.noDataText',
  },
  openOnClear: Boolean,
  itemColor: String,
  noAutoScroll: Boolean,

  ...makeMenuActivatorProps(),
  ...makeItemsProps({ itemChildren: false }),
}
```

### emits

```tsx
{
    'update:focused': (focused: boolean) => true,
    'update:modelValue': (value: any) => true,
    'update:menu': (ue: boolean) => true,
    'update:search': (value: string) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
