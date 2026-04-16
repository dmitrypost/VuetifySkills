---
title: "VList"
nav_title: "VList"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-list"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VList

Source: https://vuetifyjs.com/en/api/v-list

## Agent Use

Use this page when you need the Vuetify 4 API contract for VList, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VList.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VList/VList.tsx

## Props

- activeColor: Deprecated, use `color` instead.
- activatable: Designates whether the list items are activatable. Additionally, sets necessary accessibility attributes internally.
- disabled: Puts all children inputs into a disabled state.
- filterable: **FOR INTERNAL USE ONLY** Prevents list item selection using [space] key and pass it back to the text input. Used internally for VAutocomplete and VCombobox.
- itemsRegistration: When set to 'props', skips rendering collapsed items/nodes (for significant performance gains).
- lines: Designates a **minimum-height** for all children `v-list-item` components. This prop uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.
- nav: An alternative styling that reduces `v-list-item` width and rounds the corners. Typically used with **[v-navigation-drawer](/components/navigation-drawers)**.
- navigationIndex: Specifies the currently selected navigation index when using `navigationStrategy="track"`. Can be used with `v-model:navigationIndex` for two-way binding. Items at this index receive visual keyboard focus styling and automatic scrolling. Note: Only works with the `items` prop, not with slotted items.
- navigationStrategy: Determines keyboard navigation behavior. **focus** (default) moves DOM focus to items, suitable for traditional lists. **track** provides visual keyboard focus without moving DOM focus, ideal for command palettes and autocomplete where an external element retains focus. When track mode is active, items automatically receive `tabindex="-1"`, proper `aria-activedescendant` is set on the list container, and keyboard-focused items display focus-visible styling with auto-scrolling.
- slim: Reduces horizontal spacing for badges, icons, tooltips, and avatars within slim list items to create a more compact visual representation.
- prependGap: Sets the horizontal spacing between prepend slot and the main content within list item. Also affects indent to ensure expected alignment of group children.
- indent: Overrides the indent size for nested groups.
- collapseIcon: Icon to display when the list item is expanded.
- expandIcon: Icon to display when the list item is collapsed.
- selectable: Designates whether the list items are selectable. Additionally, sets necessary accessibility attributes internally.

## Events

- click:activate: Emitted when the list item is activated.
- click:open: Emitted when the list item is opened.
- click:select: Emitted when the list item is selected.
- update:activated: Emitted when the list item is activated.
- update:navigationIndex: Emitted when keyboard navigation occurs in `navigationStrategy="track"`. The event payload is the new index of the selected item. Automatically skips non-selectable items like dividers and subheaders.
- update:opened: Emitted when the list item is opened.
- update:selected: Emitted when the list item is selected.

## Slots

- item: Slot for rendering custom list items. Receives `{ props }` where `props` contains item data (`title`, `subtitle`, `value`, etc.) plus `index` (the item's position in the list). Use this to completely customize item rendering while still using VList's navigation and selection features.
- header: Slot for rendering custom group headers when using nested items. Receives `{ props }` containing the group's header item data plus activator props for expand/collapse functionality.

## Exposed

- children: The nested list items within the component.
- focus: Focus the list item.
- getPath: Get the position of an item within the nested structure.
- navigationIndex: A computed ref that returns the current navigation index when using `navigationStrategy="track"`. Returns -1 when no item is selected or when using `navigationStrategy="focus"`.
- open: Open the list item.
- parents: The parent list items within the component.

## Source-derived Keys

- Props: baseColor, activeColor, activeClass, bgColor, disabled, filterable, expandIcon, collapseIcon, lines, slim, prependGap, indent, nav, navigationStrategy, navigationIndex, onClick:open, onClick:select, onUpdate:opened
- Events: update:selected, update:activated, update:opened, update:navigationIndex, click:open, click:activate, click:select

## Source Snippets

### propsFactory

```tsx
{
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  filterable: Boolean,
  expandIcon: IconValue,
  collapseIcon: IconValue,
  lines: {
    type: [Boolean, String] as PropType<'one' | 'two' | 'three' | false>,
    default: 'one',
  },
  slim: Boolean,
  prependGap: [Number, String],
  indent: [Number, String],
  nav: Boolean,
  navigationStrategy: {
    type: String as PropType<'focus' | 'track'>,
    default: 'focus',
  },
  navigationIndex: Number,

  'onClick:open': EventProp<[{ id: unknown, value: boolean, path: unknown[] }]>(),
  'onClick:select': EventProp<[{ id: unknown, value: boolean, path: unknown[] }]>(),
  'onUpdate:opened': EventProp<[unknown]>(),
  ...makeNestedProps({
    selectStrategy: 'single-leaf' as const,
    openStrategy: 'list' as const,
  }),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeItemsProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({ variant: 'text' } as const),
}
```

### emits

```tsx
{
    'update:selected': (value: unknown) => true,
    'update:activated': (value: unknown) => true,
    'update:opened': (value: unknown) => true,
    'update:navigationIndex': (value: number) => true,
    'click:open': (value: { id: unknown, value: boolean, path: unknown[] }) => true,
    'click:activate': (value: { id: unknown, value: boolean, path: unknown[] }) => true,
    'click:select': (value: { id: unknown, value: boolean, path: unknown[] }) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
