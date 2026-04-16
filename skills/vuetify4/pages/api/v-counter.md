---
title: "VCounter"
nav_title: "VCounter"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-counter"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VCounter

Source: https://vuetifyjs.com/en/api/v-counter

## Agent Use

Use this page when you need the Vuetify 4 API contract for VCounter, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VCounter.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VCounter/VCounter.tsx

## Props

- active: Determines whether the counter is visible or not.
- max: Sets the maximum allowed value.
- value: Sets the current counter value.

## Source-derived Keys

- Props: active, disabled, max, value

## Source Snippets

### propsFactory

```tsx
{
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0,
  },

  ...makeComponentProps(),
  ...makeTransitionProps({
    transition: { component: VSlideYTransition as Component },
  }),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
