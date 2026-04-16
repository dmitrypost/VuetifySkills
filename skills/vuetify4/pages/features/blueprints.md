---
title: "Blueprints"
nav_title: "Blueprints"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/blueprints"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Blueprints

Source: https://vuetifyjs.com/en/features/blueprints

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Blueprints, especially setup and global configuration decisions.

## Overview

Setup your entire application with pre-made or custom styling and designs

## Key Headings

- Usage
- White-label concept
- Available blueprints
- Material Design 1
- Material Design 2
- Material Design 3

## Extracted Guidance

Vuetify blueprints are a new way to pre-configure your entire application with a completely unique design system.

Blueprints are a collection of Vuetify configuration options that assign default values for components, colors, language, and more. Open your project's `vuetify.js` file and import the desired blueprint. The follow example demonstrates how to apply the [Material Design 1](#material-design-1) preset:

While Vuetify is built under the guise of Google's [Material Design](https://material.io) specification, it is still flexible enough to be used as the foundation for any design system. By default, Vuetify components have no color and are **white-label** in nature. A white-label product is a product or service produced by one company that other companies rebrand to make it appear as if they had made it.

| Name | Release date | Status | Resource | | - | - | - | - | | [Material Design 1](#material-design-1) | 2014 | ✅ Available | [Specification](https://m1.material.io) | | [Material Design 2](#material-design-2) | 2017 | ✅ Available | [Specification](https://m2.material.io) | | [Material Design 3](#material-design-3) | 2022 | ✅ Available | [Specification](https://m3.material.io) |

Blueprints require the use of utility classes to properly function.

Released in 2014, the original Material Design specification aimed to create a visual language that combined principles and good design with technical and scientific innovation.

**Preview:**

Released in 2017, version 2 of Google's design specification received a massive upgrade with new components, guidelines, and improved on the principles that made the first system so successful.

## Code Patterns

```js { resource=plugins/vuetify.js }
import { createVuetify } from 'vuetify'
import { md1 } from 'vuetify/blueprints'

export default createVuetify({
  blueprint: md1,
})
```

```javascript { resource=plugins/vuetify.js }
import { md1 } from 'vuetify/blueprints'
```

```javascript { resource=plugins/vuetify.js }
import { md2 } from 'vuetify/blueprints'
```

```javascript { resource=plugins/vuetify.js }
import { md3 } from 'vuetify/blueprints'
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
- [UnoCSS + presetWind4](css-utilities/unocss-tailwind-preset.md)
