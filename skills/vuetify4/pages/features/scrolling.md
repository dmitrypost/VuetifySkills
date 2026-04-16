---
title: "Programmatic scrolling"
nav_title: "Programmatic scrolling"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/scrolling"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Programmatic scrolling

Source: https://vuetifyjs.com/en/features/scrolling

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Programmatic scrolling, especially setup and global configuration decisions.

## Overview

Handle scrolling within your application by using the goTo function

## Key Headings

- Usage
- API

## Extracted Guidance

Handle scrolling within your application by using the **goTo** function.

The **goTo** method takes two parameters **target** and **options**. **target** can be either a pixel offset from the top of the page, a valid css selector, or an element reference. **options** is an object that includes **duration**, **easing**, **container**, and **offset**.

| Directive | Description | | - | - | | [useGoTo](/api/use-go-to/) | The useGoTo composable |

<!--## Use with router

The **goTo** function can be individually imported and invoked anywhere. This is particularly useful when hooking up to [vue-router](https://router.vuejs.org/).

-->

## Code Patterns

```js { resource="src/router.js" }
import Router from 'vue-router'
import goTo from 'vuetify/lib/services/goto'

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes: [
    //
  ],
})
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
