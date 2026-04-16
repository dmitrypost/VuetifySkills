---
title: "VRating"
nav_title: "VRating"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-rating"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VRating

Source: https://vuetifyjs.com/en/api/v-rating

## Agent Use

Use this page when you need the Vuetify 4 API contract for VRating, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VRating.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VRating/VRating.tsx

## Props

- clearable: Allows for the component to be cleared by clicking on the current value.
- emptyIcon: The icon displayed when empty.
- fullIcon: The icon displayed when full.
- itemLabels: Array of labels to display next to each item..
- itemLabelPosition: Position of item labels. Accepts 'top' and 'bottom'.
- halfIncrements: Allows the selection of half increments.
- hover: Provides visual feedback when hovering over icons.
- length: The amount of items to show.
- readonly: Removes all hover effects and pointer events.
- itemAriaLabel: The **aria-label** used for each item.

## Slots

- item: The slot for each item.
- item-label: The slot for each item label.

## Source-derived Keys

- Props: name, itemAriaLabel, activeColor, color, clearable, disabled, emptyIcon, fullIcon, halfIncrements, hover, length, readonly, modelValue, itemLabels, itemLabelPosition, ripple
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  name: String,
  itemAriaLabel: {
    type: String,
    default: '$vuetify.rating.ariaLabel.item',
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: IconValue,
    default: '$ratingEmpty',
  },
  fullIcon: {
    type: IconValue,
    default: '$ratingFull',
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5,
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  itemLabels: Array as Prop<string[]>,
  itemLabelPosition: {
    type: String,
    default: 'top',
    validator: (v: any) => ['top', 'bottom'].includes(v),
  },
  ripple: Boolean,

  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
}
```

### emits

```tsx
{
    'update:modelValue': (value: number | string) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
