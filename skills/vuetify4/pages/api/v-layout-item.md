---
title: "VLayoutItem"
nav_title: "VLayoutItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-layout-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VLayoutItem

Source: https://vuetifyjs.com/en/api/v-layout-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VLayoutItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VLayoutItem.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VLayout/VLayoutItem.tsx

## Props

- position: The position of the item.

## Source-derived Keys

- Props: position, size, modelValue

## Source Snippets

### propsFactory

```tsx
{
  position: {
    type: String as PropType<'top' | 'right' | 'bottom' | 'left'>,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 300,
  },
  modelValue: Boolean,

  ...makeComponentProps(),
  ...makeLayoutItemProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
