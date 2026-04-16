---
title: "VAvatarGroup"
nav_title: "VAvatarGroup"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-avatar-group"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VAvatarGroup

Source: https://vuetifyjs.com/en/api/v-avatar-group

## Agent Use

Use this page when you need the Vuetify 4 API contract for VAvatarGroup, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VAvatarGroup.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VAvatarGroup/VAvatarGroup.tsx

## Props

- border: Applies border styles to the child [v-avatar](/components/avatars) components.
- gap: Sets the overlap gap between avatars. Negative values cause avatars to overlap.
- hoverable: Enables a hover animation on child avatars.
- itemProps: Props object that will be applied to each item component. `true` will treat the original object as raw props and pass it directly to the component.
- limit: The total number of avatars to display, including the overflow indicator. E.g. a limit of `3` with 5 items renders 2 avatars and a `+3` overflow indicator.
- overflowText: Custom text to display in the overflow avatar. Defaults to `+N` where N is the number of hidden items.
- reverse: Reverses the stacking order of the avatars.
- size: Sets the size of all child avatars.
- vertical: Stacks avatars vertically instead of horizontally.

## Slots

- prepend: Custom content to be displayed before the avatar list.
- append: Custom content to be displayed after the avatar list.
- item: Customize each avatar item. Receives `props` and `index`.
- overflow: Customize the overflow indicator. Receives the count of hidden items.

## Source-derived Keys

- Props: border, gap, hoverable, items, itemProps, limit, overflowText, reverse, size, vertical
- Slots: default, prepend, append, item, overflow

## Source Snippets

### propsFactory

```tsx
{
  border: [Boolean, Number, String],
  gap: [Number, String],
  hoverable: Boolean,
  items: {
    type: Array as PropType<AvatarGroupItem[]>,
    default: () => ([]),
  },
  itemProps: {
    type: [Boolean, String, Array, Function] as PropType<SelectItemKey>,
    default: null,
  },
  limit: [Number, String],
  overflowText: String,
  reverse: Boolean,
  size: [Number, String],
  vertical: Boolean,

  ...makeComponentProps(),
  ...makeTagProps(),
}
```

### slots

```tsx
{
  default: never
  prepend: never
  append: never
  item: { props: any, index: number }
  overflow: { overflow: number }
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
