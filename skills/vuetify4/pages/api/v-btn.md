---
title: "VBtn"
nav_title: "VBtn"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-btn"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VBtn

Source: https://vuetifyjs.com/en/api/v-btn

## Agent Use

Use this page when you need the Vuetify 4 API contract for VBtn, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VBtn.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBtn/VBtn.tsx

## Props

- block: Expands the button to 100% of available space.
- flat: Removes the button box shadow. This is different than using the 'flat' variant.
- icon: Apply a specific icon using the [v-icon](/components/icons/) component. The button will become _round_.
- readonly: Puts the button in a readonly state. Cannot be clicked or navigated to by keyboard.
- stacked: Displays the button as a flex-column.
- spaced: Extends content to the edges to move main content from prepend and append slots.
- slim: Reduces padding to 0 8px.

## Exposed

- group: Internal representation when used in VBtnToggle.

## Source-derived Keys

- Props: active, activeColor, baseColor, symbol, flat, icon, prependIcon, appendIcon, block, readonly, slim, stacked, spaced, ripple, text
- Events: group:selected
- Slots: default, prepend, append, loader

## Source Snippets

### propsFactory

```tsx
{
  active: {
    type: Boolean,
    default: undefined,
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: VBtnToggleSymbol,
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object] as PropType<boolean | IconValue>,
  prependIcon: IconValue,
  appendIcon: IconValue,

  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  spaced: String as PropType<'start' | 'end' | 'both'>,

  ripple: {
    type: [Boolean, Object] as PropType<RippleDirectiveBinding['value']>,
    default: true,
  },

  text: {
    type: [String, Number, Boolean],
    default: undefined,
  },

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({ tag: 'button' }),
  ...makeThemeProps(),
  ...makeVariantProps({ variant: 'elevated' } as const),
}
```

### slots

```tsx
{
  default: never
  prepend: never
  append: never
  loader: never
}
```

### emits

```tsx
{
    'group:selected': (val: { value: boolean }) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
