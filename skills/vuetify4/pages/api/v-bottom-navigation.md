---
title: "VBottomNavigation"
nav_title: "VBottomNavigation"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-bottom-navigation"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VBottomNavigation

Source: https://vuetifyjs.com/en/api/v-bottom-navigation

## Agent Use

Use this page when you need the Vuetify 4 API contract for VBottomNavigation, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VBottomNavigation.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBottomNavigation/VBottomNavigation.tsx

## Props

- grow: Force all [v-btn](/components/buttons) children to take up all available horizontal space.
- mode: Changes the orientation and active state styling of the component.

## Events

- update:active: Event that is emitted when the active state changes.

## Source-derived Keys

- Props: baseColor, bgColor, color, grow, mode, height, active
- Events: update:active, update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (v: any) => !v || ['horizontal', 'shift'].includes(v),
  },
  height: {
    type: [Number, String],
    default: 56,
  },
  active: {
    type: Boolean,
    default: true,
  },

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeLayoutItemProps({ name: 'bottom-navigation' }),
  ...makeTagProps({ tag: 'header' }),
  ...makeGroupProps({ selectedClass: 'v-btn--selected' }),
  ...makeThemeProps(),
}
```

### emits

```tsx
{
    'update:active': (value: any) => true,
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
