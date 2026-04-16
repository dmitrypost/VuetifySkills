---
title: "VWindowItem"
nav_title: "VWindowItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-window-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VWindowItem

Source: https://vuetifyjs.com/en/api/v-window-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VWindowItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VWindowItem.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VWindow/VWindowItem.tsx

## Props

- disabled: Prevents the item from becoming active when using the "next" and "prev" buttons or the `toggle` method.
- reverseTransition: Sets the reverse transition.
- transition: The transition used when the component progressing through items. Can be one of the [built in](/styles/transitions/) or custom transition.

## Exposed

- groupItem: Returns item and item group data, state and helper methods.

## Source-derived Keys

- Props: reverseTransition, transition
- Events: group:selected

## Source Snippets

### propsFactory

```tsx
{
  reverseTransition: {
    type: [Boolean, String],
    default: undefined,
  },
  transition: {
    type: [Boolean, String],
    default: undefined,
  },

  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps(),
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
