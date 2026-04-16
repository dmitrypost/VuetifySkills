---
title: "VFab"
nav_title: "VFab"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-fab"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VFab

Source: https://vuetifyjs.com/en/api/v-fab

## Agent Use

Use this page when you need the Vuetify 4 API contract for VFab, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VFab.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VFab/VFab.tsx

## Props

- app: If true, attaches to the closest layout and positions according to the value of **location**.
- layout: If true, will effect layout dimensions based on size and position.
- appear: Used to control the animation of the FAB.
- extended: An alternate style for the FAB that expects text.
- location: The location of the fab relative to the layout. Only works when using **app**.
- offset: Translates the Fab up or down, depending on if location is set to **top** or **bottom**.

## Source-derived Keys

- Props: app, appear, extended, layout, offset, modelValue
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: true,
  },

  ...omit(makeVBtnProps({ active: true }), ['location', 'spaced']),
  ...makeLayoutItemProps(),
  ...makeLocationProps(),
  ...makeTransitionProps({ transition: 'fab-transition' }),
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
