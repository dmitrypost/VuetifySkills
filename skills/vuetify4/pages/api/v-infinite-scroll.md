---
title: "VInfiniteScroll"
nav_title: "VInfiniteScroll"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-infinite-scroll"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VInfiniteScroll

Source: https://vuetifyjs.com/en/api/v-infinite-scroll

## Agent Use

Use this page when you need the Vuetify 4 API contract for VInfiniteScroll, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VInfiniteScroll.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VInfiniteScroll/VInfiniteScroll.tsx

## Props

- direction: Specifies if scroller is **vertical** or **horizontal**.
- emptyText: Text shown when there is no more content to load.
- loadMoreText: Text shown in default load more button, when in manual mode.
- margin: Value sent to the intersection observer. Will make the observer trigger earlier, by the margin (px) value supplied.
- mode: Specifies if content should load automatically when scrolling (**intersect**) or manually (**manual**).
- side: Specifies the side where new content should appear. Either the **start**, **end**, or **both** sides.

## Events

- load: Emitted when reaching the start / end threshold, or if triggered when using manual mode.

## Slots

- empty: Shown when load returned status 'empty'.
- error: Shown when load returned status 'error'.
- load-more: Shown when scrolled to either side of the content, in manual mode.
- loading: Shown when content is loading.

## Exposed

- reset: Resets side status to 'ok' letting it trigger 'load' again. Useful to prevent given side being stuck in 'empty' or 'error' state.

## Source-derived Keys

- Props: color, direction, side, mode, margin, loadMoreText, emptyText
- Events: intersect

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'vertical',
    validator: (v: any) => ['vertical', 'horizontal'].includes(v),
  },
  side: {
    type: String as PropType<InfiniteScrollSide>,
    default: 'end',
    validator: (v: any) => ['start', 'end', 'both'].includes(v),
  },
  mode: {
    type: String as PropType<'intersect' | 'manual'>,
    default: 'intersect',
    validator: (v: any) => ['intersect', 'manual'].includes(v),
  },
  margin: [Number, String],
  loadMoreText: {
    type: String,
    default: '$vuetify.infiniteScroll.loadMore',
  },
  emptyText: {
    type: String,
    default: '$vuetify.infiniteScroll.empty',
  },

  ...makeDimensionProps(),
  ...makeTagProps(),
}
```

### emits

```tsx
{
    intersect: (side: InfiniteScrollSide, isIntersecting: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
