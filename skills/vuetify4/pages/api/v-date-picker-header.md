---
title: "VDatePickerHeader"
nav_title: "VDatePickerHeader"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-date-picker-header"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VDatePickerHeader

Source: https://vuetifyjs.com/en/api/v-date-picker-header

## Agent Use

Use this page when you need the Vuetify 4 API contract for VDatePickerHeader, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VDatePickerHeader.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VDatePicker/VDatePickerHeader.tsx

## Props

- header: Sets the header content.
- transition: Sets the transition when the header changes.

## Source-derived Keys

- Props: appendIcon, color, header, transition, onClick
- Events: click, click:append
- Slots: prepend, default, append

## Source Snippets

### propsFactory

```tsx
{
  appendIcon: IconValue,
  color: String,
  header: String,
  transition: String,
  onClick: EventProp<[MouseEvent]>(),
}
```

### slots

```tsx
{
  prepend: never
  default: never
  append: never
}
```

### emits

```tsx
{
    click: () => true,
    'click:append': () => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
