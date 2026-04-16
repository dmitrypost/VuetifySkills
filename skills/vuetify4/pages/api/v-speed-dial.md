---
title: "VSpeedDial"
nav_title: "VSpeedDial"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-speed-dial"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSpeedDial

Source: https://vuetifyjs.com/en/api/v-speed-dial

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSpeedDial, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSpeedDial.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSpeedDial/VSpeedDial.tsx

## Props

- openOnHover: Opens speed-dial on hover.

## Source-derived Keys

- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  ...makeComponentProps(),
  ...makeVMenuProps({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: 'top center' as const,
    transition: 'scale-transition',
  }),
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
