---
title: "v-touch"
nav_title: "v-touch"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-touch-directive"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# v-touch

Source: https://vuetifyjs.com/en/api/v-touch-directive

## Agent Use

Use this page when you need the Vuetify 4 API contract for v-touch, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: directive
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/v-touch.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/directives/touch/index.ts

## Modifiers

- [string]: Custom modifier keys that can be used to configure directive behavior.

## Value

The value is always an object. The `start`, `end`, `move`, `left`, `right`, `up` and `down` functions can be used to invoke a function when the corresponding touch action occurs. If the `parent` option attaches the touch listeners to the parent element instead of the element the directive is used on. The `options` object is described [here](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

## Source Snippets

### directive source

```ts
// Utilities
import { keys } from '@/util'

// Types
import type {
  DirectiveBinding,
} from 'vue'

export interface TouchHandlers {
  start?: (wrapperEvent: { originalEvent: TouchEvent } & TouchData) => void
  end?: (wrapperEvent: { originalEvent: TouchEvent } & TouchData) => void
  move?: (wrapperEvent: { originalEvent: TouchEvent } & TouchData) => void
  left?: (wrapper: TouchData) => void
  right?: (wrapper: TouchData) => void
  up?: (wrapper: TouchData) => void
  down?: (wrapper: TouchData) => void
}

export interface TouchData {
  touchstartX: number
  touchstartY: number
  touchmoveX: number
  touchmoveY: number
  touchendX: number
  touchendY: number
  offsetX: number
  offsetY: number
}

export type TouchWrapper = TouchHandlers & TouchData

export interface TouchValue extends TouchHandlers {
  parent?: boolean
  options?: AddEventListenerOptions
}

export interface TouchStoredHandlers {
  touchstart: (e: TouchEvent) => void
  touchend: (e: TouchEvent) => void
  touchmove: (e: TouchEvent) => void
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
