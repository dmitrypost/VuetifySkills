---
title: "VDataTableRow"
nav_title: "VDataTableRow"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-data-table-row"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDataTableRow

Source: https://vuetifyjs.com/en/api/v-data-table-row

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDataTableRow, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDataTableRow.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/VDataTableRow.tsx

## Props

- cellProps: Props to be applied to the cell.
- collapseIcon: Icon to display when the expandable row is expanded.
- expandIcon: Icon to display when the expandable row is collapsed.
- index: Row index.
- item: Data (key, index and column values) of the displayed item.

## Events

- contextmenu: The event emitted when the user clicks the context menu button.
- dblclick: The event emitted when the user double clicks the row.
- [`item.${string}`]: The event emitted when the user clicks the item.

## Slots

- [`header.${string}`]: Slot for custom rendering of a header cell.
- [`item.${string}`]: Slot for custom rendering of a row cell.
- header.data-table-expand: Slot to replace the default `v-icon` used when expanding header.
- header.data-table-select: Slot to replace the default `v-checkbox-btn` in header.
- item.data-table-expand: Slot for the expand button in the row.
- item.data-table-select: Slot for the select checkbox in the row.

## Source-derived Keys

- Props: color, index, item, cellProps, collapseIcon, expandIcon, onClick, onContextmenu, onDblclick

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  index: Number,
  item: Object as PropType<DataTableItem>,
  cellProps: [Object, Function] as PropType<CellProps<any>>,
  collapseIcon: {
    type: IconValue,
    default: '$collapse',
  },
  expandIcon: {
    type: IconValue,
    default: '$expand',
  },

  onClick: EventProp<[MouseEvent]>(),
  onContextmenu: EventProp<[MouseEvent]>(),
  onDblclick: EventProp<[MouseEvent]>(),

  ...makeDensityProps(),
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
