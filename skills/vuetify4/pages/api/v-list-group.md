---
title: "VListGroup"
nav_title: "VListGroup"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-list-group"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VListGroup

Source: https://vuetifyjs.com/en/api/v-list-group

## Agent Use

Use this page when you need the Vuetify 4 API contract for VListGroup, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VListGroup.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VList/VListGroup.tsx

## Props

- activeColor: Deprecated, use `color` instead.
- disabled: Puts all children inputs into a disabled state.
- collapseIcon: Icon to display when the list item is expanded.
- expandIcon: Icon to display when the list item is collapsed.
- prependIcon: Prepends an icon to the component, uses the same syntax as `v-icon`.
- rawId: Defines the root element's id attribute in the component. If it is provided, the id attribute will be dynamically generated in the format: "v-list-group--id-[rawId]".
- subgroup: Designate the component as nested list group.
- value: Expands / Collapse the list-group.
- fluid: Removes the left padding assigned for action icons from group items.

## Exposed

- isOpen: Returns the current state of the list-group.

## Source-derived Keys

- Props: activeColor, baseColor, color, collapseIcon, disabled, expandIcon, rawId, prependIcon, appendIcon, fluid, subgroup, title, value
- Slots: default, activator

## Source Snippets

### propsFactory

```tsx
{
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: IconValue,
    default: '$collapse',
  },
  disabled: Boolean,
  expandIcon: {
    type: IconValue,
    default: '$expand',
  },
  rawId: [String, Number],
  prependIcon: IconValue,
  appendIcon: IconValue,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,

  ...makeComponentProps(),
  ...makeTagProps(),
}
```

### slots

```tsx
{
  default: never
  activator: { isOpen: boolean, props: Record<string, unknown> }
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
