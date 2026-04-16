---
title: "VMenu"
nav_title: "VMenu"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-menu"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VMenu

Source: https://vuetifyjs.com/en/api/v-menu

## Agent Use

Use this page when you need the Vuetify 4 API contract for VMenu, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VMenu.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VMenu/VMenu.tsx

## Props

- attach: Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or `true` to disable teleporting. Uses `body` by default. Generally not recommended except as a last resort: the default positioning algorithm should handle most scenarios better than is possible without teleporting, and you may have unexpected behavior if the menu ends up as child of its activator.
- id: The unique identifier of the component.
- closeOnContentClick: Designates if menu should close when its content is clicked.
- closeDelay: Milliseconds to wait before closing component. Only works with the **open-on-hover** prop.
- disableInitialFocus: Deprecated, use `capture-focus` instead. Prevents automatic redirect of first `focusin` event. Intended to use on permanently open menus or VSpeedDial.
- minWidth: Sets the minimum width for the component. Use `auto` to use the activator width.
- openDelay: Milliseconds to wait before opening component. Only works with the **open-on-hover** prop.
- openOnClick: Designates whether menu should open on activator click.
- openOnHover: Designates whether menu should open on activator hover.
- submenu: Opens with right arrow and closes on left instead of up/down. Implies `location="end"`. Directions are reversed for RTL.

## Exposed

- animateClick: Function invoked when user clicks outside.
- globalTop: Used by activator to determine a components position in the global stack order.
- id: The unique identifier of the component.
- localTop: Used by activator to determine a components position in the local stack order.
- target: Ref to the current target element.
- updateLocation: Function used for locationStrategy positioning.

## Source-derived Keys

- Props: id, submenu
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,

  ...omit(makeVOverlayProps({
    captureFocus: true,
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: 'connected' as const,
    location: undefined,
    openDelay: 300,
    scrim: false,
    scrollStrategy: 'reposition' as const,
    transition: { component: VDialogTransition },
  }), ['absolute']),
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
