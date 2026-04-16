---
title: "v-resize"
nav_title: "v-resize"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-resize-directive"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# v-resize

Source: https://vuetifyjs.com/en/api/v-resize-directive

## Agent Use

Use this page when you need the Vuetify 4 API contract for v-resize, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: directive
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/v-resize.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/directives/resize/index.ts

## Modifiers

- active: By default the resize event listener is added to window with the `passive` option. This modifier sets `passive` to **false**.
- quiet: By default the provided handler function is invoked once when the directive is attached to the element. This modifier disables that behavior.

## Value

A function that will be invoked each time the browser window is resized.

## Source Snippets

### directive source

```ts
// Types
import type { DirectiveBinding } from 'vue'

interface ResizeDirectiveBinding extends Omit<DirectiveBinding, 'modifiers'> {
  value: () => void
  modifiers?: {
    active?: boolean
    quiet?: boolean
  }
}

function mounted (el: HTMLElement, binding: ResizeDirectiveBinding) {
  const handler = binding.value
  const options: AddEventListenerOptions = {
    passive: !binding.modifiers?.active,
  }

  window.addEventListener('resize', handler, options)

  el._onResize = Object(el._onResize)
  el._onResize![binding.instance!.$.uid] = {
    handler,
    options,
  }

  if (!binding.modifiers?.quiet) {
    handler()
  }
}

function unmounted (el: HTMLElement, binding: ResizeDirectiveBinding) {
  if (!el._onResize?.[binding.instance!.$.uid]) return

  const { handler, options } = el._onResize[binding.instance!.$.uid]!

  window.removeEventListener('resize', handler, options)

  delete el._onResize[binding.instance!.$.uid]
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
