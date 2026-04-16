---
title: "VIconBtn"
nav_title: "VIconBtn"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-icon-btn"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VIconBtn

Source: https://vuetifyjs.com/en/api/v-icon-btn

## Agent Use

Use this page when you need the Vuetify 4 API contract for VIconBtn, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VIconBtn.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VIconBtn/VIconBtn.tsx

## Props

- active: When undefined (default), the component utilizes its default variant, otherwise it will use the activeVariant if active is true, or the baseVariant if active is false.
- activeIcon: When active is a boolean, this icon is used when active is true.
- activeVariant: When active is a boolean, this variant is used when active is true.
- baseVariant: When active is a boolean, this variant is used when active is false.
- hideOverlay: Hides overlay from being displayed when active or focused.
- iconColor: Explicit color applied to the icon.
- loading: Displays circular progress bar in place of the icon.
- readonly: Puts the button in a readonly state. Cannot be clicked or navigated to by keyboard.
- rotate: The rotation of the icon in degrees.
- sizes: An array of tuples that define the button sizes for each named size.

## Events

- update:active: Event that is emitted when the active state changes.

## Source-derived Keys

- Props: active, activeColor, activeIcon, activeVariant, baseVariant, disabled, height, width, hideOverlay, icon, iconColor, loading, opacity, readonly, rotate, size, sizes, text
- Events: update:active
- Slots: default, loader

## Source Snippets

### propsFactory

```tsx
{
  active: {
    type: Boolean,
    default: undefined,
  },
  activeColor: String,
  activeIcon: [String, Function, Object] as PropType<IconValue>,
  activeVariant: String as PropType<Variant>,
  baseVariant: {
    type: String as PropType<Variant>,
    default: 'tonal',
  },
  disabled: Boolean,
  height: [Number, String],
  width: [Number, String],
  hideOverlay: Boolean,
  icon: [String, Function, Object] as PropType<IconValue>,
  iconColor: String,
  loading: Boolean,
  opacity: [Number, String],
  readonly: Boolean,
  rotate: [Number, String],
  size: {
    type: [Number, String] as PropType<VIconBtnSizes | number | string>,
    default: 'default',
  },
  sizes: {
    type: Array as PropType<[VIconBtnSizes, number][]>,
    default: () => ([
      ['x-small', 16],
      ['small', 24],
      ['default', 40],
      ['large', 48],
      ['x-large', 56],
    ]),
  },
  text: {
    type: [String, Number, Boolean],
    default: undefined,
  },

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeIconSizeProps(),
  ...makeRoundedProps(),
  ...makeTagProps({ tag: 'button' }),
  ...makeThemeProps(),
  ...makeVariantProps({ variant: 'flat' } as const),
}
```

### slots

```tsx
{
  default: never
  loader: never
}
```

### emits

```tsx
{
    'update:active': (value: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
