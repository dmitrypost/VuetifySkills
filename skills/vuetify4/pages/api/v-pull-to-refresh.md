---
title: "VPullToRefresh"
nav_title: "VPullToRefresh"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-pull-to-refresh"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VPullToRefresh

Source: https://vuetifyjs.com/en/api/v-pull-to-refresh

## Agent Use

Use this page when you need the Vuetify 4 API contract for VPullToRefresh, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VPullToRefresh.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VPullToRefresh/VPullToRefresh.tsx

## Props

- pullDownThreshold: The distance the user must pull down to trigger a refresh.

## Events

- load: Emitted when the user pulls down past the threshold.

## Slots

- pullDownPanel: Slot to override the display of the progress indicator after a pull down

## Source-derived Keys

- Events: load
- Slots: default, pullDownPanel

## Source Snippets

### slots

```tsx
{
  default: never
  pullDownPanel: {
    canRefresh: boolean
    goingUp: boolean
    refreshing: boolean
  }
}
```

### emits

```tsx
{
    load: (options: { done: () => void }) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
