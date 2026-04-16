---
title: "Treeshaking"
nav_title: "Treeshaking"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/treeshaking"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Treeshaking

Source: https://vuetifyjs.com/en/features/treeshaking

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Treeshaking, especially setup and global configuration decisions.

## Overview

Vuetify provides automatic treeshaking via the vuetify-loader. Use only the features that you need and drastically reduce your package bundle size.

## Key Headings

- Automatic treeshaking
- Manual imports
- Limitations
- Dynamic components
- Import groups

## Extracted Guidance

Being a component framework, Vuetify will always grow horizontally. Depending on your project, a small bundle size may be a requirement.

Treeshaking enables you to drastically lower your build size by only including the components you actually use in the final bundle. Vuetify comes with plugins for both [Webpack](https://webpack.js.org/) and [vite](https://vitejs.dev/) that enable automatic treeshaking.

Install [webpack-plugin-vuetify](https://www.npmjs.com/package/webpack-plugin-vuetify) or [vite-plugin-vuetify](https://www.npmjs.com/package/vite-plugin-vuetify) then enable it in your bundler configuration. Make sure the vuetify plugin comes after the vue plugin or it won't work correctly.

And that's it! Vuetify components and directives will be automatically imported into your application wherever they are used. If you had any wildcard imports they can now be removed.

Components can be manually imported when not using the loader plugin.

You can also import components locally in .vue files, as seen below.

When using the loader plugin, there are a few scenarios which will require manually importing components.

When using dynamic components the plugin is unable to parse which vuetify components are being rendered. This commonly occurs when using the built-in Vue ` `. More information about dynamic components can be found in the official Vue [documentation](https://vuejs.org/guide/essentials/component-basics.html#dynamic-components).

## Code Patterns

```js [Vite] { resource="vite.config.js" }
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
  ],
})
```

```js [Webpack] { resource="webpack.config.js" }
const { VueLoaderPlugin } = require('vue-loader')
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = {
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyPlugin(),
  ],
}
```

```js [Vue CLI] { resource="vue.config.js" }
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = {
  plugins: [
    new VuetifyPlugin(),
  ],
}
```

```js { resource="nuxt.config.js" }
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  //...
  vite: {
    plugins: [
      vuetify(),
    ]
  },
})
```

```diff { resource="src/main.js" }
import 'vuetify/styles'
  import { createVuetify } from 'vuetify'
- import * as components from 'vuetify/components'
- import * as directives from 'vuetify/directives'
```

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { VCard } from 'vuetify/components/VCard'
import { VRating } from 'vuetify/components/VRating'
import { VToolbar } from 'vuetify/components/VToolbar'
import { Ripple } from 'vuetify/directives'

const vuetify = createVuetify({
  components: {
    VCard,
    VRating,
    VToolbar,
  },
  directives: {
    Ripple,
  },
})

export default vuetify
```

```html { resource="Component.vue" }
<template>
  <v-card>
    <v-card-title>...</v-card-title>
    <v-card-text>...</v-card-text>
  </v-card>
</template>

<script setup>
  import { VCard, VCardText, VCardTitle } from 'vuetify/components/VCard'
</script>
```

```html
<template>
  <v-data-iterator content-tag="v-layout">
    ...
  </v-data-iterator>
</template>
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
