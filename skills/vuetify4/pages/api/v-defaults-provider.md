---
title: "VDefaultsProvider"
nav_title: "VDefaultsProvider"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-defaults-provider"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDefaultsProvider

Source: https://vuetifyjs.com/en/api/v-defaults-provider

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDefaultsProvider, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDefaultsProvider.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDefaultsProvider/VDefaultsProvider.tsx

## Props

- defaults: Specify new default prop values for components. Keep in mind that this will be merged with previously defined values.
- disabled: Turns off all calculations of new default values for improved performance in situations where defaults propagation isn't necessary.
- reset: Reset the default values up the nested chain by {n} amount.
- root: Force current defaults to match the application root defaults.
- scoped: Prevents the ability for default values to be inherited from parent components.

## Source-derived Keys

- Props: defaults, disabled, reset, root, scoped

## Source Snippets

### propsFactory

```tsx
{
  defaults: Object as PropType<DefaultsOptions>,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean,
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
