---
title: "useLocale"
nav_title: "useLocale"
section: "API"
source_url: "https://vuetifyjs.com/en/api/use-locale"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# useLocale

Source: https://vuetifyjs.com/en/api/use-locale

## Agent Use

Use this page when you need the Vuetify 4 API contract for useLocale, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: composable
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/useLocale.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/locale.ts

## Exposed

- current: Current locale.
- fallback: Fallback locale.
- isRtl: Indicates if RTL is currently active or not.
- messages: Locale messages.
- n: Function to localize numbers.
- name: Name of the locale adapter used.
- provide: **FOR INTERNAL USE ONLY**
- rtl: **FOR INTERNAL USE ONLY**
- rtlClasses: **FOR INTERNAL USE ONLY**
- t: Function to localize strings.
- decimalSeparator: The decimal separator character for the current locale (e.g. `.` for en, `,` for de).

## Source Snippets

### composable source

```ts
// Utilities
import { computed, inject, provide, ref, toRef } from 'vue'
import { createVuetifyAdapter } from '@/locale/adapters/vuetify'

// Types
import type { InjectionKey, Ref, ShallowRef } from 'vue'

export interface LocaleMessages {
  [key: string]: LocaleMessages | string
}

export interface LocaleOptions {
  decimalSeparator?: string
  messages?: LocaleMessages
  locale?: string
  fallback?: string
  adapter?: LocaleInstance
}

export interface LocaleInstance {
  name: string
  decimalSeparator: ShallowRef<string>
  messages: Ref<LocaleMessages>
  current: Ref<string>
  fallback: Ref<string>
  t: (key: string, ...params: unknown[]) => string
  n: (value: number) => string
  provide: (props: LocaleOptions) => LocaleInstance
}

export const LocaleSymbol: InjectionKey<LocaleInstance & RtlInstance> = Symbol.for('vuetify:locale')

function isLocaleInstance (obj: any): obj is LocaleInstance {
  return obj.name != null
}

export function createLocale (options?: LocaleOptions & RtlOptions) {
  const i18n = options?.adapter && isLocaleInstance(options?.adapter) ? options?.adapter : createVuetifyAdapter(options)
  const rtl = createRtl(i18n, options)
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
