---
title: "VDataTable"
nav_title: "VDataTable"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-data-table"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDataTable

Source: https://vuetifyjs.com/en/api/v-data-table

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDataTable, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDataTable.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/VDataTable.tsx

## Props

- collapseIcon: Icon to display when the expandable row is expanded.
- customFilter: Function to filter items.
- density: Adjusts the vertical height of the table rows.
- expandIcon: Icon to display when the expandable row is collapsed.
- fixedHeader: Fixed header to top of table.
- groupBy: Configures attributes (and sort order) to group items together. Can be customized further with `group-header` and `group-summary` slots.
- groupCollapseIcon: Icon to display when the row group is expanded.
- groupExpandIcon: Icon to display when the row group is collapsed.
- headerProps: Pass props to the default header. See [`v-data-table-headers` API](/api/v-data-table-headers) for more information.
- headers: An array of objects that each describe a header column.
- height: Set an explicit height of table.
- hover: Adds a hover effects to a table rows.
- itemsPerPage: Changes how many items per page should be visible. Can be bound to external variable using **v-model:itemsPerPage**.. Setting this prop to `-1` will display all items on the page.
- page: The current displayed page number (1-indexed).
- showSelect: Shows the select checkboxes in both the header and rows (if using default rows).
- showExpand: Shows the expand toggle in default rows.
- sortBy: Changes which item property (or properties) should be used for sort order. Can be bound to external variable using **v-model:sortBy**..

## Events

- click:row: Emits when a table row is clicked. This event provides 2 arguments: the first is the native click event, and the second is an object containing the corresponding item for that row. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.
- contextmenu:row: Emits when a table row is right-clicked. The item for the row is included. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.
- dblclick:row: Emits when a table row is double-clicked. The item for the row is included. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.
- update:currentItems: Emits with the items currently being displayed.
- update:groupBy: Emits when the **group-by** prop is updated.
- update:itemsPerPage: Emits when the **items-per-page** prop is updated.
- update:modelValue: Emits when the component's model changes.
- update:options: Emits when pagination related properties (page, itemsPerPage, sortBy, groupBy, search) is updated.
- update:page: Emits when the **page** prop is updated.
- update:sortBy: Emits when the **sortBy** prop is updated.

## Slots

- [`header.${string}`]: Slot for custom rendering of a header cell.
- [`item.${string}`]: Slot for custom rendering of a row cell.
- header.data-table-expand: Slot to replace the default `v-icon` used when expanding header.
- body: Slot to replace the default table `<tbody>`.
- body.append: Appends elements to the end of the default table `<tbody>`.
- body.prepend: Prepends elements to the start of the default table `<tbody>`.
- bottom: Slot for custom rendering of a data table footer.
- colgroup: Slot to replace the default rendering of the `<colgroup>` element.
- footer.prepend: Adds content to the empty space in the footer.
- group-header: Slot for custom rendering of a group header.
- group-summary: Slot for custom rendering of a group summary.
- header.<name>: Slot to customize a specific header column.
- header.data-table-select: Slot to replace the default `v-checkbox-btn` in header.
- headers: An array of objects that each describe a header column.
- item: Slot to replace the default rendering of a row.
- item.data-table-select: Slot to replace the default `v-checkbox-btn` used when selecting rows.
- item.data-table-expand: Slot to replace the default `v-icon` used when expanding rows.
- item.<name>: Slot to customize a specific column.
- loading: Defines content for when `loading` is true and no items are provided.
- tbody: Slot to replace the default table `<tbody>`.
- thead: Slot to replace the default table `<thead>`.
- tfoot: Slot to replace the default table `<tfoot>`.
- no-data: Defines content for when no items are provided.
- top: Slot to add content above the table.

## Source-derived Keys

- Props: hideDefaultBody, hideDefaultFooter, hideDefaultHeader, width, search
- Events: update:modelValue, update:page, update:itemsPerPage, update:sortBy, update:options, update:groupBy, update:expanded, update:currentItems

## Source Snippets

### propsFactory

```tsx
{
  ...makeVDataTableRowsProps(),

  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,

  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeDataTableHeaderProps(),
  ...makeDataTableItemsProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...omit(makeVDataTableHeadersProps(), ['multiSort', 'initialSortOrder']),
  ...makeVTableProps(),
}
```

### emits

```tsx
{
    'update:modelValue': (value: any[]) => true,
    'update:page': (value: number) => true,
    'update:itemsPerPage': (value: number) => true,
    'update:sortBy': (value: any) => true,
    'update:options': (value: any) => true,
    'update:groupBy': (value: any) => true,
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
