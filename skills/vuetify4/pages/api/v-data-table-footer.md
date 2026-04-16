---
title: "VDataTableFooter"
nav_title: "VDataTableFooter"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-data-table-footer"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDataTableFooter

Source: https://vuetifyjs.com/en/api/v-data-table-footer

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDataTableFooter, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDataTableFooter.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDataTable/VDataTableFooter.tsx

## Props

- firstIcon: First icon.
- firstPageLabel: Label for first page.
- itemsPerPageOptions: Array of options to show in the items-per-page dropdown.
- itemsPerPageText: Text for items-per-page dropdown.
- lastIcon: Last icon.
- lastPageLabel: Label for last page.
- nextIcon: Next icon.
- nextPageLabel: Label for next page.
- pageText: Label for page number.
- prevIcon: Previous icon.
- prevPageLabel: Label for previous page.
- showCurrentPage: Show current page number between prev/next icons.

## Slots

- prepend: Extra content placed before the default pagination.

## Source-derived Keys

- Props: color, prevIcon, nextIcon, firstIcon, lastIcon, itemsPerPageText, pageText, firstPageLabel, prevPageLabel, nextPageLabel, lastPageLabel, itemsPerPageOptions, showCurrentPage

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  prevIcon: {
    type: IconValue,
    default: '$prev',
  },
  nextIcon: {
    type: IconValue,
    default: '$next',
  },
  firstIcon: {
    type: IconValue,
    default: '$first',
  },
  lastIcon: {
    type: IconValue,
    default: '$last',
  },
  itemsPerPageText: {
    type: String,
    default: '$vuetify.dataFooter.itemsPerPageText',
  },
  pageText: {
    type: String,
    default: '$vuetify.dataFooter.pageText',
  },
  firstPageLabel: {
    type: String,
    default: '$vuetify.dataFooter.firstPage',
  },
  prevPageLabel: {
    type: String,
    default: '$vuetify.dataFooter.prevPage',
  },
  nextPageLabel: {
    type: String,
    default: '$vuetify.dataFooter.nextPage',
  },
  lastPageLabel: {
    type: String,
    default: '$vuetify.dataFooter.lastPage',
  },
  itemsPerPageOptions: {
    type: Array as PropType<readonly (number | { title: string, value: number })[]>,
    default: () => ([
      { value: 10, title: '10' },
      { value: 25, title: '25' },
      { value: 50, title: '50' },
      { value: 100, title: '100' },
      { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
    ]),
  },
  showCurrentPage: Boolean,
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
