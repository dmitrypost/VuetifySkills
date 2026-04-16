---
title: "v-ripple"
nav_title: "v-ripple"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-ripple-directive"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# v-ripple

Source: https://vuetifyjs.com/en/api/v-ripple-directive

## Agent Use

Use this page when you need the Vuetify 4 API contract for v-ripple, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: directive
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/v-ripple.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/directives/ripple/index.ts

## Modifiers

- center: Makes it so that the ripple originates from the center of the element, instead where the user clicked on it.
- circle: Changes the ripple behavior to better match circular elements.
- stop: Prevents ripples from being triggered on any other elements when the click event is bubbling up.

## Value

An object containing options for the ripple effect. `class` applies a custom class to the ripple, and can be used for changing color. `center` forces the ripple to originate from the center of the target instead of the cursor position.

## Source Snippets

### directive source

```ts
// Styles
import './VRipple.sass'

// Utilities
import { isObject } from '@/util'
import { Box, getTargetBox } from '@/util/box'

// Types
import type { DirectiveBinding } from 'vue'

const stopSymbol = Symbol('rippleStop')

type VuetifyRippleEvent = (MouseEvent | TouchEvent | KeyboardEvent) & { [stopSymbol]?: boolean }

const DELAY_RIPPLE = 80

function transform (el: HTMLElement, value: string) {
  el.style.transform = value
  el.style.webkitTransform = value
}

interface RippleOptions {
  class?: string
  center?: boolean
  circle?: boolean
}

export interface RippleDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
  value?: boolean | {
    class?: string
    keys?: string[]
  }
  modifiers: {
    center?: boolean
    circle?: boolean
    stop?: boolean
  }
}

function isTouchEvent (e: VuetifyRippleEvent): e is TouchEvent {
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
