---
title: "VTreeviewGroup"
nav_title: "VTreeviewGroup"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-treeview-group"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VTreeviewGroup

Source: https://vuetifyjs.com/en/api/v-treeview-group

## Agent Use

Use this page when you need the Vuetify 4 API contract for VTreeviewGroup, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VTreeviewGroup.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTreeview/VTreeviewGroup.tsx

## Props

- fluid: Removes indentation from nested items.

## Source Snippets

### propsFactory

```tsx
{
  ...omit(makeVListGroupProps({
    collapseIcon: '$treeviewCollapse',
    expandIcon: '$treeviewExpand',
  }), ['subgroup']),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
