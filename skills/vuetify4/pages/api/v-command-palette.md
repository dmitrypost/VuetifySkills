---
title: "VCommandPalette"
nav_title: "VCommandPalette"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-command-palette"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VCommandPalette

Source: https://vuetifyjs.com/en/api/v-command-palette

## Agent Use

Use this page when you need the Vuetify 4 API contract for VCommandPalette, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VCommandPalette.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VCommandPalette/VCommandPalette.tsx

## Props

- closeOnSelect: Controls whether the palette closes automatically after selecting an actionable item. Set to **false** to keep it open for external drill-in and nested navigation flows.
- hotkey: Global keyboard shortcut to toggle the palette. Accepts hotkey strings like `'ctrl+shift+p'` or `'meta+j'`. The shortcut is automatically registered on mount and cleaned up on unmount.
- inputIcon: Icon to display at the start of the search input field.
- items: Array of command palette items. Objects should have **title** and optionally **subtitle**, **prependIcon**, **appendIcon**, **prependAvatar**, **appendAvatar**, **hotkey**, **onClick**, **to**, **href**, and **value** properties. Use `type: 'subheader'` with a **title** for section headers, or `type: 'divider'` for visual separators between groups.
- listProps: Pass props through to the `v-list` component. Accepts an object with anything from [v-list](/api/v-list/#props) props, camelCase keys are recommended.
- modelValue: Controls the visibility of the command palette dialog. Use `v-model` for two-way binding.
- noDataText: Text displayed when no items match the current search query.
- placeholder: Placeholder text displayed in the search input.
- search: The current search query. Use `v-model:search` to control or monitor the search input value.

## Events

- before-select: Emitted before the default auto-close behavior for actionable item selection. The payload includes the selected item, the triggering event, and a **preventDefault** callback. Call **preventDefault()** to keep the palette open.
- click:item: Emitted when an item is clicked or activated via Enter key. The payload includes the selected item object and the triggering event (MouseEvent or KeyboardEvent).
- update:modelValue: Emitted when the dialog visibility changes.
- update:search: Emitted when the search query changes.

## Slots

- prepend: Content to render above the search input, inside the command palette card. Useful for headers, breadcrumbs, or instructions.
- input: Custom search input field. Replaces the default **v-text-field**. Useful for providing a completely custom search implementation.
- input.append-inner: Content appended inside the search input field. Useful for adding icons or buttons within the input.
- append: Content to render below the items list, inside the command palette card. Useful for footers, keyboard shortcut hints, or additional actions.
- no-data: Custom content to display when no items match the search query. Replaces the default no-data message.
- list.prepend: Content to prepend to the list component.
- list.subheader: Slot for customizing the rendering of subheader items in the list.
- item.prepend: Content to display before each item's title.
- item.title: Slot for customizing the title of each item.
- item.append: Content to display after each item's title, replaces hotkey (if provided).

## Source-derived Keys

- Props: modelValue, search, items, placeholder, inputIcon, hotkey, closeOnSelect, noDataText, listProps
- Events: update:modelValue, update:search, click:item, before-select
- Slots: activator, default, prepend, append, input, input.append-inner, no-data, list.prepend, list.subheader, item, item.prepend, item.title, item.append

## Source Snippets

### propsFactory

```tsx
{
  modelValue: Boolean,
  search: String,
  items: {
    type: Array as PropType<VCommandPaletteItemType[]>,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: '$vuetify.command.search',
  },
  inputIcon: {
    type: String,
    default: '$search',
  },
  hotkey: String,
  closeOnSelect: {
    type: Boolean,
    default: true,
  },
  noDataText: {
    type: String,
    default: '$vuetify.noDataText',
  },
  listProps: Object as PropType<VList['$props']>,

  ...makeFilterProps({ filterKeys: ['title', 'subtitle'] }),
  ...makeDensityProps(),
  ...omit(makeVDialogProps({ maxWidth: 500 }), ['modelValue']),
}
```

### slots

```tsx
{
  activator: OverlaySlots['activator']
  default: never
  prepend: never
  append: never
  input: never
  'input.append-inner': never
  'no-data': never
  'list.prepend': never
  'list.subheader': VListChildrenSlots<any>['subheader']
  item: { item: VCommandPaletteItemType, index: number }
  'item.prepend': { item: VCommandPaletteItemType, index: number }
  'item.title': { item: VCommandPaletteItemType, index: number }
  'item.append': { item: VCommandPaletteItemType, index: number }
}
```

### emits

```tsx
{
    'update:modelValue': (value: boolean) => true,
    'update:search': (value: string) => true,
    'click:item': (item: VCommandPaletteItemType, event: MouseEvent | KeyboardEvent) => true,
    'before-select': (payload: {
      item: VCommandPaletteItemType
      event: MouseEvent | KeyboardEvent
      preventDefault: () => void
    }) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
