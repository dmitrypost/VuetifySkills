---
title: "VSnackbarQueue"
nav_title: "VSnackbarQueue"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-snackbar-queue"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSnackbarQueue

Source: https://vuetifyjs.com/en/api/v-snackbar-queue

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSnackbarQueue, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSnackbarQueue.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSnackbarQueue/VSnackbarQueue.tsx

## Props

- closable: Adds a dismiss button that closes the active snackbar.
- displayStrategy: Determines how new snackbars are handled when the queue is full. **hold** (default) keeps new messages queued until a slot opens. **overflow** dismisses the oldest snackbar to make room for the new one.
- closeText: The text used in the close button when using the **closable** prop.
- gap: Sets the gap between stacked snackbars. Requires value in pixels.
- collapsed: Puts the visible snackbars behind each other (expands on hover).
- totalVisible: Specify the total visible snackbars.

## Exposed

- clear: Dismisses all visible snackbars and clears the queue.

## Source-derived Keys

- Props: closable, closeText, collapsed, displayStrategy, modelValue, totalVisible, gap
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  // TODO: Port this to Snackbar on dev
  closable: [Boolean, String],
  closeText: {
    type: String,
    default: '$vuetify.dismiss',
  },
  collapsed: Boolean,
  displayStrategy: {
    type: String as PropType<'overflow' | 'hold'>,
    default: 'hold',
  },
  modelValue: {
    type: Array as PropType<readonly SnackbarMessage[]>,
    default: () => [],
  },
  totalVisible: {
    type: [Number, String],
    default: 1,
  },
  gap: {
    type: [Number, String],
    default: 8,
  },
  ...omit(makeVSnackbarProps(), ['modelValue', 'collapsed', 'queueIndex', 'queueGap']),
}
```

### emits

```tsx
{
    'update:modelValue': (val: SnackbarMessage[]) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
