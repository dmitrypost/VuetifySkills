---
title: "useGoTo"
nav_title: "useGoTo"
section: "API"
source_url: "https://vuetifyjs.com/en/api/use-go-to"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# useGoTo

Source: https://vuetifyjs.com/en/api/use-go-to

## Agent Use

Use this page when you need the Vuetify 4 API contract for useGoTo, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: composable
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/useGoTo.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/goto.ts

## Exposed

- rtl: The current RTL state.
- options: The current goTo scrolling options.

## Source Snippets

### composable source

```ts
// Utilities
import { inject, toRef } from 'vue'
import { useRtl } from './locale'
import { clamp, consoleWarn, easingPatterns, mergeDeep, PREFERS_REDUCED_MOTION, refElement } from '@/util'

// Types
import type { ComponentPublicInstance, InjectionKey, Ref } from 'vue'
import type { LocaleInstance, RtlInstance } from './locale'
import type { EasingFunction } from '@/util'

export interface GoToInstance {
  rtl: Ref<boolean>
  options: InternalGoToOptions
}

export interface InternalGoToOptions {
  container: ComponentPublicInstance | HTMLElement | string
  duration: number
  layout: boolean
  offset: number
  easing: string | EasingFunction
  patterns: Record<string, EasingFunction>
}

export type GoToOptions = Partial<InternalGoToOptions>

export const GoToSymbol: InjectionKey<GoToInstance> = Symbol.for('vuetify:goto')

function genDefaults () {
  return {
    container: undefined,
    duration: 300,
    layout: false,
    offset: 0,
    easing: 'easeInOutCubic' satisfies keyof typeof easingPatterns,
    patterns: easingPatterns,
  }
}

function getContainer (el?: ComponentPublicInstance | HTMLElement | string) {
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useHotkey](use-hotkey.md)
- [useLayout](use-layout.md)
