---
title: "VCarousel"
nav_title: "VCarousel"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-carousel"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VCarousel

Source: https://vuetifyjs.com/en/api/v-carousel

## Agent Use

Use this page when you need the Vuetify 4 API contract for VCarousel, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VCarousel.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VCarousel/VCarousel.tsx

## Props

- color: Applies a color to the navigation dots - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
- continuous: Determines whether carousel is continuous.
- cycle: Determines if the carousel should cycle through images.
- delimiterIcon: Sets icon for carousel delimiter.
- hideDelimiters: Hides the carousel's bottom delimiters.
- hideDelimiterBackground: Hides the bottom delimiter background.
- interval: The duration between image cycles. Requires the **cycle** prop.
- nextIcon: The displayed icon for forcing pagination to the next item.
- prevIcon: The displayed icon for forcing pagination to the previous item.
- progress: Displays a carousel progress bar. Requires the **cycle** prop and **interval**.
- showArrows: Displays arrows for next/previous navigation.
- verticalArrows: Displays the navigation arrows vertically instead of horizontally.
- verticalDelimiters: Displays carousel delimiters vertically.

## Source-derived Keys

- Props: color, cycle, delimiterIcon, height, hideDelimiters, hideDelimiterBackground, interval, progress, verticalDelimiters
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: IconValue,
    default: '$delimiter',
  },
  height: {
    type: [Number, String],
    default: 500,
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6000,
    validator: (value: string | number) => Number(value) > 0,
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String] as PropType<boolean | 'left' | 'right'>,

  ...makeVWindowProps({
    continuous: true,
    mandatory: 'force' as const,
    showArrows: true,
  }),
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
