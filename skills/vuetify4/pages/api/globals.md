---
title: "globals"
nav_title: "globals"
section: "API"
source_url: "https://vuetifyjs.com/en/api/globals"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# globals

Source: https://vuetifyjs.com/en/api/globals

## Agent Use

Use this page when you need the Vuetify 4 API contract for globals, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: globals
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/entry-bundler.ts

## Source Snippets

### global exports

```ts
/* eslint-disable local-rules/sort-imports */

// Styles
import './styles/main.sass'

// Components
import * as blueprints from './blueprints'
import * as components from './components'
import * as directives from './directives'
import { createVuetify as _createVuetify } from './framework'

// Types
import type { VuetifyOptions } from './framework'

export const createVuetify = (options: VuetifyOptions = {}) => {
  return _createVuetify({ components, directives, ...options })
}

export const version = __VUETIFY_VERSION__
createVuetify.version = version

export {
  blueprints,
  components,
  directives,
}
export * from './composables'
```

## Related Pages

- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
- [useLayout](use-layout.md)
