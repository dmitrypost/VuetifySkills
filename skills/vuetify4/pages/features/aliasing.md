---
title: "Aliasing & virtual components"
nav_title: "Aliasing"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/aliasing"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Aliasing & virtual components

Source: https://vuetifyjs.com/en/features/aliasing

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Aliasing & virtual components, especially setup and global configuration decisions.

## Overview

Description

## Key Headings

- Usage
- Virtual component defaults
- Nested defaults

## Extracted Guidance

Create virtual components that extend built-in Vuetify components using custom aliases.

Aliasing allows you to use built-in Vuetify components as a baseline for your custom implementations. To get started, import the component that you want to extend. Provide it as the value of a unique key that is used for the virtual component's name:

Virtual components have access to the Vuetify [Global configuration](/features/global-configuration/). Default settings for aliases are defined the same as built-in components with no extra steps required by you. In the following example, **MyButton** uses [v-btn props](/api/v-btn/#props) to change it's default **variant**:

Prop defaults accept component key references to apply style changes based upon component hierarchy. In the following example, [v-btn](/components/buttons/) and **MyButton** swap colors when nested within a [v-card](/components/cards/) component.

## Code Patterns

```js { resource="src/plugins/vuetify.js"}
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  aliases: {
    MyButton: VBtn,
    MyButtonAlt: VBtn,
  },
})
```

```js { resource="src/plugins/vuetify.js"}
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  aliases: {
    MyButton: VBtn,
  },
  defaults: {
    VBtn: { variant: 'flat' },
    MyButton: { variant: 'tonal' },
  },
})
```

```js { resource="src/plugins/vuetify.js"}
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  aliases: {
    MyButton: VBtn,
  },
  defaults: {
    MyButton: {
      color: 'primary',
      variant: 'tonal',
    },
    VBtn: {
      color: 'secondary',
      variant: 'flat',
    },
    VCard: {
      MyButton: { color: 'secondary' },
      VBtn: { color: 'primary' },
    },
  },
})
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
- [UnoCSS + presetWind4](css-utilities/unocss-tailwind-preset.md)
