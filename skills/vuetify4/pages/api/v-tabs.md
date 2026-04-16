---
title: "VTabs"
nav_title: "VTabs"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-tabs"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTabs

Source: https://vuetifyjs.com/en/api/v-tabs

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTabs, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTabs.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTabs/VTabs.tsx

## Props

- alignTabs: Aligns the tabs to the `start`, `center`, or `end` of container. Also accepts `title` to align with the `v-toolbar-title` component.
- color: Applies specified color to the selected tab - supports utility colors (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). Find a list of built-in classes on the [colors page](/styles/colors#material-colors).
- centerActive: Forces the selected tab to be centered.
- direction: Changes the direction of the tabs. Can be either `horizontal` or `vertical`.
- fixedTabs: Tabs will be centered and each tab item will grow up to 300px width.
- grow: Forces tabs to take up all available space.
- height: Sets the height of the tabs bar.
- hideSlider: Hide's the generated `v-tabs-slider`.
- inset: Changes the slider to take full height. Tabs will also get some spacing and customizable rounding.
- insetPadding: Sets custom spacing between tabs for `inset` mode.
- insetRadius: Sets custom border radius for the tabs container `inset` mode. Rounding for individual tabs is calculated by subtracting the padding.
- items: The items to display in the component. This can be an array of strings or objects with a property `text`.
- mobileBreakpoint: Sets the designated mobile breakpoint for the component.
- prevIcon: Left pagination icon.
- nextIcon: Right pagination icon.
- showArrows: Show pagination arrows if the tab items overflow their container. For mobile devices, arrows will only display when using this prop.
- sliderColor: Changes the background color of an auto-generated `v-tabs-slider`.
- sliderTransition: Changes slider transition to one of the predefined animation presets.
- sliderTransitionDuration: Applies custom slider transition duration. Default duration depends on transition type (fade: 400, grow: 350, shift: 225).
- stacked: Apply the stacked prop to all children v-tab components.

## Slots

- [`item.${string}`]: Dynamic slot to define custom slots for specific tab window items
- [`tab.${string}`]: Dynamic slot to define custom slots for specific tab headers in the slide group
- tab: Slot for custom tab header content.
- window: Slot for custom tab window content.

## Source-derived Keys

- Props: alignTabs, color, fixedTabs, items, stacked, bgColor, grow, height, hideSlider, inset, insetPadding, insetRadius, sliderColor
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  alignTabs: {
    type: String as PropType<'start' | 'title' | 'center' | 'end'>,
    default: 'start',
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array as PropType<readonly TabItem[]>,
    default: () => ([]),
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: undefined,
  },
  hideSlider: Boolean,
  inset: Boolean,
  insetPadding: [String, Number],
  insetRadius: [String, Number],
  sliderColor: String,

  ...pick(makeVTabProps(), ['spaced', 'sliderTransition', 'sliderTransitionDuration']),
  ...makeVSlideGroupProps({
    mandatory: 'force' as const,
    selectedClass: 'v-tab-item--selected',
  }),
  ...makeDensityProps(),
  ...makeTagProps(),
}
```

### emits

```tsx
{
    'update:modelValue': (v: unknown) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
