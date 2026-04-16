---
title: "VBreadcrumbs"
nav_title: "VBreadcrumbs"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-breadcrumbs"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VBreadcrumbs

Source: https://vuetifyjs.com/en/api/v-breadcrumbs

## Agent Use

Use this page when you need the Vuetify 4 API contract for VBreadcrumbs, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VBreadcrumbs.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBreadcrumbs/VBreadcrumbs.tsx

## Props

- divider: Specifies the dividing character between items.

## Slots

- divider: The slot used for dividers.
- prepend: The slot used for prepend content.
- title: The slot used to display the title of each breadcrumb.

## Source-derived Keys

- Props: activeClass, activeColor, bgColor, color, disabled, divider, icon, items

## Source Snippets

### propsFactory

```tsx
{
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: '/',
  },
  icon: IconValue,
  items: {
    type: Array as PropType<readonly BreadcrumbItem[]>,
    default: () => ([]),
  },

  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeTagProps({ tag: 'ul' }),
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
