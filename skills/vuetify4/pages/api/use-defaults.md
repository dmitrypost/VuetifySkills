---
title: "useDefaults"
nav_title: "useDefaults"
section: "API"
source_url: "https://vuetifyjs.com/en/api/use-defaults"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# useDefaults

Source: https://vuetifyjs.com/en/api/use-defaults

## Agent Use

Use this page when you need the Vuetify 4 API contract for useDefaults, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: composable
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/defaults.ts

## Source Snippets

### composable source

```ts
// Utilities
import { computed, inject, provide, ref, shallowRef, unref, watchEffect } from 'vue'
import { getCurrentInstance } from '@/util/getCurrentInstance'
import { mergeDeep, toKebabCase } from '@/util/helpers'
import { injectSelf } from '@/util/injectSelf'

// Types
import type { ComputedRef, InjectionKey, Ref, VNode } from 'vue'
import type { MaybeRef } from '@/util'

export type DefaultsInstance = undefined | {
  [key: string]: undefined | Record<string, unknown>
  global?: Record<string, unknown>
}

export type DefaultsOptions = Partial<DefaultsInstance>

export const DefaultsSymbol: InjectionKey<Ref<DefaultsInstance>> = Symbol.for('vuetify:defaults')

export function createDefaults (options?: DefaultsInstance): Ref<DefaultsInstance> {
  return ref(options)
}

export function injectDefaults () {
  const defaults = inject(DefaultsSymbol)

  if (!defaults) throw new Error('[Vuetify] Could not find defaults instance')

  return defaults
}

export function provideDefaults (
  defaults?: MaybeRef<DefaultsInstance | undefined>,
  options?: {
    disabled?: MaybeRef<boolean | undefined>
    reset?: MaybeRef<number | string | undefined>
    root?: MaybeRef<boolean | string | undefined>
    scoped?: MaybeRef<boolean | undefined>
  }
) {
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
- [useLayout](use-layout.md)
