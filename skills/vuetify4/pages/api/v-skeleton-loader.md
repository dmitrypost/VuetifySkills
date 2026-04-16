---
title: "VSkeletonLoader"
nav_title: "VSkeletonLoader"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-skeleton-loader"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VSkeletonLoader

Source: https://vuetifyjs.com/en/api/v-skeleton-loader

## Agent Use

Use this page when you need the Vuetify 4 API contract for VSkeletonLoader, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VSkeletonLoader.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VSkeletonLoader/VSkeletonLoader.tsx

## Props

- boilerplate: Remove the loading animation from the skeleton.
- loading: Applies a loading animation with a on-hover loading cursor. A value of **false** will only work when there is content in the `default` slot.
- loadingText: aria-label for the element in a loading state.
- type: A string delimited list of skeleton components to create such as `type="text@3"` or `type="card, list-item"`. Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as **article@3** and **paragraph@2** which will generate 3 _article_ skeletons and 2 _paragraph_ skeletons. Please see below for a list of available pre-defined options.

## Source-derived Keys

- Props: boilerplate, color, loading, loadingText, type

## Source Snippets

### propsFactory

```tsx
{
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: '$vuetify.loading',
  },
  type: {
    type: [String, Array] as PropType<
      | VSkeletonLoaderType | (string & {})
      | ReadonlyArray<VSkeletonLoaderType | (string & {})>
    >,
    default: 'ossein',
  },

  ...makeDimensionProps(),
  ...makeElevationProps(),
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
