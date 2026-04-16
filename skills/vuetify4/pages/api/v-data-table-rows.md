---
title: "VDataTableRows"
nav_title: "VDataTableRows"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-data-table-rows"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDataTableRows

Source: https://vuetifyjs.com/en/api/v-data-table-rows

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDataTableRows, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDataTableRows.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/VDataTableRows.tsx

## Props

- cellProps: An object of additional props to be passed to each `<td>` in the table body. Also accepts a function that will be called for each cell. If the same prop is defined both here and in `cellProps` in a headers object, the value from the headers object will be used.
- loading: Displays `loading` slot if set to `true`
- loadingText: Text shown when the data is loading.
- rowProps: An object of additional props to be passed to each `<tr>` in the table body. Also accepts a function that will be called for each row.

## Slots

- [`header.${string}`]: Slot for custom rendering of a header cell.
- header.data-table-expand: Slot to replace the default `v-icon` used when expanding header.
- header.data-table-select: Slot to replace the default `v-checkbox-btn` in header.
- [`item.${string}`]: Slot for custom rendering of a column.
- data-table-group: Slot for custom rendering of a group.
- data-table-select: Slot for custom rendering of a header cell with the select checkbox.
- expanded-row: Slot for custom rendering of an expanded row.
- group-header: Slot for custom rendering of a group header.
- group-summary: Slot for custom rendering of a group summary.
- item.data-table-expand: Slot for custom rendering of a row cell with the expand icon.
- item.data-table-select: Slot for custom rendering of a row cell with the select checkbox.
- loading: Slot for custom rendering of the loading state.

## Source-derived Keys

- Props: color, loading, loadingText, hideNoData, items, noDataText, rowProps, cellProps

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: '$vuetify.dataIterator.loadingText',
  },
  hideNoData: Boolean,
  items: {
    type: Array as PropType<readonly (DataTableItem | Group | GroupSummary)[]>,
    default: () => ([]),
  },
  noDataText: {
    type: String,
    default: '$vuetify.noDataText',
  },
  rowProps: [Object, Function] as PropType<RowProps<any>>,
  cellProps: [Object, Function] as PropType<CellProps<any>>,

  ...pick(makeVDataTableRowProps(), ['collapseIcon', 'expandIcon', 'density']),
  ...pick(makeVDataTableGroupHeaderRowProps(), ['groupCollapseIcon', 'groupExpandIcon', 'density']),
  ...makeDisplayProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
