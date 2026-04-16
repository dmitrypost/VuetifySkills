---
title: "Theme configuration"
nav_title: "Theme"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/theme"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Theme configuration

Source: https://vuetifyjs.com/en/features/theme

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Theme configuration, especially setup and global configuration decisions.

## Overview

Setup your application's theme and supplemental colors in a flash.

## Key Headings

- API
- Setup
- Changing theme
- System theme
- Custom themes
- Custom theme colors
- Color variations
- Disable theme
- Theme object structure
- CSP Nonce
- Implementation
- Microfrontends

## Extracted Guidance

Customize your application's default text colors, surfaces, and more. Easily modify your theme programmatically in real time. Vuetify comes with standard support for light and dark variants.

| Feature | Description | | - | - | | [useTheme](/api/use-theme/) | The theme composable allows you to get information about, and modify the current theme | | [v-theme-provider](/api/v-theme-provider/) | The theme provider component modifies the theme of all its children |

Vuetify includes three built-in themes: **light**, **dark**, and **system**. Use the **defaultTheme** option to specify your application's default theme. The following example sets the default theme to **dark**:

The theme instance has 3 functions to change the theme:

You should keep in mind that most of the Vuetify components support the **theme** prop. When used a new context is created for _that_ specific component and **all** of its children. In the following example, the [v-btn](/components/buttons/) uses the **dark** theme because it is applied to its parent [v-card](/components/cards/).

You can use the ` ` component to dynamically apply different themes to larger sections of your application, without having to set the **theme** prop on each individual component. In the following example, we apply a custom theme named `high-contrast`.

The **system** theme uses the user's system preference for 'light' or 'dark' mode, based on the **prefers-color-scheme** media query. It is evaluated at run-time and reacts to changes in the user's system preference.

Adding new themes is as easy as defining a new property in the **theme.themes** object. A theme is a collection of colors and options that change the overall look and feel of your application. One of these options designates the theme as being either a **light** or **dark** variation.

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark', // 'system' | 'light' | 'dark'
  },
})
```

```html
<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Toggle between Light / Dark -->
        <v-btn
          @click="theme.toggle()"
          text="Toggle Light / Dark"
        ></v-btn>

        <!-- Change to a specific theme -->
        <v-btn
          @click="theme.change('dark')"
          text="Change to Dark"
        ></v-btn>

        <!-- Cycle between all themes -->
        <v-btn
          @click="theme.cycle()"
          text="Cycle All Themes"
        ></v-btn>

        <!-- Cycle between specific themes -->
        <v-btn
          @click="theme.cycle(['custom', 'light', 'system'])"
          text="Cycle Specific Themes"
        ></v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { useTheme } from 'vuetify'

  const theme = useTheme()
</script>
```

```html
<template>
  <v-app>
    <v-card theme="dark">
      <!-- button uses dark theme -->
      <v-btn>foo</v-btn>
    </v-card>
  </v-app>
</template>
```

```html
<template>
  <v-app>
    <!-- uses the current default theme -->
    <v-card>...</v-card>

    <v-theme-provider theme="high-contrast">
      <!-- uses the high-contrast theme -->
      <v-card>...</v-card>
      <v-btn>...</v-btn>
    </v-theme-provider>
  </v-app>
</template>
```

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'system',
  },
})
```

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})
```

```js { resource="src/plugins/vuetify.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          ..., // We have omitted the standard color properties here to emphasize the custom one that we've added
          something: '#00ff00',
        },
      },
    },
  },
})
```

```html
<template>
  <div class="bg-something on-something">background color with appropriate text color contrast</div>

  <div class="text-something">text color</div>

  <div class="border-something">border color</div>
</template>

<style>
  .custom-class {
    background: rgb(var(--v-theme-something))
    color: rgba(var(--v-theme-on-something), 0.9)
  }
</style>
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
