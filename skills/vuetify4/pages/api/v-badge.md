---
title: "VBadge"
nav_title: "VBadge"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-badge"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VBadge

Source: https://vuetifyjs.com/en/api/v-badge

## Agent Use

Use this page when you need the Vuetify 4 API contract for VBadge, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VBadge.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VBadge/VBadge.tsx

## Props

- bordered: Applies a **2px** by default and **1.5px** border around the badge when using the **dot** property.
- content: Text content to show in the badge.
- dot: Reduce the size of the badge and hide its contents.
- dotSize: Sets the size of the **dot** variant (includes border when using with **bordered**)
- floating: Move the badge further away from the slotted content. Equivalent to an 8px offset.
- inline: Display as an inline block instead of absolute position. **location**, **floating**, and **offset** will have no effect.
- label: The **aria-label** used for the badge.
- max: Sets the maximum number allowed when using the **content** prop with a `number` like value. If the content number exceeds the maximum value, a `+` suffix is added.
- offsetX: Offset the badge on the x-axis.
- offsetY: Offset the badge on the y-axis.
- modelValue: Controls whether the component is visible or hidden.

## Slots

- badge: The slot used for the badge's content.

## Source-derived Keys

- Props: bordered, color, content, dot, dotSize, floating, icon, inline, label, max, modelValue, offsetX, offsetY, textColor
- Slots: default, badge

## Source Snippets

### propsFactory

```tsx
{
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  dotSize: [Number, String],
  floating: Boolean,
  icon: IconValue,
  inline: Boolean,
  label: {
    type: String,
    default: '$vuetify.badge',
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: true,
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,

  ...makeComponentProps(),
  ...makeLocationProps({ location: 'top end' } as const),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeTransitionProps({ transition: 'scale-rotate-transition' }),
  ...makeDimensionProps(),
}
```

### slots

```tsx
{
  default: never
  badge: never
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
