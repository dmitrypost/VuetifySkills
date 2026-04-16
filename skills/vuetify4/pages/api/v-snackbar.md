---
title: "VSnackbar"
nav_title: "VSnackbar"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-snackbar"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSnackbar

Source: https://vuetifyjs.com/en/api/v-snackbar

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSnackbar, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSnackbar.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSnackbar/VSnackbar.tsx

## Props

- loading: Displays a loading spinner in the prepend area.
- prependAvatar: Displays an avatar in the prepend area using the provided image source.
- prependIcon: Displays an icon in the prepend area.
- reverseTimer: Reverses the direction of the timer progress bar, filling up instead of depleting.
- timer: Display a progress bar that counts down until the snackbar closes. Use `bottom` to change the default placement.
- timerColor: Sets the color of the timer progress bar.
- timeout: Time (in milliseconds) to wait until snackbar is automatically hidden. Use `-1` to keep open indefinitely. It is recommended for this number to be between `4000` and `10000`. Changes to this property will reset the countdown.
- transition: Sets the component transition. Can be one of the [built in](/styles/transitions/) or custom transition. Supports special location-aware mode with **slide-auto** and **scroll-auto**
- collapsed: Alters the element size fit behind front snackbar in the queue.
- queueGap: Sets the offset to show collapsed snackbars as a stack. Requires value in pixels.
- queueIndex: The index position of this snackbar within a queue.
- vertical: Stacks snackbar content on top of the actions (button).

## Slots

- actions: Used to bind styles to [v-btn](/components/buttons) to match MD2 specification.
- header: Slot for custom content above the snackbar body.

## Exposed

- animateClick: Function invoked when user clicks outside.
- globalTop: Used by activator to determine a components position in the global stack order.
- localTop: Used by activator to determine a components position in the local stack order.
- updateLocation: Function used for locationStrategy positioning.

## Source-derived Keys

- Props: collapsed, loading, prependAvatar, prependIcon, queueGap, queueIndex, title, text, reverseTimer, timer, timerColor, timeout, vertical
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  collapsed: Object as PropType<{ width: number, height: number }>,
  loading: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  queueGap: Number,
  queueIndex: Number,
  title: String,
  text: String,
  reverseTimer: Boolean,
  timer: {
    type: [Boolean, String] as PropType<boolean | 'top' | 'bottom'>,
    default: false,
  },
  timerColor: String,
  timeout: {
    type: [Number, String],
    default: 5000,
  },
  vertical: Boolean,

  ...makeLocationProps({ location: 'bottom' } as const),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeVariantProps(),
  ...makeThemeProps(),
  ...omit(makeVOverlayProps({
    closeOnBack: false,
    transition: 'v-snackbar-transition',
  }), [
    'persistent',
    'noClickAnimation',
    'offset',
    'retainFocus',
    'captureFocus',
    'disableInitialFocus',
    'scrim',
    'scrollStrategy',
    'stickToTarget',
    'viewportMargin',
  ]),
}
```

### emits

```tsx
{
    'update:modelValue': (v: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
