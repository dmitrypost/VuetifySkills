---
title: "VTreeview"
nav_title: "VTreeview"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-treeview"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTreeview

Source: https://vuetifyjs.com/en/api/v-treeview

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTreeview, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTreeview.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTreeview/VTreeview.tsx

## Props

- activatable: Allows user to mark a node as active by clicking on it.
- color: Applies specified color to the active node - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
- disabled: Disables selection for all nodes.
- expandIcon: Icon used to indicate that a node can be expanded.
- fluid: Removes indentation from nested items.
- hideActions: Hide the expand icon and loading indicator next to each item title.
- indeterminateIcon: Icon used when node is in an indeterminate state. Only visible when `selectable` is `true`.
- itemChildren: Property on supplied `items` that contains its children.
- items: An array of items used to build the treeview.
- loadChildren: A function used when dynamically loading children. If this prop is set, then the supplied function will be run if expanding an item that has a `item-children` property that is an empty array. Supports returning a Promise.
- loadingIcon: Icon used when node is in a loading state.
- modelValue: Allows one to control which nodes are selected. The array contains the values of currently selected items. It is equivalent to the `v-model:selected`
- openAll: When `true` will cause all branch nodes to be opened when component is mounted.
- openOnClick: When `true` will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon. When using this prop with `activatable` you will be unable to mark nodes with children as active.
- returnObject: When `true` will make `v-model`, `v-model:selected, `v-model:activated` and `v-model:opened` return the complete object instead of just the key.
- rounded: Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `shaped` prop.
- search: The search model for filtering results.
- selectable: Will render a checkbox next to each node allowing them to be selected. Additionally, the **[openOnClick](/api/v-treeview/#props-open-on-click)** property will be applied internally.
- selectedColor: The color of the selection checkbox.
- separateRoots: Applies to `default` variant of `indent-lines`. Prevents showing lines between root-level nodes.
- indentLines: Controls visibility and variant of the indent lines.
- indentLinesColor: Sets color of indent lines
- indentLinesOpacity: Sets opacity of indent lines
- collapseIcon: Icon to display when the list item is expanded.

## Events

- click:open: Emits the item when it is clicked to open.
- click:select: Emits the item when it is clicked to select.
- update:activated: Emits the array of active items when this value changes.
- update:opened: Emits the array of open items when this value changes.
- update:selected: Emits the array of selected items when this value changes.

## Slots

- append: Appends content after label.
- prepend: Prepends content before label.
- header: Slot for expandable nodes (all items that are not leafs).
- footer: Slot for footer below expanded children.
- subheader: Slot for custom subheader.
- divider: Slot for custom divider.

## Source-derived Keys

- Props: openAll, indentLines, indentLinesColor, indentLinesOpacity, search, hideNoData, noDataText, modelValue
- Events: update:opened, update:activated, update:selected, update:modelValue, click:open, click:select

## Source Snippets

### propsFactory

```tsx
{
  openAll: Boolean,
  indentLines: [Boolean, String] as PropType<boolean | IndentLinesVariant>,
  indentLinesColor: String,
  indentLinesOpacity: [String, Number],
  search: String,
  hideNoData: Boolean,
  noDataText: {
    type: String,
    default: '$vuetify.noDataText',
  },

  ...makeFilterProps({ filterKeys: ['title'] }),
  ...omit(makeVTreeviewChildrenProps(), [
    'index',
    'path',
    'indentLinesVariant',
    'parentIndentLines',
    'isLastGroup',
  ]),
  ...omit(makeVListProps({
    collapseIcon: '$treeviewCollapse',
    expandIcon: '$treeviewExpand',
    slim: true,
  }), ['nav', 'openStrategy']),

  modelValue: Array,
}
```

### emits

```tsx
{
    'update:opened': (val: unknown) => true,
    'update:activated': (val: unknown) => true,
    'update:selected': (val: unknown) => true,
    'update:modelValue': (val: unknown) => true,
    'click:open': (value: { id: unknown, value: boolean, path: unknown[] }) => true,
    'click:select': (value: { id: unknown, value: boolean, path: unknown[] }) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
