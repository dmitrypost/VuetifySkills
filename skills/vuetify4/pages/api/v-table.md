---
title: "VTable"
nav_title: "VTable"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-table"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTable

Source: https://vuetifyjs.com/en/api/v-table

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTable, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTable.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTable/VTable.tsx

## Props

- fixedFooter: Use the fixed-footer prop together with the height prop to fix the footer to the bottom of the table.
- fixedHeader: Use the fixed-header prop together with the height prop to fix the header to the top of the table.
- height: Use the height prop to set the height of the table.
- hover: Will add a hover effect to a table's row when the mouse is over it.
- striped: Applies a background to either **even** or **odd** rows.

## Slots

- bottom: Slot to add content below the table.
- top: Slot to add content above the table.
- wrapper: Slots for custom rendering of the table wrapper.

## Source-derived Keys

- Props: fixedHeader, fixedFooter, height, hover, striped
- Slots: default, top, bottom, wrapper

## Source Snippets

### propsFactory

```tsx
{
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  striped: {
    type: String as PropType<Striped>,
    default: null,
    validator: (v: any) => ['even', 'odd'].includes(v),
  },

  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
}
```

### slots

```tsx
{
  default: never
  top: never
  bottom: never
  wrapper: never
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
