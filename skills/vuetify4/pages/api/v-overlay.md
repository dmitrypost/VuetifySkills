---
title: "VOverlay"
nav_title: "VOverlay"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-overlay"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VOverlay

Source: https://vuetifyjs.com/en/api/v-overlay

## Agent Use

Use this page when you need the Vuetify 4 API contract for VOverlay, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VOverlay.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VOverlay/VOverlay.tsx

## Props

- absolute: Applies **position: absolute** to the content element.
- attach: Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or `true` to disable teleporting. Uses `body` by default.
- closeOnBack: Closes the overlay content when the browser's back button is pressed or `$router.back()` is called, cancelling the original navigation. `persistent` overlays will cancel navigation and animate as if they were clicked outside instead of closing.
- contained: Limits the size of the component and scrim to its offset parent. Implies `absolute` and `attach`. (Note: The parent element must have position: relative.).
- noClickAnimation: Disables the bounce effect when clicking outside of the content element when using the persistent prop.
- opacity: Sets the opacity of the scrim element. Only applies if `scrim` is enabled.
- persistent: Clicking outside of the element or pressing esc key will not deactivate it.
- scrim: Accepts true/false to enable background, and string to define color.
- zIndex: The z-index used for the component.

## Events

- click:outside: Event that fires when clicking outside an active overlay.
- afterLeave: Event that fires after the overlay has finished transitioning out.
- afterEnter: Event that fires after the overlay has finished transitioning in.
- keydown: Emitted when **any** key is pressed.

## Exposed

- activatorEl: Ref to the current activator element.
- animateClick: Function invoked when user clicks outside.
- contentEl: Ref to the current content element.
- globalTop: Used by activator to determine a components position in the global stack order.
- localTop: Used by activator to determine a components position in the local stack order.
- rootEl: Ref to the root v-overlay element.
- scrimEl: Ref to the current scrim element.
- target: Ref to the current target element.
- updateLocation: Function used for locationStrategy positioning.

## Source-derived Keys

- Props: absolute, attach, closeOnBack, contained, contentClass, contentProps, disabled, opacity, noClickAnimation, modelValue, persistent, scrim, zIndex
- Events: click:outside, update:modelValue, keydown, afterEnter, afterLeave

## Source Snippets

### propsFactory

```tsx
{
  absolute: Boolean,
  attach: [Boolean, String, Object] as PropType<boolean | string | Element>,
  closeOnBack: {
    type: Boolean,
    default: true,
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: true,
  },
  zIndex: {
    type: [Number, String],
    default: 2000,
  },

  ...makeActivatorProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLazyProps(),
  ...makeLocationStrategyProps(),
  ...makeScrollStrategyProps(),
  ...makeFocusTrapProps(),
  ...makeThemeProps(),
  ...makeTransitionProps(),
}
```

### emits

```tsx
{
    'click:outside': (e: MouseEvent) => true,
    'update:modelValue': (value: boolean) => true,
    keydown: (e: KeyboardEvent) => true,
    afterEnter: () => true,
    afterLeave: () => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
