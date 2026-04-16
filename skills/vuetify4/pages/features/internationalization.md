---
title: "Internationalization (i18n)"
nav_title: "Internationalization (i18n)"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/internationalization"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Internationalization (i18n)

Source: https://vuetifyjs.com/en/features/internationalization

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Internationalization (i18n), especially setup and global configuration decisions.

## Overview

Vuetify supports language Internationalization (i18n) from a wide range of locales and easily integrates vue-i18n.

## Key Headings

- Getting started
- API
- Scoped languages
- RTL
- Creating a custom locale
- Custom Vuetify components
- vue-i18n
- Supported languages

## Extracted Guidance

Vuetify supports language Internationalization (i18n) of its components.

When bootstrapping your application you can specify available locales and the default locale with the **defaultLocale** option. The **locale** service also supports easy integration with [vue-i18n](https://vue-i18n.intlify.dev/). Using a locale that has an RTL (right-to-left) language also affects the directionality of the Vuetify components.

To set the available locale messages or the default locale, supply the **locale** option when installing Vuetify.

You can change the locale during runtime by using the `useLocale` composable.

If you are still using the Options API, you can access the locale settings on `this.$vuetify.locale`.

| Feature | Description | | - | - | | [useLocale](/api/use-locale/) | The locale composable is used | | [v-locale-provider](/api/v-locale-provider/) | The locale provider component is used to scope a portion of your application to a different locale than the default one |

Using the `v-locale-provider` component it is possible to scope a portion of your application to a different locale than the default one.

RTL (Right To Left) support is built in for all localizations that ship with Vuetify. If a [supported language](#supported-languages) is flagged as RTL, all content directions are automatically switched. See the [next section](#creating-a-custom-locale) for information on how to add RTL support to a custom locale.

## Code Patterns

```js { resource="main.js" }
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

// Translations provided by Vuetify
import { pl, zhHans } from 'vuetify/locale'

// Your own translation file
import sv from './i18n/vuetify/sv'

const app = createApp()

const vuetify = createVuetify({
  locale: {
    locale: 'zhHans',
    fallback: 'sv',
    messages: { zhHans, pl, sv },
  },
})

app.use(vuetify)

app.mount('#app')
```

```html { resource="Composition.vue" }
<script setup>
  import { useLocale } from 'vuetify'

  const { current } = useLocale()

  function changeLocale (locale) {
    current.value = locale
  }
</script>
```

```html { resource="Options.vue" }
<script>
  export default {
    methods: {
      changeLocale (locale) {
        this.$vuetify.locale.current = locale
      },
    },
  }
</script>
```

```html { resource="src/App.vue" }
<template>
  <v-app>
    <v-select></v-select> <!-- Will use default locale -->

    <v-locale-provider locale="ja">
      <v-select></v-select> <!-- Will use ja locale -->
    </v-locale-provider>
  </v-app>
</template>
```

```html { resource="src/App.vue" }
<v-app>
  <v-card>...</v-card> <!-- default locale used here -->

  <v-locale-provider rtl>
    <v-card>...<v-card> <!-- default locale used here, but with RTL active -->
  </v-locale-provider>
</v-app>
```

```js { resource="src/locales/customLocale.js" }
export default {
  badge: '...',
  close: '...',
  ...
}
```

```js { resource="src/main.js" }
import { createVuetify } from 'vuetify'
import customLocale from './locales/customLocale'

const vuetify = createVuetify({
  locale: {
    locale: 'customLocale',
    messages: { customLocale },
    rtl: {
      customLocale: true,
    },
  },
})
```

```html { resource="Component.vue" }
<template>
  <div class="my-component">
    {{ text }}
  </div>
</template>

<script setup>
  import { useLocale } from 'vuetify'

  const { t } = useLocale()
  const text = t('$vuetify.my-component.text')
</script>
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
