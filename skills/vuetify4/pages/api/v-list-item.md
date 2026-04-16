---
title: "VListItem"
nav_title: "VListItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-list-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VListItem

Source: https://vuetifyjs.com/en/api/v-list-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VListItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VListItem.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VList/VListItem.tsx

## Props

- active: Controls the **active** state of the item. This is typically used to highlight the component.
- activeColor: Deprecated, use `color` instead.
- color: Applies specified color to the control when in an **active** state or **input-value** is **true** - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors),
- title: Generates a `v-list-item-title` component with the supplied value. Note that this overrides the native [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) attribute, that must be set with `v-bind:title.attr` instead.
- value: The value used for selection. Obtained from [`v-list`](/api/v-list)'s `v-model:selected` when the item is selected.
- lines: The line declaration specifies the minimum height of the item and can also be controlled from v-list with the same prop.
- nav: Reduces the width v-list-item takes up as well as adding a border radius.
- slim: Reduces horizontal spacing for badges, icons, tooltips, and avatars to create a more compact visual representation.
- index: The index of the item within the list. Used internally for keyboard navigation and selection.
- tabindex: Controls the tabindex of the list item. When set, overrides the default tabindex behavior. Automatically set to -1 by VList when using `navigationStrategy="track"` to prevent Tab key navigation into items.

## Exposed

- activate: Activate the list item.
- id: The unique identifier of the list item.
- isActivated: Check if the list item is activated.
- isGroupActivator: Check if the list item activates a group.
- isSelected: Check if the list item is selected.
- link: Navigation information if list item functions as a link.
- list: The reference to the parent list component.
- root: The root nested list component
- select: Select this list item.

## Source-derived Keys

- Props: active, activeClass, activeColor, appendAvatar, appendIcon, baseColor, disabled, lines, link, nav, prependAvatar, prependIcon, ripple, slim, prependGap, subtitle, title, value, index, tabindex, onClick, onClickOnce
- Events: click
- Slots: prepend, append, default, title, subtitle

## Source Snippets

### propsFactory

```tsx
{
  active: {
    type: Boolean,
    default: undefined,
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: IconValue,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String] as PropType<'one' | 'two' | 'three' | false>,
  link: {
    type: Boolean,
    default: undefined,
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object] as PropType<RippleDirectiveBinding['value']>,
    default: true,
  },
  slim: Boolean,
  prependGap: [Number, String],
  subtitle: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  title: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  value: null,
  index: Number,
  tabindex: [Number, String],

  onClick: EventProp<[MouseEvent | KeyboardEvent]>(),
  onClickOnce: EventProp<[MouseEvent]>(),

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({ variant: 'text' } as const),
}
```

### slots

```tsx
{
  prepend: ListItemSlot
  append: ListItemSlot
  default: ListItemSlot
  title: ListItemTitleSlot
  subtitle: ListItemSubtitleSlot
}
```

### emits

```tsx
{
    click: (e: MouseEvent | KeyboardEvent) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
