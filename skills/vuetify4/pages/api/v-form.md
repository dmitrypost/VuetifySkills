---
title: "VForm"
nav_title: "VForm"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-form"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VForm

Source: https://vuetifyjs.com/en/api/v-form

## Agent Use

Use this page when you need the Vuetify 4 API contract for VForm, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VForm.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VForm/VForm.tsx

## Events

- submit: Emitted when form is submitted.
- update:modelValue: Event emitted when the form's validity changes.

## Exposed

- errors: Contains all current form input errors.
- isDisabled: Indicates if form is disabled or not.
- isReadonly: Indicates if form is readonly or not.
- isValid: Indicates if form is valid or not.
- isValidating: Indicates if form is currently being validated or not.
- items: Array of all registered inputs.
- reset: Resets validation of all registered inputs, and clears their values.
- resetValidation: Resets validation of all registered inputs without modifying their values.
- validate: Validates all registered inputs.

## Source-derived Keys

- Events: update:modelValue, submit

## Source Snippets

### propsFactory

```tsx
{
  ...makeComponentProps(),
  ...makeFormProps(),
}
```

### emits

```tsx
{
    'update:modelValue': (val: boolean | null) => true,
    submit: (e: SubmitEventPromise) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
