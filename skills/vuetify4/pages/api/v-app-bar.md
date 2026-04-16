---
title: "VAppBar"
nav_title: "VAppBar"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-app-bar"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VAppBar

Source: https://vuetifyjs.com/en/api/v-app-bar

## Agent Use

Use this page when you need the Vuetify 4 API contract for VAppBar, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VAppBar.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VAppBar/VAppBar.tsx

## Props

- collapse: Morphs the component into a collapsed state, reducing its maximum width.
- extensionHeight: Designate an explicit height for the `extension` slot.
- flat: Removes the component's **box-shadow**.
- floating: Applies **display: inline-flex** to the component.
- location: Aligns the component towards the top or bottom.
- scrollBehavior: Specify an action to take when the scroll position of **scroll-target** reaches **scroll-threshold**. Accepts any combination of hide, inverted, collapse, elevate, and fade-image. Multiple values can be used, separated by a space.
- scrollTarget: The element to target for scrolling events. Uses `window` by default.
- scrollThreshold: The amount of scroll distance down before **scroll-behavior** activates.

## Slots

- extension: Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop.
- image: Expects the [`v-img`](/components/images/) component.

## Source-derived Keys

- Props: scrollBehavior, modelValue, location, height
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  scrollBehavior: String as PropType<'hide' | 'fully-hide' | 'inverted' | 'collapse' | 'elevate' | 'fade-image' | (string & {})>,
  modelValue: {
    type: Boolean,
    default: true,
  },
  location: {
    type: String as PropType<'top' | 'bottom'>,
    default: 'top',
    validator: (value: any) => ['top', 'bottom'].includes(value),
  },

  ...omit(makeVToolbarProps(), ['location']),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),

  height: {
    type: [Number, String],
    default: 64,
  },
}
```

### emits

```tsx
{
    'update:modelValue': (value: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
