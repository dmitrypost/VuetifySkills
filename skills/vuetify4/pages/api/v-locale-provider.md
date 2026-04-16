---
title: "VLocaleProvider"
nav_title: "VLocaleProvider"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-locale-provider"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VLocaleProvider

Source: https://vuetifyjs.com/en/api/v-locale-provider

## Agent Use

Use this page when you need the Vuetify 4 API contract for VLocaleProvider, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VLocaleProvider.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VLocaleProvider/VLocaleProvider.tsx

## Props

- fallbackLocale: Specify a fallback locale to use when a locale is not found.
- locale: Specify a locale to use.
- rtl: Specify a RTL mode.

## Source-derived Keys

- Props: locale, fallbackLocale, messages, rtl

## Source Snippets

### propsFactory

```tsx
{
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: undefined,
  },

  ...makeComponentProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
