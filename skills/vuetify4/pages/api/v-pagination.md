---
title: "VPagination"
nav_title: "VPagination"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-pagination"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VPagination

Source: https://vuetifyjs.com/en/api/v-pagination

## Agent Use

Use this page when you need the Vuetify 4 API contract for VPagination, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VPagination.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VPagination/VPagination.tsx

## Props

- ariaLabel: Label for the root element.
- color: Applies specified color to the selected page button - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
- currentPageAriaLabel: Label for the currently selected page.
- ellipsis: Text to show between page buttons when truncating the list.
- firstAriaLabel: Label for the go to first button.
- firstIcon: The icon to use for the first button.
- lastAriaLabel: Label for the go to last button.
- lastIcon: The icon to use for the last button.
- length: The number of pages.
- nextAriaLabel: Label for the next button.
- nextIcon: The icon to use for the next button.
- pageAriaLabel: Label for each page button.
- prevIcon: The icon to use for the prev button.
- previousAriaLabel: Label for the previous button.
- showFirstLastPage: Show buttons for going to first and last page.
- start: Specify the starting page.
- totalVisible: Specify the total visible pagination numbers.

## Events

- first: Emitted when clicking on go to first button.
- last: Emitted when clicking on go to last button.
- next: Emitted when clicking on go to next button.
- prev: Emitted when clicking on go to previous button.

## Slots

- first: Define a custom appearance for the first button.
- last: Define a custom appearance for the last button.
- next: Define a custom appearance for the next button.
- prev: Define a custom appearance for the previous button.

## Source-derived Keys

- Props: activeColor, start, modelValue, disabled, length, totalVisible, firstIcon, prevIcon, nextIcon, lastIcon, ariaLabel, pageAriaLabel, currentPageAriaLabel, firstAriaLabel, previousAriaLabel, nextAriaLabel, lastAriaLabel, ellipsis, showFirstLastPage
- Events: update:modelValue, first, prev, next, last
- Slots: item, first, prev, next, last

## Source Snippets

### propsFactory

```tsx
{
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1,
  },
  modelValue: {
    type: Number,
    default: (props: any) => props.start as number,
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (val: number) => val % 1 === 0,
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: IconValue,
    default: '$first',
  },
  prevIcon: {
    type: IconValue,
    default: '$prev',
  },
  nextIcon: {
    type: IconValue,
    default: '$next',
  },
  lastIcon: {
    type: IconValue,
    default: '$last',
  },
  ariaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.root',
  },
  pageAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.page',
  },
  currentPageAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.currentPage',
  },
  firstAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.first',
  },
  previousAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.previous',
  },
  nextAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.next',
  },
  lastAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.last',
  },
  ellipsis: {
    type: String,
    default: '...',
  },
  showFirstLastPage: Boolean,

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps({ tag: 'nav' }),
  ...makeThemeProps(),
  ...makeVariantProps({ variant: 'text' } as const),
}
```

### slots

```tsx
{
  item: ItemSlot
  first: ControlSlot
  prev: ControlSlot
  next: ControlSlot
  last: ControlSlot
}
```

### emits

```tsx
{
    'update:modelValue': (value: number) => true,
    first: (value: number) => true,
    prev: (value: number) => true,
    next: (value: number) => true,
    last: (value: number) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
