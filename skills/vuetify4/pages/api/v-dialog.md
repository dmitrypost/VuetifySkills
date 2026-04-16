---
title: "VDialog"
nav_title: "VDialog"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-dialog"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDialog

Source: https://vuetifyjs.com/en/api/v-dialog

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDialog, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDialog.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDialog/VDialog.tsx

## Props

- fullscreen: Changes layout for fullscreen display.
- maxWidth: Sets the maximum width for the component.
- noClickAnimation: Disables the bounce effect when clicking outside of a `v-dialog`'s content when using the **persistent** prop.
- openOnHover: Designates whether component should activate when its activator is hovered.
- persistent: Clicking outside of the element or pressing **esc** key will not deactivate it.
- scrollable: When set to true, expects a `v-card` and a `v-card-text` component with a designated height. For more information, check out the [scrollable example](/components/dialogs#scrollable).

## Exposed

- animateClick: Function invoked when user clicks outside the component and the **persistent** prop is used.
- globalTop: Used by activator to determine a components position in the global stack order.
- localTop: Used by activator to determine a components position in the local stack order.
- updateLocation: Function used for locationStrategy positioning.

## Source-derived Keys

- Props: fullscreen, scrollable
- Events: update:modelValue, afterEnter, afterLeave

## Source Snippets

### propsFactory

```tsx
{
  fullscreen: Boolean,
  scrollable: Boolean,

  ...omit(makeVOverlayProps({
    captureFocus: true,
    origin: 'center center' as const,
    scrollStrategy: 'block' as const,
    transition: { component: VDialogTransition },
    zIndex: 2400,
    retainFocus: true,
  }), ['disableInitialFocus']),
}
```

### emits

```tsx
{
    'update:modelValue': (value: boolean) => true,
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
