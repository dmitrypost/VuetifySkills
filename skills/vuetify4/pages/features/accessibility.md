---
title: "Accessibility (a11y)"
nav_title: "Accessibility (a11y)"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/accessibility"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Accessibility (a11y)

Source: https://vuetifyjs.com/en/features/accessibility

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Accessibility (a11y), especially setup and global configuration decisions.

## Overview

See examples and the advantages of having accessibility (a11y) support in Vuetify components.

## Key Headings

- Activator slots
- Focus management and keyboard interactions
- v-menu
- Additional Resources

## Extracted Guidance

Web accessibility **(a11y for short)**, is the inclusive practice of ensuring there are no barriers that prevent the interaction with, or access to, websites on the World Wide Web by people with disabilities. Vuetify components are built to provide keyboard interactions for all mouse-based actions and utilize HTML5 semantic elements where applicable.

Vuetify uses activator slots for many components such as `v-menu`, `v-dialog` and more. In some instances these activator elements should have specific a11y attributes that associate them with their corresponding content. In order to achieve this, we pass down the necessary a11y options through the slots scope.

When the activator element is rendered, it will now contain the bound a11y attributes:

Beyond attributes, components such as `v-menu` also support interaction by pressing ↑ and ↓ for navigating between options.

When inside of a `v-menu`, `v-list-item` will be automatically configured to have a role of **menuitem**. Navigate to the [Menu](/components/menus) for more information on the components features.

While Vuetify attempts to make a11y as easy as possible in your application, there are times where additional information is needed. Below you can find a list of helpful resources.

## Code Patterns

```html
<!-- Vue Template HTML Markup -->

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        text="Click me"
        v-bind="props"
      ></v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Option 1</v-list-item-title>
      </v-list-item>

      <v-list-item disabled>
        <v-list-item-title>Option 2</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Option 3</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
```

```html
<!-- Rendered `v-btn` HTML Output -->

<button
  aria-expanded="false"
  aria-haspopup="true"
  role="button"
  type="button"
>
  Click me
</button>
```

## Related Pages

- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
- [UnoCSS + presetWind4](css-utilities/unocss-tailwind-preset.md)
