---
title: "VChipGroup"
nav_title: "VChipGroup"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-chip-group"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VChipGroup

Source: https://vuetifyjs.com/en/api/v-chip-group

## Agent Use

Use this page when you need the Vuetify 4 API contract for VChipGroup, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VChipGroup.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VChipGroup/VChipGroup.tsx

## Props

- baseColor: Sets the color of component when not focused. Recommended with `color` or `filter` to properly highlight selected items.
- centerActive: Forces the selected chip to be centered.
- column: Remove horizontal pagination and wrap items as needed.
- filter: Applies an checkmark icon in front of every chip for using it like a filter.
- nextIcon: Specify the icon to use for the next icon.
- prevIcon: Specify the icon to use for the prev icon.
- showArrows: Force the display of the pagination arrows.

## Source-derived Keys

- Props: baseColor, column, filter, valueComparator
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  baseColor: String,
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function as PropType<ValueComparator>,
    default: deepEqual,
  },

  ...makeVSlideGroupProps({ scrollToActive: false }),
  ...makeComponentProps(),
  ...makeGroupProps({ selectedClass: 'v-chip--selected' }),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({ variant: 'tonal' } as const),
}
```

### emits

```tsx
{
    'update:modelValue': (value: any) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
