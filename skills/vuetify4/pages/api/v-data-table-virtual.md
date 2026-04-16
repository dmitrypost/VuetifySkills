---
title: "VDataTableVirtual"
nav_title: "VDataTableVirtual"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-data-table-virtual"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDataTableVirtual

Source: https://vuetifyjs.com/en/api/v-data-table-virtual

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDataTableVirtual, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDataTableVirtual.json

## Props

- headerProps: Pass props to the default header.
- itemKey: The property on each item that is used as a unique key.

## Events

- click:row: Emits when a table row is clicked. This event provides 2 arguments: the first is the native click event, and the second is an object containing the corresponding item for that row. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.
- update:expanded: Emits when the **expanded** prop is updated.
- update:groupBy: Emits when the **group-by** prop is updated.
- update:modelValue: Emits when the component's model changes.
- update:options: Emits when pagination related properties (page, itemsPerPage, sortBy, groupBy, search) is updated.
- update:sortBy: Emits when the **sortBy** prop is updated.

## Slots

- [`header.${string}`]: Slot for a specific header. See [`v-data-table-virtual` API](/api/v-data-table-virtual) for more information.
- [`column.${string}`]: Slot for custom rendering of a column.
- [`item.${string}`]: Slot for custom rendering of a row cell.
- header.data-table-expand: Slot for the expand button in the header.
- header.data-table-select: Slot for the select-all checkbox in the header.
- body.append: Slot to add content below the table.
- body.prepend: Slot to add content above the table.
- bottom: Slot to add content below the table.
- colgroup: Slot to replace the default rendering of the `<colgroup>` element.
- data-table-group: Slot for custom rendering of a group.
- data-table-select: Slot for custom rendering of a header cell with the select checkbox.
- expanded-row: Slot for custom rendering of an expanded row.
- group-header: Slot for custom rendering of a group header.
- group-summary: Slot for custom rendering of a group summary.
- headers: Slot to replace the default rendering of the `<thead>` element.
- item: Slot to replace the default rendering of a row.
- item.data-table-expand: Slot to replace the default `v-icon` used when expanding rows.
- item.data-table-select: Slot to replace the default checkbox used when selecting rows.
- loading: Defines content for when `loading` is true and no items are provided.
- tbody: Slot to replace the default table `<tbody>`.
- thead: Slot to replace the default table `<thead>`.
- tfoot: Slot to replace the default table `<tfoot>`.
- top: Slot to add content above the table

## Exposed

- calculateVisibleItems: Trigger updating the currently rendered items based on scroll position.

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
