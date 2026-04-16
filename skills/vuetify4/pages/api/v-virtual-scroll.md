---
title: "VVirtualScroll"
nav_title: "VVirtualScroll"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-virtual-scroll"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VVirtualScroll

Source: https://vuetifyjs.com/en/api/v-virtual-scroll

## Agent Use

Use this page when you need the Vuetify 4 API contract for VVirtualScroll, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VVirtualScroll.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VVirtualScroll/VVirtualScroll.tsx

## Props

- height: Height of the component as a css value/
- itemKey: Should point to a property with a unique value for each item, if not set then item index will be used as a key which may result in unnecessary re-renders.
- items: The array of items to display.
- renderless: Disables default component rendering functionality. The parent node must be [a positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position#types_of_positioning), e.g. using `position: relative;`

## Slots

- default: Default slot to render a single item.

## Exposed

- calculateVisibleItems: Trigger updating the currently rendered items based on scroll position.

## Source-derived Keys

- Props: items, renderless

## Source Snippets

### propsFactory

```tsx
{
  items: {
    type: Array as PropType<readonly unknown[]>,
    default: () => ([]),
  },
  renderless: Boolean,

  ...makeVirtualProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
