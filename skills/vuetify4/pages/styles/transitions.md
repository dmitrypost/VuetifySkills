---
title: "Transitions"
nav_title: "Transitions"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/transitions"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Transitions

Source: https://vuetifyjs.com/en/styles/transitions

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Transitions.

## Overview

Utilize Vuetify's built in CSS and Javascript transitions within components.

## Key Headings

- API
- Examples
- Props
- Custom Origin
- Misc
- Expand x
- Fab
- Fade
- Scale
- Scroll x
- Scroll y
- Slide x
- Slide y
- Todo list
- Create your own
- As a component
- As a prop

## Extracted Guidance

Smooth animations help make a UI feel great. Using Vue's transition system and re-usable functional components, you can easily control the motion of your application. Most components can have their transition altered through the **transition** prop.

| Name | Description | | - | - | | [v-expand-transition](/api/v-expand-transition/) | The expand transition is used in Expansion Panels and List Groups. There is also a horizontal version available with `v-expand-x-transition`. | | [v-expand-both-transition](/api/v-both-expand-transition/) | Used to expand content in both directions. | | [v-fab-transition](/api/v-fab-transition/) | An example of the fab transition can be found in the `v-speed-dial` component. | | [v-fade-transition](/api/v-fade-transition/) | An example of the fade transition can be found on the Carousel component. | | [v-scale-transition](/api/v-scale-transition/) | Many of Vuetify's components contain a **transition** prop which allows you to specify your own. | | [v-scroll-x-transition](/api/v-scroll-x-transition/) | Scroll X transitions continue along the horizontal axis. | | [v-scroll-x-reverse-transition](/api/v-scroll-x-reverse-transition/) | Scroll X reverse transitions continue along the horizontal axis. | | [v-scroll-y-transition](/api/v-scroll-y-transition/) | Scroll Y transitions continue along the vertical axis. | | [v-scroll-y-reverse-transition](/api/v-scroll-y-reverse-transition/) | Scroll Y reverse transitions continue along the vertical axis. | | [v-slide-x-transition](/api/v-slide-x-transition/) | Slide X transitions slide in from the left. | | [v-slide-x-reverse-transition](/api/v-slide-x-reverse-transition/) | Slide X reverse transitions slide in from the right. | | [v-slide-y-transition](/api/v-slide-y-transition/) | Slide Y transitions slide in from the top. | | [v-slide-y-reverse-transition](/api/v-slide-y-reverse-transition/) | Slide Y reverse transitions slide in from the bottom. | | [v-dialog-top-transition](/api/v-dialog-top-transition/) | Dialog transitions slide in from the top. | | [v-dialog-bottom-transition](/api/v-dialog-bottom-transition/) | Dialog transitions slide in from the bottom. |

<!-- ### Props

Programmatically control the transition origin with a simple prop.

The expand transition is used in Expansion Panels and List Groups. There is also a horizontal version available with `v-expand-x-transition`.

When using `v-expand-transition` or `v-expand-x-transition`, the transition works by animating an element’s height or width between `0` and its natural size. Because of this, applying **padding directly to the transitioning element** (such as `v-alert`) can cause jittery or uneven animations.

If you need padding, wrap your content in a container element (like a `div` or `v-card`) and apply the transition to that container instead. This ensures the expand transition runs smoothly, since the wrapper div has no conflicting padding or margin.

An example of the fab transition can be found in the `v-speed-dial` component.

## Code Patterns

```js
import { createCssTransition } from 'vuetify/util/transitions';

createCssTransition('my-transition')
```

```scss
.my-transition {
  &-enter-active,
  &-leave-active {
    position: absolute;
    transition: 1s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
```

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
- [Border radius](border-radius.md)
