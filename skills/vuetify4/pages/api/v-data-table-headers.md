---
title: "VDataTableHeaders"
nav_title: "VDataTableHeaders"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-data-table-headers"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDataTableHeaders

Source: https://vuetifyjs.com/en/api/v-data-table-headers

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDataTableHeaders, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDataTableHeaders.json

## Props

- color: Applies a color to checkboxes, page size dropdown and sort badges in the table header.
- sortIcon: Icon used for unsorted columns. By default it uses either **sortAscIcon** or **sortDescIcon** depending on **initialSortOrder**, but can be customized to show a neutral icon instead.
- sortAscIcon: Icon used for ascending sort button.
- sortDescIcon: Icon used for descending sort button.
- sticky: Deprecated, use `fixed-header` instead.
- fixedHeader: Sticks the header to the top of the table.
- headerProps: Additional props to be be passed to the default header

## Slots

- [`column.${string}`]: Slot for custom rendering of a column.
- [`header.${string}`]: Slot for custom rendering of a header cell.
- header.data-table-expand: Slot for the expand button in the header.
- header.data-table-select: Slot for the select-all checkbox in the header.
- headers: Slot to replace the default rendering of the `<thead>` element.

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
