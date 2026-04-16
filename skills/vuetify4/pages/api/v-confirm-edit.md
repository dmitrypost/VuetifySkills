---
title: "VConfirmEdit"
nav_title: "VConfirmEdit"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-confirm-edit"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VConfirmEdit

Source: https://vuetifyjs.com/en/api/v-confirm-edit

## Agent Use

Use this page when you need the Vuetify 4 API contract for VConfirmEdit, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VConfirmEdit.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VConfirmEdit/VConfirmEdit.tsx

## Props

- modelValue: Represents the committed v-model value
- cancelText: Text for the cancel button
- okText: Text for the ok button
- hideActions: Prevent showing the default actions buttons. Does not affect `<component :is="actions" />`
- disabled: Control the disabled state of action buttons. If not provided, internal logic will be used to determine the disabled state.

## Events

- save: The event emitted when the user clicks the Save button
- cancel: The event emitted when the user clicks the Cancel button

## Exposed

- save: Manually commit the change
- cancel: Manually cancel the change

## Source-derived Keys

- Props: modelValue, color, cancelText, okText, disabled, hideActions
- Events: cancel, save, update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: '$vuetify.confirmEdit.cancel',
  },
  okText: {
    type: String,
    default: '$vuetify.confirmEdit.ok',
  },
  disabled: {
    type: [Boolean, Array] as PropType<boolean | ('save' | 'cancel')[]>,
    default: undefined,
  },
  hideActions: Boolean,
}
```

### emits

```tsx
{
    cancel: () => true,
    save: (value: any) => true,
    'update:modelValue': (value: any) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
