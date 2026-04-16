---
title: "VImg"
nav_title: "VImg"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-img"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VImg

Source: https://vuetifyjs.com/en/api/v-img

## Agent Use

Use this page when you need the Vuetify 4 API contract for VImg, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VImg.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VImg/VImg.tsx

## Props

- absolute: Applies position: absolute to the component.
- alt: Alternate text for screen readers. Leave empty for decorative images.
- aspectRatio: Calculated as `width/height`, so for a 1920x1080px image this will be `1.7778`. Will be calculated automatically if omitted.
- cover: Resizes the background image to cover the entire container.
- draggable: Controls the `draggable` behavior of the image. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable).
- lazySrc: Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail. Has a slight blur filter applied.  
NOTE: This prop has no effect unless either `height` or `aspect-ratio` are provided.
- crossorigin: Specify that images should be fetched with CORS enabled [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#crossorigin)
- position: Applies [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) styles to the image and placeholder elements.
- referrerpolicy: Define which referrer is sent when fetching the resource [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy)
- options: Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor.
- sizes: For use with `srcset`, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes).
- src: The image URL. This prop is mandatory.
- srcset: A set of alternate images to use based on device size. [Read more...](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset).
- transition: The transition to use when switching from `lazy-src` to `src`. Can be one of the [built in](/styles/transitions/) or custom transition.
- gradient: The gradient to apply to the image. Only supports [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) syntax, anything else should be done with classes.
- imageClass: Applies CSS classes to the inner `<img>` element.

## Events

- error: Emitted if the image fails to load.
- load: Emitted when the image is loaded.
- loadstart: Emitted when the image starts to load.

## Slots

- placeholder: Display an overlay while the image is loading.
- error: Will be shown if the image fails to load, replacing the placeholder slot.
- sources: A list of `<source>` elements. If this slot is used v-img will render a `<picture>` instead of `<img>`.

## Exposed

- currentSrc: The current source of the image. This is the image that is currently being displayed. This is useful for determining if the image is loading or not.
- image: The image element.
- naturalHeight: The natural height of the image.
- naturalWidth: The natural width of the image.
- state: The current state of the image. This is useful for determining if the image is loading or not.

## Source-derived Keys

- Props: absolute, alt, cover, color, draggable, eager, gradient, imageClass, lazySrc, options, sizes, src, crossorigin, referrerpolicy, srcset, position
- Events: loadstart, load, error
- Slots: default, placeholder, error, sources

## Source Snippets

### propsFactory

```tsx
{
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String] as PropType<boolean | 'true' | 'false'>,
    default: undefined,
  },
  eager: Boolean,
  gradient: String,
  imageClass: null,
  lazySrc: String,
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
  sizes: String,
  src: {
    type: [String, Object] as PropType<string | srcObject>,
    default: '',
  },
  crossorigin: String as PropType<'' | 'anonymous' | 'use-credentials'>,
  referrerpolicy: String as PropType<
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
  >,
  srcset: String,
  position: String,

  ...makeVResponsiveProps(),
  ...makeComponentProps(),
  ...makeRoundedProps(),
  ...makeTransitionProps(),
}
```

### slots

```tsx
{
  default: never
  placeholder: never
  error: never
  sources: never
}
```

### emits

```tsx
{
    loadstart: (value: string | undefined) => true,
    load: (value: string | undefined) => true,
    error: (value: string | undefined) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
