---
title: "VExpansionPanel"
nav_title: "VExpansionPanel"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-expansion-panel"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VExpansionPanel

Source: https://vuetifyjs.com/en/api/v-expansion-panel

## Agent Use

Use this page when you need the Vuetify 4 API contract for VExpansionPanel, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VExpansionPanel.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VExpansionPanel/VExpansionPanel.tsx

## Props

- disabled: Disables the expansion-panel content.
- readonly: Makes the expansion panel content read only.
- focusable: Makes the expansion panel content focusable.
- value: Controls the opened/closed state of content.
- static: Remove title size expansion when selected.

## Exposed

- groupItem: The current expansion panel within the group in `<v-expansion-panels>`.

## Source-derived Keys

- Props: title, text, bgColor
- Events: group:selected
- Slots: default, title, text

## Source Snippets

### propsFactory

```tsx
{
  title: String,
  text: String,
  bgColor: String,

  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeVExpansionPanelTitleProps(),
  ...makeVExpansionPanelTextProps(),
}
```

### slots

```tsx
{
  default: never
  title: never
  text: never
}
```

### emits

```tsx
{
    'group:selected': (val: { value: boolean }) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
