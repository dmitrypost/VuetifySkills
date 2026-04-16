---
title: "VLazy"
nav_title: "VLazy"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-lazy"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VLazy

Source: https://vuetifyjs.com/en/api/v-lazy

## Agent Use

Use this page when you need the Vuetify 4 API contract for VLazy, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VLazy.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VLazy/VLazy.tsx

## Props

- options: Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor.

## Source-derived Keys

- Props: modelValue, options
- Events: update:modelValue

## Source Snippets

### propsFactory

```tsx
{
  modelValue: Boolean,
  options: {
    type: Object as PropType<IntersectionObserverInit>,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: undefined,
      rootMargin: undefined,
      threshold: undefined,
    }),
  },

  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps(),
  ...makeTransitionProps({ transition: 'fade-transition' }),
}
```

### emits

```tsx
{
    'update:modelValue': (value: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
