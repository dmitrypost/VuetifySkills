---
title: "VTreeviewItem"
nav_title: "VTreeviewItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-treeview-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTreeviewItem

Source: https://vuetifyjs.com/en/api/v-treeview-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTreeviewItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTreeviewItem.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTreeview/VTreeviewItem.tsx

## Props

- hideActions: Hide the expand icon and loading indicator next to each item title.
- indentLines: Array of indent lines to render next to the item.
- loading: Places the v-treeview-item into a loading state.
- nav: Reduces the width of v-list-item takes and adds a border radius.
- slim: Reduces the vertical padding or height of the v-treeview-item, making it more compact.
- index: The index of the item within the treeview list.
- toggleIcon: Allows customization of the icon used to toggle the expansion and collapse of treeview branches.

## Events

- toggleExpand: Emitted when the item is toggled to expand or collapse.

## Slots

- toggle: Slot for custom expand icon and loading indicator.

## Source-derived Keys

- Props: loading, hideActions, hasCustomPrepend, indentLines, toggleIcon
- Events: toggleExpand

## Source Snippets

### propsFactory

```tsx
{
  loading: Boolean,
  hideActions: Boolean,
  hasCustomPrepend: Boolean,
  indentLines: Array as PropType<IndentLineType[]>,
  toggleIcon: IconValue,

  ...makeVListItemProps({ slim: true }),
}
```

### emits

```tsx
{
    toggleExpand: (value: PointerEvent) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
