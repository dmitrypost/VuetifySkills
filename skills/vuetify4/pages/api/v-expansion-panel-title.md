---
title: "VExpansionPanelTitle"
nav_title: "VExpansionPanelTitle"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-expansion-panel-title"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VExpansionPanelTitle

Source: https://vuetifyjs.com/en/api/v-expansion-panel-title

## Agent Use

Use this page when you need the Vuetify 4 API contract for VExpansionPanelTitle, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VExpansionPanelTitle.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VExpansionPanel/VExpansionPanelTitle.tsx

## Props

- collapseIcon: Icon used when the expansion panel is in a collapsable state.
- expandIcon: Icon used when the expansion panel is in a expandable state.
- hideActions: Hide the expand icon in the content title.
- static: Remove title size expansion when selected.
- focusable: Makes the expansion panel headers focusable.
- readonly: Makes the expansion panel content read only.

## Slots

- actions: Slot for the actions.

## Source-derived Keys

- Props: color, expandIcon, collapseIcon, hideActions, focusable, static, ripple, readonly
- Slots: default, actions

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  expandIcon: {
    type: IconValue,
    default: '$expand',
  },
  collapseIcon: {
    type: IconValue,
    default: '$collapse',
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object] as PropType<RippleDirectiveBinding['value']>,
    default: false,
  },
  readonly: Boolean,

  ...makeComponentProps(),
  ...makeDimensionProps(),
}
```

### slots

```tsx
{
  default: ExpansionPanelTitleSlot
  actions: ExpansionPanelTitleSlot
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
