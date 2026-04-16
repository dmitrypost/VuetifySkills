---
title: "VNavigationDrawer"
nav_title: "VNavigationDrawer"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-navigation-drawer"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VNavigationDrawer

Source: https://vuetifyjs.com/en/api/v-navigation-drawer

## Agent Use

Use this page when you need the Vuetify 4 API contract for VNavigationDrawer, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VNavigationDrawer.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VNavigationDrawer/VNavigationDrawer.tsx

## Props

- disableResizeWatcher: Prevents the automatic opening or closing of the drawer when resized, based on whether the device is mobile or desktop.
- disableRouteWatcher: Disables opening of navigation drawer when route changes.
- expandOnHover: Collapses the drawer to a **rail-variant** until hovering with the mouse.
- floating: A floating drawer has no visible container (no border-right).
- image: Apply a specific background image to the component.
- mobileBreakpoint: Sets the designated mobile breakpoint for the component. This will apply alternate styles for mobile devices such as the `temporary` prop, or activate the `bottom` prop when the breakpoint value is met. Setting the value to `0` will disable this functionality.
- permanent: The drawer remains visible regardless of screen size.
- rail: Sets the component width to the **rail-width** value.
- railWidth: Sets the width for the component when `rail` is enabled.
- scrim: Determines whether an overlay is used when a **temporary** drawer is open. Accepts true/false to enable background, and string to define color.
- temporary: A temporary drawer sits above its application and uses a scrim (overlay) to darken the background.
- touchless: Disable mobile touch functionality.
- location: Controls the edge of the screen the drawer is attached to.
- sticky: When true, the drawer will remain visible when scrolling past the top of the page.

## Events

- update:rail: Event that is emitted when the rail model changes.

## Slots

- append: A slot at the bottom of the drawer.
- image: Used to modify `v-img` properties when using the **src** prop.
- prepend: A slot at the top of the drawer

## Exposed

- isStuck: Used to determine if the drawer is stuck to the top of the page.

## Source-derived Keys

- Props: color, disableResizeWatcher, disableRouteWatcher, expandOnHover, floating, modelValue, permanent, rail, railWidth, scrim, image, temporary, persistent, touchless, width, location, sticky
- Events: update:modelValue, update:rail
- Slots: default, prepend, append, image

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
  permanent: Boolean,
  rail: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
  railWidth: {
    type: [Number, String],
    default: 56,
  },
  scrim: {
    type: [Boolean, String],
    default: true,
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256,
  },
  location: {
    type: String as PropType<typeof locations[number]>,
    default: 'start',
    validator: (value: any) => locations.includes(value),
  },
  sticky: Boolean,

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps({ mobile: null }),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...omit(makeFocusTrapProps(), ['disableInitialFocus']),
  ...makeTagProps({ tag: 'nav' }),
  ...makeThemeProps(),
}
```

### slots

```tsx
{
  default: never
  prepend: never
  append: never
  image: VNavigationDrawerImageSlot
}
```

### emits

```tsx
{
    'update:modelValue': (val: boolean) => true,
    'update:rail': (val: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
