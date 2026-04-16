---
title: "VAvatar"
nav_title: "VAvatar"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-avatar"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VAvatar

Source: https://vuetifyjs.com/en/api/v-avatar

## Agent Use

Use this page when you need the Vuetify 4 API contract for VAvatar, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VAvatar.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VAvatar/VAvatar.tsx

## Props

- badge: Wraps the avatar in a [VBadge](/api/v-badge/). When set to `true`, displays a dot badge. Accepts an object of VBadge props for further customization.

## Slots

- badge: Slot for custom badge content. When used, the badge **dot** mode is disabled.

## Source-derived Keys

- Props: badge, start, end, icon, image, text
- Slots: default, badge

## Source Snippets

### propsFactory

```tsx
{
  badge: {
    type: [Boolean, Object] as PropType<boolean | VBadge['$props']>,
    default: false,
  },
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  text: String,

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({ variant: 'flat' } as const),
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
