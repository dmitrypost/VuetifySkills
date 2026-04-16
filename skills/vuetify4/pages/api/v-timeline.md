---
title: "VTimeline"
nav_title: "VTimeline"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-timeline"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTimeline

Source: https://vuetifyjs.com/en/api/v-timeline

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTimeline, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTimeline.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTimeline/VTimeline.tsx

## Props

- align: Places the timeline dot at the top or center of the timeline item.
- direction: Display timeline in a **vertical** or **horizontal** direction.
- justify: Places timeline line at the center or automatically on the left or right side.
- lineColor: Color of the timeline line.
- lineInset: Specifies the distance between the line and the dot of timeline items.
- lineThickness: Thickness of the timeline line.
- side: Display all timeline items on one side of the timeline, either **start** or **end**.
- truncateLine: Truncate timeline directly at the **start** or **end** of the line, or on **both** ends.

## Source-derived Keys

- Props: align, direction, justify, side, lineThickness, lineColor, truncateLine

## Source Snippets

### propsFactory

```tsx
{
  align: {
    type: String,
    default: 'center',
    validator: (v: any) => ['center', 'start'].includes(v),
  } as Prop<TimelineAlign>,
  direction: {
    type: String,
    default: 'vertical',
    validator: (v: any) => ['vertical', 'horizontal'].includes(v),
  } as Prop<TimelineDirection>,
  justify: {
    type: String,
    default: 'auto',
    validator: (v: any) => ['auto', 'center'].includes(v),
  } as Prop<TimelineJustify>,
  side: {
    type: String,
    validator: (v: any) => v == null || ['start', 'end'].includes(v),
  } as Prop<TimelineSide>,
  lineThickness: {
    type: [String, Number],
    default: 2,
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (v: any) => ['start', 'end', 'both'].includes(v),
  } as Prop<TimelineTruncateLine>,

  ...pick(makeVTimelineItemProps({
    lineInset: 0,
  }), ['dotColor', 'fillDot', 'hideOpposite', 'iconColor', 'lineInset', 'size']),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
