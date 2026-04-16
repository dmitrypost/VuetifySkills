---
title: "Icon Fonts"
nav_title: "Icon Fonts"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/icon-fonts"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Icon Fonts

Source: https://vuetifyjs.com/en/features/icon-fonts

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Icon Fonts, especially setup and global configuration decisions.

## Overview

Vuetify supports Material Design Icons, Font awesome and other icon sets through prefixes and global options.

## Key Headings

- Usage
- Installing icon fonts
- Material Design Icons
- MDI - CSS
- MDI - JS SVG
- MDI - Icon search
- UnoCSS icon sets
- Material Icons
- Material Icons - CSS
- Font Awesome
- FA 5 - CSS
- FA 4 - CSS
- FA 5 - SVG
- Icon aliases
- Custom aliases
- Multiple icon sets
- Creating a custom icon set

## Extracted Guidance

Out of the box, Vuetify supports many popular icon libraries - [Material Design Icons](https://pictogrammers.com/library/mdi/), [Font Awesome](https://fontawesome.com/), [Phosphor](https://phosphoricons.com/), [Lucide](https://lucide.dev/), [Tabler](https://tabler.io/icons), and more.

To change your font library, import one of the pre-defined icon sets or provide your own.

In the above examples we import the default `mdi` icon set and its corresponding aliases. These aliases reference commonly used types of icons that are utilized by Vuetify components.

While it is still possible to supply the icon value through the default slot in Vuetify 3+ (` mdi-home `), we recommend using the `icon` prop instead.

You are required to include the specified icon library (even when using the default icons from [Material Design Icons](https://pictogrammers.com/library/mdi/)). This can be done by including a CDN link or importing the icon library into your application.

In this page "Material Icons" is used to refer to the [official google icons](https://fonts.google.com/icons) and "Material Design Icons" refers to the [extended third-party library](https://pictogrammers.com/library/mdi/)

This is the default icon set used by Vuetify. It supports local installation with a build process or a CDN link. The following shows how to add the CDN link to your `index.html`:

Or as a local dependency:

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
```

```html
<template>
  <v-icon icon="mdi-home" />
</template>
```

```html
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
```

```bash [pnpm]
pnpm add @mdi/font -D
```

```bash [yarn]
yarn add @mdi/font -D
```

```bash [npm]
npm install @mdi/font -D
```

```bash [bun]
bun add @mdi/font -D
```

```js { resource="src/plugins/vuetify.js" }
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
