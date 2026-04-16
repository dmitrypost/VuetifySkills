---
title: "VTooltip"
nav_title: "VTooltip"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-tooltip"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTooltip

Source: https://vuetifyjs.com/en/api/v-tooltip

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTooltip, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTooltip.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTooltip/VTooltip.tsx

## Props

- closeDelay: Delay (in ms) after which menu closes (when open-on-hover prop is set to true).
- id: HTML id attribute of the tooltip overlay. If not set, a globally unique id will be used.
- interactive: When true, the tooltip will respond to pointer events, allowing you to copy text from it.
- openDelay: Delay (in ms) after which tooltip opens (when `open-on-hover` prop is set to **true**).
- openOnClick: Designates whether the tooltip should open on activator click.
- openOnHover: Designates whether the tooltip should open on activator hover.

## Exposed

- animateClick: Function invoked when user clicks outside.
- globalTop: Used by activator to determine a components position in the global stack order.
- localTop: Used by activator to determine a components position in the local stack order.
- updateLocation: Function used for locationStrategy positioning.

## Source-derived Keys

- Props: id, interactive, text
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  id: String,
  interactive: Boolean,
  text: String,

  ...omit(makeVOverlayProps({
    closeOnBack: false,
    location: 'end' as const,
    locationStrategy: 'connected' as const,
    eager: true,
    minWidth: 0,
    offset: 10,
    openOnClick: false,
    openOnHover: true,
    origin: 'auto' as const,
    scrim: false,
    scrollStrategy: 'reposition' as const,
    transition: null,
  }), [
    'absolute',
    'retainFocus',
    'captureFocus',
    'disableInitialFocus',
  ]),
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
