---
title: "VCard"
nav_title: "VCard"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-card"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VCard

Source: https://vuetifyjs.com/en/api/v-card

## Agent Use

Use this page when you need the Vuetify 4 API contract for VCard, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VCard.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VCard/VCard.tsx

## Props

- flat: Removes the card's elevation.
- hover: Applies **3dp** (level 2) of elevation when hovered (default 1dp). You can find more information on the [elevation page](/styles/elevation).
- image: Apply a specific background image to the component.
- prependIcon: Prepends a [v-icon](/components/icons/) component to the header.

## Slots

- actions: The slot used for the card actions; located at the bottom of the card.
- image: The slot used for the card image. This is used with the [image](#props-image) prop.

## Source-derived Keys

- Props: appendAvatar, appendIcon, disabled, flat, hover, image, link, prependAvatar, prependIcon, ripple, subtitle, text, title

## Source Snippets

### propsFactory

```tsx
{
  appendAvatar: String,
  appendIcon: IconValue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: undefined,
  },
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object] as PropType<RippleDirectiveBinding['value']>,
    default: true,
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  text: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  title: {
    type: [String, Number, Boolean],
    default: undefined,
  },

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({ variant: 'elevated' } as const),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
