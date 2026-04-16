---
title: "VStepperVerticalItem"
nav_title: "VStepperVerticalItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-stepper-vertical-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VStepperVerticalItem

Source: https://vuetifyjs.com/en/api/v-stepper-vertical-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VStepperVerticalItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VStepperVerticalItem.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VStepperVertical/VStepperVerticalItem.tsx

## Events

- click:finish: Event emitted when clicking the finish button
- click:next: Event emitted when clicking the next button
- click:prev: Event emitted when clicking the previous button

## Slots

- icon: Slot to override the icon
- next: Slot to override the next button
- prev: Slot to override the previous button

## Source-derived Keys

- Props: hideActions
- Events: click:next, click:prev, click:finish

## Source Snippets

### propsFactory

```tsx
{
  hideActions: Boolean,

  ...makeStepperItemProps(),
  ...omit(makeVExpansionPanelProps({
    expandIcon: '',
    collapseIcon: '',
  }), ['hideActions']),
}
```

### emits

```tsx
{
    'click:next': () => true,
    'click:prev': () => true,
    'click:finish': () => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
