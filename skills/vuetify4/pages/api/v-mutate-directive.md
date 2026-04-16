---
title: "v-mutate"
nav_title: "v-mutate"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-mutate-directive"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# v-mutate

Source: https://vuetifyjs.com/en/api/v-mutate-directive

## Agent Use

Use this page when you need the Vuetify 4 API contract for v-mutate, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: directive
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/v-mutate.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/directives/mutate/index.ts

## Modifiers

- attr: Sets the value of [attributes](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributes) to true.
- char: Sets the value of [characterData](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/characterData) to true.
- child: Sets the value of [childList](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/childList) to true.
- immediate: The provided handler function is invoked immediately when directive is attached to element.
- once: The provided handler function is only invoked once.
- sub: Sets the value of [subtree](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe#Parameters) to true.

## Value

A handler function that is invoked when the element that the directive is attached to is mutated, or an object of [MutationObserver options](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe).

## Source Snippets

### directive source

```ts
// Types
import type { DirectiveBinding } from 'vue'
import type { MutationOptions } from '@/composables/mutationObserver'

export interface MutationDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
  value: MutationCallback | { handler: MutationCallback, options?: MutationObserverInit }
  modifiers: MutationOptions
}

function mounted (el: HTMLElement, binding: MutationDirectiveBinding) {
  const modifiers = binding.modifiers || {}
  const value = binding.value
  const { once, immediate, ...modifierKeys } = modifiers
  const defaultValue = !Object.keys(modifierKeys).length

  const { handler, options } = typeof value === 'object'
    ? value
    : {
      handler: value,
      options: {
        attributes: modifierKeys?.attr ?? defaultValue,
        characterData: modifierKeys?.char ?? defaultValue,
        childList: modifierKeys?.child ?? defaultValue,
        subtree: modifierKeys?.sub ?? defaultValue,
      },
    }

  const observer = new MutationObserver((
    mutations: MutationRecord[] = [],
    observer: MutationObserver
  ) => {
    handler?.(mutations, observer)

    if (once) unmounted(el, binding)
  })

  if (immediate) handler?.([], observer)

  el._mutate = Object(el._mutate)
  el._mutate![binding.instance!.$.uid] = { observer }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
