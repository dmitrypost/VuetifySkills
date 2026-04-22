---
title: "VBreadcrumbsItem"
nav_title: "VBreadcrumbsItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-breadcrumbs-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VBreadcrumbsItem

Source: https://vuetifyjs.com/en/api/v-breadcrumbs-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VBreadcrumbsItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VBreadcrumbsItem.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBreadcrumbs/VBreadcrumbsItem.tsx

## Source-derived Keys

- Props: active, activeClass, activeColor, color, disabled, title

## Source Snippets

### propsFactory

```tsx
{
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,

  ...makeComponentProps(),
  ...pick(makeDimensionProps(), ['width', 'maxWidth']),
  ...makeRouterProps(),
  ...makeTagProps({ tag: 'li' }),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
