---
title: "v-tooltip"
nav_title: "v-tooltip"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-tooltip-directive"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# v-tooltip

Source: https://vuetifyjs.com/en/api/v-tooltip-directive

## Agent Use

Use this page when you need the Vuetify 4 API contract for v-tooltip, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: directive
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/v-tooltip.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/directives/tooltip/index.ts

## Argument

Applies the VTooltip location prop.

## Value

**string**: Sets the tooltip content.  
**boolean**: Controls visibility, tooltip content will be the innerText of the bound element.  
**object**: Use any [VTooltip props](/api/v-tooltip), content can be set with `text`. Keys are camelCase.

## Source Snippets

### directive source

```ts
// Components
import { VTooltip } from '@/components/VTooltip'

// Composables
import { useDirectiveComponent } from '@/composables/directiveComponent'

// Utilities
import { isObject } from '@/util'

// Types
import type { DirectiveBinding } from 'vue'
import type { Anchor } from '@/util'

export interface TooltipDirectiveBinding extends Omit<DirectiveBinding<string>, 'arg' | 'value'> {
  arg?: { [T in Anchor]: T extends `${infer A} ${infer B}` ? `${A}-${B}` : T }[Anchor]
  value: boolean | string | Record<string, any>
}

export const Tooltip = useDirectiveComponent<TooltipDirectiveBinding>(VTooltip, binding => {
  const disabled = isObject(binding.value)
    ? !binding.value.text
    : ['', false, null].includes(binding.value) // undefined means true

  return {
    activator: disabled ? null : 'parent',
    location: binding.arg?.replace('-', ' '),
    text: typeof binding.value === 'boolean' ? undefined : binding.value,
  }
})

export default Tooltip
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
