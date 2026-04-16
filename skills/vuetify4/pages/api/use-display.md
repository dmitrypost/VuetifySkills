---
title: "useDisplay"
nav_title: "useDisplay"
section: "API"
source_url: "https://vuetifyjs.com/en/api/use-display"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# useDisplay

Source: https://vuetifyjs.com/en/api/use-display

## Agent Use

Use this page when you need the Vuetify 4 API contract for useDisplay, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: composable
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/useDisplay.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/display.ts

## Exposed

- height: The inner height of the browser window.
- lg: Returns **true** if the current browser breakpoint is **lg**.
- lgAndDown: Returns **true** if the current browser breakpoint is **lg** or lower.
- lgAndUp: Returns **true** if the current browser breakpoint is **lg** or higher.
- md: Returns **true** if the current browser breakpoint is **md**.
- mdAndDown: Returns **true** if the current browser breakpoint is **md** or lower.
- mdAndUp: Returns **true** if the current browser breakpoint is **md** or higher.
- mobile: Returns **true** if the current browser breakpoint is considered to be a mobile breakpoint.
- mobileBreakpoint: Controls which named breakpoint (**lg**, **md**, etc) or browser width (in px) is considered to be mobile.
- name: Name of the current breakpoint.
- platform: Name of the current platform.
- sm: Returns **true** if the current browser breakpoint is **sm**.
- smAndDown: Returns **true** if the current browser breakpoint is **sm** or lower.
- smAndUp: Returns **true** if the current browser breakpoint is **sm** or higher.
- thresholds: An object describing the width values of each breakpoint.
- update: Function that updates the current width and height values.
- width: The inner width of the browser window.
- xl: Returns **true** if the current browser breakpoint is **xl**.
- xlAndDown: Returns **true** if the current browser breakpoint is **xl** or lower.
- xlAndUp: Returns **true** if the current browser breakpoint is **xl** or higher.
- xs: Returns **true** if the current browser breakpoint is **xs**.
- xxl: Returns **true** if the current browser breakpoint is **xxl**.
- ssr: Returns **true** if the current page was server rendered.
- displayClasses: Returns an object containing the breakpoints and their corresponding classes.

## Source Snippets

### composable source

```ts
// Utilities
import { computed, inject, onScopeDispose, reactive, shallowRef, toRef, toRefs, watchEffect } from 'vue'
import { getCurrentInstanceName, mergeDeep, propsFactory } from '@/util'
import { IN_BROWSER, SUPPORTS_TOUCH } from '@/util/globals'

// Types
import type { InjectionKey, PropType, Ref } from 'vue'

export const breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl'] as const // no xs

export type Breakpoint = typeof breakpoints[number]

export type DisplayBreakpoint = 'xs' | Breakpoint

export type DisplayThresholds = {
  [key in DisplayBreakpoint]: number
}

export interface DisplayProps {
  mobile?: boolean | null
  mobileBreakpoint?: number | DisplayBreakpoint
}

export interface DisplayOptions {
  mobileBreakpoint?: number | DisplayBreakpoint
  thresholds?: Partial<DisplayThresholds>
}

export interface InternalDisplayOptions {
  mobileBreakpoint: number | DisplayBreakpoint
  thresholds: DisplayThresholds
}

export type SSROptions = boolean | {
  clientWidth: number
  clientHeight?: number
}

export interface DisplayPlatform {
  android: boolean
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
- [useLayout](use-layout.md)
