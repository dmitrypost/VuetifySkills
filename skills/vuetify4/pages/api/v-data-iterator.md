---
title: "VDataIterator"
nav_title: "VDataIterator"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-data-iterator"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDataIterator

Source: https://vuetifyjs.com/en/api/v-data-iterator

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDataIterator, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDataIterator.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataIterator/VDataIterator.tsx

## Props

- customFilter: Function to filter items.
- expanded: Array of expanded items. Can be bound to external variable using **v-model:expanded**.
- groupBy: Configures attributes (and sort order) to group items together.
- initialSortOrder: Specifies the initial sort order when an **toggleSort** is called for unsorted property.
- itemsPerPage: Changes how many items per page should be visible. Can be bound to external variable using **v-model:itemsPerPage**.. Setting this prop to `-1` will display all items on the page.
- itemsLength: The total number of items. Useful when using server-side pagination to correctly compute page counts.
- loading: If `true` and no items are provided, then a loading text will be shown.
- search: Text input used to filter items.

## Events

- update:currentItems: Emits with the items currently being displayed.
- update:expanded: Emits when the **expanded** items are updated.
- update:groupBy: Emits when the **group-by** prop is updated.
- update:itemsPerPage: Emits when the **items-per-page** prop is updated.
- update:options: Emits when pagination related properties (page, itemsPerPage, sortBy, groupBy, search) is updated.
- update:page: Emits when the **page** prop is updated.
- update:sortBy: Emits when the **sortBy** prop is updated.

## Slots

- default: The default slot. Use this to render your items.
- footer: Defines a footer below the items.
- header: Defines a header above the items.
- no-data: Defines content for when no items are provided.

## Source-derived Keys

- Props: search, loading, itemsLength
- Events: update:modelValue, update:groupBy, update:page, update:itemsPerPage, update:sortBy, update:options, update:expanded, update:currentItems

## Source Snippets

### propsFactory

```tsx
{
  search: String,
  loading: Boolean,
  itemsLength: [Number, String],

  ...makeComponentProps(),
  ...makeDataIteratorItemsProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...makeDataTablePaginateProps({ itemsPerPage: 5 }),
  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeFilterProps(),
  ...makeTagProps(),
  ...makeTransitionProps({
    transition: {
      component: VFadeTransition as Component,
      hideOnLeave: true,
    },
  }),
}
```

### emits

```tsx
{
    'update:modelValue': (value: any[]) => true,
    'update:groupBy': (value: any) => true,
    'update:page': (value: number) => true,
    'update:itemsPerPage': (value: number) => true,
    'update:sortBy': (value: any) => true,
    'update:options': (value: any) => true,
    'update:expanded': (value: any) => true,
    'update:currentItems': (value: any) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
