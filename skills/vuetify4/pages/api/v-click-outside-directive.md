---
title: "v-click-outside"
nav_title: "v-click-outside"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-click-outside-directive"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# v-click-outside

Source: https://vuetifyjs.com/en/api/v-click-outside-directive

## Agent Use

Use this page when you need the Vuetify 4 API contract for v-click-outside, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: directive
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/v-click-outside.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/directives/click-outside/index.ts

## Modifiers

- [string]: Custom modifier keys that can be used to configure directive behavior.

## Value

Takes either a function that is invoked when user clicks outside of the element the directive is attached to, or an object containing `handler`, `closeConditional` and `include` callbacks.

## Source Snippets

### directive source

```ts
// Utilities
import { attachedRoot } from '@/util'

// Types
import type { DirectiveBinding } from 'vue'

interface ClickOutsideBindingArgs {
  handler: (e: MouseEvent) => void
  closeConditional?: (e: Event) => boolean
  include?: () => HTMLElement[]
}

interface ClickOutsideDirectiveBinding extends DirectiveBinding {
  value: ((e: MouseEvent) => void) | ClickOutsideBindingArgs
}

function defaultConditional () {
  return true
}

function checkEvent (e: MouseEvent, el: HTMLElement, binding: ClickOutsideDirectiveBinding): boolean {
  // The include element callbacks below can be expensive
  // so we should avoid calling them when we're not active.
  // Explicitly check for false to allow fallback compatibility
  // with non-toggleable components
  if (!e || checkIsActive(e, binding) === false) return false

  // If we're clicking inside the shadowroot, then the app root doesn't get the same
  // level of introspection as to _what_ we're clicking. We want to check to see if
  // our target is the shadowroot parent container, and if it is, ignore.
  const root = attachedRoot(el)
  if (
    typeof ShadowRoot !== 'undefined' &&
    root instanceof ShadowRoot &&
    root.host === e.target
  ) return false

  // Check if additional elements were passed to be included in check
  // (click must be outside all included elements, if any)
  const elements = ((typeof binding.value === 'object' && binding.value.include) || (() => []))()
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
