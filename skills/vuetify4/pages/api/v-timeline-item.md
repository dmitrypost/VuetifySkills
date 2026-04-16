---
title: "VTimelineItem"
nav_title: "VTimelineItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-timeline-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTimelineItem

Source: https://vuetifyjs.com/en/api/v-timeline-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTimelineItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTimelineItem.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTimeline/VTimelineItem.tsx

## Props

- dotColor: Color of the item dot.
- fillDot: Remove outer border of item dot, making the color fill the entire dot.
- hideDot: Hide the timeline item dot.
- hideOpposite: Hide opposite content if it exists.
- icon: Apply a specific icon to the inside dot using the [v-icon](/components/icons/) component.
- iconColor: Color of the icon.
- lineInset: Specifies the distance between the line and the dot of the item.
- side: Show the item either **before** or **after** the timeline. This will override the implicit ordering of items, but will in turn be overridden by the `v-timeline` **single-side** prop.
- size: Size of the item dot

## Slots

- icon: Used to customize the icon inside the item dot.
- opposite: Used to customize the opposite side of timeline items.

## Source-derived Keys

- Props: density, dotColor, fillDot, hideDot, hideOpposite, icon, iconColor, lineInset, side
- Slots: default, icon, opposite

## Source Snippets

### propsFactory

```tsx
{
  density: String as PropType<'default' | 'compact'>,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: undefined,
  },
  icon: IconValue,
  iconColor: String,
  lineInset: [Number, String],
  side: {
    type: String,
    validator: (v: any) => v == null || ['start', 'end'].includes(v),
  } as Prop<TimelineItemSide>,

  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
}
```

### slots

```tsx
{
  default: never
  icon: never
  opposite: never
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
