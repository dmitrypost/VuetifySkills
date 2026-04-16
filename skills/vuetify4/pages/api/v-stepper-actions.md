---
title: "VStepperActions"
nav_title: "VStepperActions"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-stepper-actions"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VStepperActions

Source: https://vuetifyjs.com/en/api/v-stepper-actions

## Agent Use

Use this page when you need the Vuetify 4 API contract for VStepperActions, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VStepperActions.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VStepper/VStepperActions.tsx

## Props

- nextText: The text used for the Next button.
- prevText: The text used for the Prev button.

## Events

- click:next: Event emitted when clicking the next button.
- click:prev: Event emitted when clicking the prev button.

## Slots

- next: Slot for customizing the next step functionality
- prev: Slot for customizing the prev step functionality

## Source-derived Keys

- Props: color, disabled, prevText, nextText
- Events: click:prev, click:next
- Slots: prev, next

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  disabled: {
    type: [Boolean, String] as PropType<boolean | 'next' | 'prev'>,
    default: false,
  },
  prevText: {
    type: String,
    default: '$vuetify.stepper.prev',
  },
  nextText: {
    type: String,
    default: '$vuetify.stepper.next',
  },
}
```

### slots

```tsx
{
  prev: {
    props: { onClick: () => void }
  }
  next: {
    props: { onClick: () => void }
  }
}
```

### emits

```tsx
{
    'click:prev': () => true,
    'click:next': () => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
