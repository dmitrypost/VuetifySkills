---
title: "VPicker"
nav_title: "VPicker"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-picker"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VPicker

Source: https://vuetifyjs.com/en/api/v-picker

## Agent Use

Use this page when you need the Vuetify 4 API contract for VPicker, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VPicker.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VPicker/VPicker.tsx

## Props

- divided: Adds a divider between the header and controls.
- landscape: Puts the picker into landscape mode.
- hideHeader: Hide the picker header.
- hideTitle: Hide the picker title.

## Slots

- actions: Slot for customizing the content in the actions area
- header: Slot for the component's header content.

## Source-derived Keys

- Props: bgColor, divided, landscape, title, hideHeader, hideTitle
- Slots: header, default, actions, title

## Source Snippets

### propsFactory

```tsx
{
  bgColor: String,
  divided: Boolean,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  hideTitle: Boolean,

  ...makeVSheetProps(),
}
```

### slots

```tsx
{
  header: never
  default: never
  actions: never
  title: never
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
