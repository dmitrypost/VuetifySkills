---
title: "VSlideGroup"
nav_title: "VSlideGroup"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-slide-group"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSlideGroup

Source: https://vuetifyjs.com/en/api/v-slide-group

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSlideGroup, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSlideGroup.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSlideGroup/VSlideGroup.tsx

## Props

- centerActive: Forces the selected component to be centered.
- contentClass: Adds classes to the slide group item.
- direction: Switch between horizontal and vertical modes.
- mobileBreakpoint: Sets the designated mobile breakpoint for the component.
- nextIcon: The appended slot when arrows are shown.
- prevIcon: The prepended slot when arrows are shown.
- showArrows: Change when the overflow arrow indicators are shown. By **default**, arrows *always* display on Desktop when the container is overflowing. When the container overflows on mobile, arrows are not shown by default. A **show-arrows** value of `true` allows these arrows to show on Mobile if the container overflowing. A value of `desktop` *always* displays arrows on Desktop while a value of `mobile` always displays arrows on Mobile. A value of `always` always displays arrows on Desktop *and* Mobile. Use **never** to turn arrows off. Find more information on how to customize breakpoint thresholds on the [breakpoints page](/customizing/breakpoints).

## Slots

- next: The next slot.
- prev: The prev slot.

## Exposed

- focus: Focus the component.
- hasNext: Returns true if there are items after current index.
- hasPrev: Returns true if there are items before current index.
- scrollOffset: Scroll the component to a given index.
- scrollTo: Scroll the component to a given index.
- selected: Get the selected component index.

## Source-derived Keys

- Props: centerActive, scrollToActive, contentClass, direction, symbol, nextIcon, prevIcon, showArrows
- Events: update:modelValue
- Slots: default, prev, next

## Source Snippets

### propsFactory

```tsx
{
  centerActive: Boolean,
  scrollToActive: {
    type: Boolean,
    default: true,
  },
  contentClass: null,
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  symbol: {
    type: null,
    default: VSlideGroupSymbol,
  },
  nextIcon: {
    type: IconValue,
    default: '$next',
  },
  prevIcon: {
    type: IconValue,
    default: '$prev',
  },
  showArrows: {
    type: [Boolean, String],
    validator: (v: any) => (
      typeof v === 'boolean' || [
        'always',
        'desktop',
        'mobile',
        'never',
      ].includes(v)
    ),
  },

  ...makeComponentProps(),
  ...makeDisplayProps({ mobile: null }),
  ...makeTagProps(),
  ...makeGroupProps({
    selectedClass: 'v-slide-group-item--active',
  }),
}
```

### slots

```tsx
{
  default: SlideGroupSlot
  prev: SlideGroupSlot
  next: SlideGroupSlot
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
