---
title: "VCommandPaletteItem"
nav_title: "VCommandPaletteItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-command-palette-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VCommandPaletteItem

Source: https://vuetifyjs.com/en/api/v-command-palette-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VCommandPaletteItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VCommandPaletteItem.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VCommandPalette/VCommandPaletteItem.tsx

## Props

- item: The command palette item data object.
- index: The index of the item within the command palette list.

## Source-derived Keys

- Props: item, index, onExecute
- Slots: prepend, title, append

## Source Snippets

### propsFactory

```tsx
{
  item: {
    type: Object as PropType<VCommandPaletteActionItem>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  onExecute: Function as PropType<(event: MouseEvent | KeyboardEvent) => void>,
}
```

### slots

```tsx
{
  prepend: never
  title: never
  append: never
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
