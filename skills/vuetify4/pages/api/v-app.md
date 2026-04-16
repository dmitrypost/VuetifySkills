---
title: "VApp"
nav_title: "VApp"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-app"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VApp

Source: https://vuetifyjs.com/en/api/v-app

## Agent Use

Use this page when you need the Vuetify 4 API contract for VApp, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VApp.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VApp/VApp.tsx

## Exposed

- theme: The instance of the injected active theme.

## Source Snippets

### propsFactory

```tsx
{
  ...makeComponentProps(),
  ...omit(makeLayoutProps(), ['fullHeight']),
  ...makeThemeProps(),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
