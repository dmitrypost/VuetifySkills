---
title: "v-intersect"
nav_title: "v-intersect"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-intersect-directive"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# v-intersect

Source: https://vuetifyjs.com/en/api/v-intersect-directive

## Agent Use

Use this page when you need the Vuetify 4 API contract for v-intersect, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: directive
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/v-intersect.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/directives/intersect/index.ts

## Modifiers

- once: The handler function is only invoked once, the first time the element is visible.
- quiet: Will not invoke the handler function if the element is visible when the IntersectionObserver is created.

## Value

A handler function that is invoked when the element that the directive is attached to enters or leaves the visible browser area, or an object of [IntersectionObserver options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver).

## Source Snippets

### directive source

```ts
// Utilities
import { SUPPORTS_INTERSECTION } from '@/util'

// Types
import type {
  DirectiveBinding,
} from 'vue'

type ObserveHandler = (
  isIntersecting: boolean,
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
) => void

export interface ObserveDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
  value?: ObserveHandler | { handler: ObserveHandler, options?: IntersectionObserverInit }
  modifiers: {
    once?: boolean
    quiet?: boolean
  }
}

function mounted (el: HTMLElement, binding: ObserveDirectiveBinding) {
  if (!SUPPORTS_INTERSECTION) return

  const modifiers = binding.modifiers || {}
  const value = binding.value
  const { handler, options } = typeof value === 'object'
    ? value
    : { handler: value, options: {} }

  const observer = new IntersectionObserver((
    entries: IntersectionObserverEntry[] = [],
    observer: IntersectionObserver
  ) => {
    const _observe = el._observe?.[binding.instance!.$.uid]
    if (!_observe) return // Just in case, should never fire

    const isIntersecting = entries.some(entry => entry.isIntersecting)
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
