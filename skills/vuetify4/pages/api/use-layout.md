---
title: "useLayout"
nav_title: "useLayout"
section: "API"
source_url: "https://vuetifyjs.com/en/api/use-layout"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# useLayout

Source: https://vuetifyjs.com/en/api/use-layout

## Agent Use

Use this page when you need the Vuetify 4 API contract for useLayout, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: composable
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/useLayout.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/layout.ts

## Exposed

- getLayoutItem: Function that returns position and size information about a specific layout item.
- mainRect: Position and size information for the v-main area.
- mainStyles: CSS styles applied to the v-main area.

## Source Snippets

### composable source

```ts
// Composables
import { useResizeObserver } from '@/composables/resizeObserver'

// Utilities
import {
  computed,
  inject,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  provide,
  reactive,
  ref,
  shallowRef, toRef,
  useId,
} from 'vue'
import { consoleWarn, convertToUnit, findChildrenWithProvide, getCurrentInstance, propsFactory } from '@/util'

// Types
import type { ComponentInternalInstance, CSSProperties, InjectionKey, Prop, Ref } from 'vue'

export type Position = 'top' | 'left' | 'right' | 'bottom'

interface Layer {
  top: number
  bottom: number
  left: number
  right: number
}

interface LayoutItem extends Layer {
  id: string
  size: number
  position: Position
}

interface LayoutProvide {
  register: (
    vm: ComponentInternalInstance,
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
