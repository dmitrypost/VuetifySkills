---
title: "Global configuration"
nav_title: "Global configuration"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/global-configuration"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Global configuration

Source: https://vuetifyjs.com/en/features/global-configuration

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Global configuration, especially setup and global configuration decisions.

## Overview

Vuetify.config is an object containing global configuration options that modify the bootstrapping of your project.

## Key Headings

- Setup
- Contextual defaults
- Global class and styles
- Using with virtual components
- Using in custom components
- Nested defaults

## Extracted Guidance

Vuetify allows you to set default prop values globally or per component when setting up your application. Using this functionality you can for example disable **ripple** on all components, or set the default **elevation** for all sheets or buttons.

Use the **defaults** property of the Vuetify configuration object to set default prop values. Here we have disabled **ripple** for all components that support it, and set the default **elevation** to `2` and the default **prepend-icon** to `$vuetify` for all ` ` components.

Defaults can also be configured for components nested within other components, for example if you want to set the default **variant** for all ` ` components nested within a ` ` component:

This is used internally by some components already:

[v-defaults-provider](/components/defaults-providers/) can be used to set defaults for components within a specific scope.

Define global classes and styles for all [built-in](/components/all/) components; including [virtual](/features/aliasing/#virtual-component-defaults) ones. This provides an immense amount of utility when building your application's design system and it reduces the amount of duplicated code in your templates.

Let's say that you want to set the **text-transform** of all [v-btn](/components/buttons/) components to `none`, but are not interested in using [SASS variables](/features/sass-variables/). By simply adding the **style** property to a component's default values, you are able to apply custom values to all instances of said component.

The following code example modifies the **text-transform** CSS property of all ` ` components:

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
  defaults: {
    global: {
      ripple: false,
    },
    VBtn: {
      elevation: 2,
      prependIcon: "$vuetify",
    },
  },
})
```

```js { resource="src/plugins/vuetify.js" }
createVuetify({
  defaults: {
    VCard: {
      VBtn: { variant: 'outlined' },
    },
  },
})
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  defaults: {
    VBtn: {
      style: 'text-transform: none;',
    },
  },
})
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  defaults: {
    VBtn: {
      class: 'text-none',
    },
  },
})
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  defaults: {
    VBtn: {
      style: [{ textTransform: 'none' }],
    },
  },
})
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'

export default createVuetify({
  aliases: {
    VBtnPrimary: VBtn,
  },

  defaults: {
    VBtnPrimary: {
      class: ['v-btn--primary', 'text-none'],
    },
  },
})
```

```html
<template>
  <v-btn-primary class="foobar">Foobar</v-btn-primary>
</template>
```

```html
<!-- Example HTML Output -->
<button class="v-btn v-btn--primary text-none foobar">Fizzbuzz</button>
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
