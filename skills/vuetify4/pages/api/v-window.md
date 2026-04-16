---
title: "VWindow"
nav_title: "VWindow"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-window"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VWindow

Source: https://vuetifyjs.com/en/api/v-window

## Agent Use

Use this page when you need the Vuetify 4 API contract for VWindow, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VWindow.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VWindow/VWindow.tsx

## Props

- continuous: If `true`, window will "wrap around" from the last item to the first, and from the first item to the last.
- crossfade: Enables crossfade transition.
- direction: The transition direction when changing windows.
- nextIcon: Icon used for the "next" button if `show-arrows` is `true`.
- prevIcon: Icon used for the "prev" button if `show-arrows` is `true`.
- reverse: Reverse the normal transition direction.
- showArrows: Display the "next" and "prev" buttons.
- touch: Provide a custom **left** and **right** function when swiped left or right.
- transitionDuration: Overrides transition duration. Does not work in firefox, safari <18, or with `prefers-reduced-motion: reduce`.
- verticalArrows: Displays the navigation arrows vertically instead of horizontally.

## Slots

- next: Slot displaying the arrow switching to the next item.
- prev: Slot displaying the arrow switching to the previous item.
- additional: Slot for additional content at the end of the component.

## Exposed

- group: Returns item group data, state and helper methods.

## Source-derived Keys

- Props: continuous, nextIcon, prevIcon, reverse, showArrows, verticalArrows, touch, direction, modelValue, disabled, selectedClass, mandatory, crossfade, transitionDuration
- Events: update:modelValue
- Slots: default, additional, prev, next

## Source Snippets

### propsFactory

```tsx
{
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object] as PropType<IconValue>,
    default: '$next',
  },
  prevIcon: {
    type: [Boolean, String, Function, Object] as PropType<IconValue>,
    default: '$prev',
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v: any) => typeof v === 'boolean' || v === 'hover',
  },
  verticalArrows: [Boolean, String] as PropType<boolean | 'left' | 'right'>,
  touch: {
    type: [Object, Boolean] as PropType<boolean | TouchHandlers>,
    default: undefined,
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },

  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: 'v-window-item--active',
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String] as PropType<boolean | 'force'>,
    default: 'force' as const,
  },
  crossfade: Boolean,
  transitionDuration: Number,

  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
}
```

### slots

```tsx
{
  default: { group: GroupProvide }
  additional: { group: GroupProvide }
  prev: { props: ControlProps }
  next: { props: ControlProps }
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
