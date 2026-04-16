---
title: "v-scroll"
nav_title: "v-scroll"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-scroll-directive"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# v-scroll

Source: https://vuetifyjs.com/en/api/v-scroll-directive

## Agent Use

Use this page when you need the Vuetify 4 API contract for v-scroll, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: directive
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/v-scroll.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/directives/scroll/index.ts

## Argument

Specify a query selector to attach the scroll event listener to. If no argument is provided then it is attached to the window object.

## Modifiers

- self: By default the scroll event listener is attached to the argument provided to the directive, interpreted as a query selector. If no argument is provided then it is attached to the window object. If this modifier is used then it is instead attached to the element the directive is used on.

## Value

A handler function that is invoked whenever the target element is scrolled, or an object of [event listener options](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

## Source Snippets

### directive source

```ts
// Types
import type { DirectiveBinding } from 'vue'

interface ScrollDirectiveBinding extends Omit<DirectiveBinding, 'modifiers'> {
  value: EventListener | {
    handler: EventListener
    options?: AddEventListenerOptions
  } | EventListenerObject & { options?: AddEventListenerOptions }
  modifiers?: {
    self?: boolean
  }
}

function mounted (el: HTMLElement, binding: ScrollDirectiveBinding) {
  const { self = false } = binding.modifiers ?? {}
  const value = binding.value
  const options = (typeof value === 'object' && value.options) || { passive: true }
  const handler = typeof value === 'function' || 'handleEvent' in value ? value : value.handler

  const target = self
    ? el
    : binding.arg
      ? document.querySelector(binding.arg)
      : window

  if (!target) return

  target.addEventListener('scroll', handler, options)

  el._onScroll = Object(el._onScroll)
  el._onScroll![binding.instance!.$.uid] = {
    handler,
    options,
    // Don't reference self
    target: self ? undefined : target,
  }
}

function unmounted (el: HTMLElement, binding: ScrollDirectiveBinding) {
  if (!el._onScroll?.[binding.instance!.$.uid]) return
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
