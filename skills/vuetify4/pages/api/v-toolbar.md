---
title: "VToolbar"
nav_title: "VToolbar"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-toolbar"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VToolbar

Source: https://vuetifyjs.com/en/api/v-toolbar

## Agent Use

Use this page when you need the Vuetify 4 API contract for VToolbar, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VToolbar.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VToolbar/VToolbar.tsx

## Props

- absolute: Applies position: absolute to the component.
- collapse: Puts the toolbar into a collapsed state reducing its maximum width.
- collapsePosition: Specifies side to attach the collapsed toolbar.
- extended: Use this prop to increase the height of the toolbar _without_ using the `extension` slot for adding content. May be used in conjunction with the **extension-height** prop. When false, will not show extension slot even if content is present.
- extensionHeight: Specify an explicit height for the `extension` slot.
- flat: Removes the toolbar's box-shadow.
- floating: Applies **display: inline-flex** to the component.
- height: Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. **prominent**, **dense**, **extended**, etc.
- image: Specifies a [v-img](/components/images) as the component's background.
- location: Specifies the component's location. Can combine by using a space separated string. Requires the **absolute** prop.

## Slots

- extension: Slot positioned directly under the main content of the toolbar. Height of this slot can be set explicitly with the **extension-height** prop. If this slot has no content, the **extended** prop may be used instead.
- image: Expects the [v-img](/components/images) component. Scoped **props** should be applied with `v-bind="props"`.

## Exposed

- contentHeight: The current height of the component's content.
- extensionHeight: The current height of the component's extension slot.

## Source-derived Keys

- Props: absolute, collapse, collapsePosition, color, density, extended, extensionHeight, flat, floating, height, image, title
- Slots: default, image, prepend, append, title, extension

## Source Snippets

### propsFactory

```tsx
{
  absolute: Boolean,
  collapse: Boolean,
  collapsePosition: {
    type: String as PropType<'start' | 'end'>,
    default: 'start',
  },
  color: String,
  density: {
    type: String as PropType<Density>,
    default: 'default',
    validator: (v: any) => allowedDensities.includes(v),
  },
  extended: {
    type: Boolean,
    default: null,
  },
  extensionHeight: {
    type: [Number, String],
    default: 48,
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64,
  },
  image: String,
  title: String,

  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({ tag: 'header' }),
  ...makeThemeProps(),
}
```

### slots

```tsx
{
  default: never
  image: never
  prepend: never
  append: never
  title: never
  extension: never
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
