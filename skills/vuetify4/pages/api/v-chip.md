---
title: "VChip"
nav_title: "VChip"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-chip"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VChip

Source: https://vuetifyjs.com/en/api/v-chip

## Agent Use

Use this page when you need the Vuetify 4 API contract for VChip, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VChip.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VChip/VChip.tsx

## Props

- closable: Adds remove button and then a chip can be closed.
- closeIcon: Change the default icon used for **close** chips.
- closeLabel: Text used for *aria-label* on the close button in **close** chips. Can also be customized globally in [Internationalization](/customization/internationalization).
- draggable: Makes the chip draggable.
- filter: Displays a selection icon when selected.
- filterIcon: Change the default icon used for **filter** chips.
- label: Applies a medium size border radius.
- pill: Remove `v-avatar` padding.
- size: Sets the height, padding and the font size of the component. Accepts only predefined options: **x-small**, **small**, **default**, **large**, and **x-large**.
- value: The value used when a child of a [v-chip-group](/components/chip-groups).

## Events

- click: Emitted when component is clicked, toggles chip if contained in a chip group - Will trigger component to ripple when clicked unless the `.native` modifier is used.

## Slots

- close: Slot for icon used in **close** prop.
- filter: Slot for icon used in **filter** prop.

## Source-derived Keys

- Props: activeClass, appendAvatar, appendIcon, baseColor, closable, closeIcon, closeLabel, draggable, filter, filterIcon, label, link, pill, prependAvatar, prependIcon, ripple, text, modelValue, onClick, onClickOnce
- Events: click:close, update:modelValue, group:selected, click
- Slots: default, label, prepend, append, close, filter

## Source Snippets

### propsFactory

```tsx
{
  activeClass: String,
  appendAvatar: String,
  appendIcon: IconValue,
  baseColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: '$delete',
  },
  closeLabel: {
    type: String,
    default: '$vuetify.close',
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: IconValue,
    default: '$complete',
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: undefined,
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object] as PropType<RippleDirectiveBinding['value']>,
    default: true,
  },
  text: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  modelValue: {
    type: Boolean,
    default: true,
  },

  onClick: EventProp<[MouseEvent]>(),
  onClickOnce: EventProp<[MouseEvent]>(),

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({ tag: 'span' }),
  ...makeThemeProps(),
  ...makeVariantProps({ variant: 'tonal' } as const),
}
```

### slots

```tsx
{
  default: {
    isSelected: boolean | undefined
    selectedClass: boolean | (string | undefined)[] | undefined
    select: ((value: boolean) => void) | undefined
    toggle: (() => void) | undefined
    value: unknown
    disabled: boolean
  }
  label: never
  prepend: never
  append: never
  close: never
  filter: never
}
```

### emits

```tsx
{
    'click:close': (e: MouseEvent) => true,
    'update:modelValue': (value: boolean) => true,
    'group:selected': (val: { value: boolean }) => true,
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
