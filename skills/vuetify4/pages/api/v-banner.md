---
title: "VBanner"
nav_title: "VBanner"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-banner"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VBanner

Source: https://vuetifyjs.com/en/api/v-banner

## Agent Use

Use this page when you need the Vuetify 4 API contract for VBanner, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VBanner.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBanner/VBanner.tsx

## Props

- avatar: Designates a specific src image to pass to the thumbnail.
- lines: The amount of visible lines of text before it truncates.
- mobile: Applies the mobile banner styles.
- sticky: Applies `position: sticky` to the component with `top: 0`. You can find more information on the [MDN documentation for sticky position](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
- stacked: Forces the banner actions onto a new line. This is not applicable when the banner has `lines="one"`.

## Slots

- actions: The slot used for the action's content such as a [v-btn](/components/buttons).
- prepend: Slot for icon at beginning of banner.

## Source-derived Keys

- Props: avatar, bgColor, color, icon, lines, stacked, sticky, text
- Slots: default, prepend, text, actions

## Source Snippets

### propsFactory

```tsx
{
  avatar: String,
  bgColor: String,
  color: String,
  icon: IconValue,
  lines: String as PropType<'one' | 'two' | 'three'>,
  stacked: Boolean,
  sticky: Boolean,
  text: String,

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeDisplayProps({ mobile: null }),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
}
```

### slots

```tsx
{
  default: never
  prepend: never
  text: never
  actions: never
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
