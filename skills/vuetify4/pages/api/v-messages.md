---
title: "VMessages"
nav_title: "VMessages"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-messages"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VMessages

Source: https://vuetifyjs.com/en/api/v-messages

## Agent Use

Use this page when you need the Vuetify 4 API contract for VMessages, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VMessages.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VMessages/VMessages.tsx

## Props

- active: Determines whether the messages are visible or not.

## Source-derived Keys

- Props: active, color, messages
- Slots: message

## Source Snippets

### propsFactory

```tsx
{
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String] as PropType<string | readonly string[]>,
    default: () => ([]),
  },

  ...makeComponentProps(),
  ...makeTransitionProps({
    transition: {
      component: VSlideYTransition as Component,
      leaveAbsolute: true,
      group: true,
    },
  }),
}
```

### slots

```tsx
{
  message: VMessageSlot
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
