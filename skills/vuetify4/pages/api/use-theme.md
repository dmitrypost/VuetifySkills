---
title: "useTheme"
nav_title: "useTheme"
section: "API"
source_url: "https://vuetifyjs.com/en/api/use-theme"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# useTheme

Source: https://vuetifyjs.com/en/api/use-theme

## Agent Use

Use this page when you need the Vuetify 4 API contract for useTheme, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: composable
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/useTheme.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/theme.ts

## Exposed

- change: Change to a specific theme.
- toggle: Toggle between two themes.
- cycle: Cycle between all or a subset of themes.
- computedThemes: Object containing all parsed theme definitions.
- current: Current theme object.
- global: Reference to the global theme instance.
- isDisabled: Indicates if theming is disabled.
- isSystem: Indicates if the current theme was resolved from the system preference (`prefers-color-scheme`).
- name: Name of current theme.
- prefix: **FOR INTERNAL USE ONLY**
- scoped: **FOR INTERNAL USE ONLY**
- styles: **FOR INTERNAL USE ONLY**
- themeClasses: **FOR INTERNAL USE ONLY**
- themes: Raw theme definitions.
- utilities: **FOR INTERNAL USE ONLY**

## Source Snippets

### composable source

```ts
// Utilities
import {
  computed,
  getCurrentScope,
  inject,
  onScopeDispose,
  provide,
  ref,
  shallowRef,
  toRef,
  watch,
  watchEffect,
} from 'vue'
import {
  consoleWarn,
  createRange,
  darken,
  deprecate,
  getCurrentInstance,
  getLuma,
  hasLightForeground,
  IN_BROWSER,
  lighten,
  mergeDeep,
  parseColor,
  propsFactory,
  RGBtoHex,
  SUPPORTS_MATCH_MEDIA,
} from '@/util'

// Types
import type { VueHeadClient } from '@unhead/vue/client'
import type { HeadClient } from '@vueuse/head'
import type { App, DeepReadonly, InjectionKey, Ref } from 'vue'
import type { Color } from '@/util'

type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

export type ThemeOptions = false | {
  cspNonce?: string
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
