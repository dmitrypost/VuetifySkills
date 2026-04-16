---
title: "Display & Platform"
nav_title: "Display & Platform"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/display-and-platform"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Display & Platform

Source: https://vuetifyjs.com/en/features/display-and-platform

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Display & Platform, especially setup and global configuration decisions.

## Overview

Access display viewport information using the Vuetify Breakpoint composable.

## Key Headings

- Usage
- API
- Breakpoints and Thresholds
- Options
- Examples
- Interface
- Using Setup
- Breakpoint conditionals
- Component Mobile Breakpoints
- useDisplay overrides

## Extracted Guidance

The display composable provides a multitude of information about the current device

The **useDisplay** composable provides information on multiple aspects of the current device.

This enables you to control various aspects of your application based upon the window size, device type, and SSR state. This composable works in conjunction with [grids](/components/grids/) and other responsive utility classes (e.g. [display](/styles/display/)).

The following shows how to access the application's display information:

If you are still using the Options API, you can access the display information on the global **$vuetify** variable. Note that refs are unwrapped here, so you don't need `.value`.

| Component | Description | | - | - | | [useDisplay](/api/use-display/) | Composable |

Threshold values generate the ranges used for various breakpoints seen throughout vuetify and the `useDisplay` composable. The system uses an "and up" mentality starting from `xs` at 0px. The default threshold values are displayed below.

These ranges power the various additional `AndUp` / `AndDown` properties accessible in `useDisplay`

## Code Patterns

```html { resource="Composition.vue" }
<script setup>
  import { onMounted } from 'vue'
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay()

  onMounted(() => {
    console.log(mobile.value) // false
  })
</script>
```

```html { resource="Options.vue" }
<script>
  export default {
    mounted () {
      console.log(this.$vuetify.display.mobile)
    },
  }
</script>
```

```ts
{
  smAndDown: boolean // < 960px
  smAndUp: boolean // > 600px
  mdAndDown: boolean // < 1280px
  mdAndUp: boolean // > 960px
  lgAndDown: boolean // < 1919px
  lgAndUp: boolean // > 1280px
  xlAndDown: boolean // < 2559px
  xlAndUp: boolean // > 1920px
}
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify} from 'vuetify'

export default createVuetify({
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  },
})
```

```html { resource="Component.vue" }
<template>
  <v-card :height="height">
    ...
  </v-card>
</template>

<script setup>
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'

  const { name } = useDisplay()

  const height = computed(() => {
    // name is reactive and
    // must use .value
    switch (name.value) {
      case 'xs': return 220
      case 'sm': return 400
      case 'md': return 500
      case 'lg': return 600
      case 'xl': return 800
      case 'xxl': return 1200
    }

    return undefined
  })
</script>
```

```ts
{
  // Breakpoints
  xs: boolean // 0 - 599
  sm: boolean // 600 - 839
  md: boolean // 840 - 1144
  lg: boolean // 1145 - 1544
  xl: boolean // 1545 - 2137
  xxl: boolean // >= 2138
  smAndDown: boolean // < 840
  smAndUp: boolean // > 599
  mdAndDown: boolean // < 1145
  mdAndUp: boolean // > 839
  lgAndDown: boolean // < 1545
  lgAndUp: boolean // > 1144
  xlAndDown: boolean // < 2138
  xlAndUp: boolean // > 1544

  // true if screen width < mobileBreakpoint
  mobile: boolean
  mobileBreakpoint: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

  // Current breakpoint name (e.g. 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl')
  name: string

  // The current value of window.innerHeight and window.innerWidth
  height: number
  width: number

  // Device userAgent information
  platform: {
    android: boolean
    ios: boolean
    cordova: boolean
    electron: boolean
    chrome: boolean
    edge: boolean
    firefox: boolean
    opera: boolean
    win: boolean
    mac: boolean
    linux: boolean
    touch: boolean
    ssr: boolean
  }

  // The values used to make Breakpoint calculations
  thresholds: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
  }
}
```

```html { resource="Component.vue" }
<template>
  <v-dialog :fullscreen="mobile">
    ...
  </v-dialog>
</template>

<script setup>
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay()
</script>
```

```html { resource="Component.vue" }
<template>
  <v-sheet
    :min-height="mdAndUp ? 300 : '20vh'"
    :rounded="xs"
  >
    ...
  </v-sheet>
</template>

<script setup>
  import { useDisplay } from 'vuetify'

  // Destructure only the keys you want to use
  const { xs, mdAndUp } = useDisplay()
</script>
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
