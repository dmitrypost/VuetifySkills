---
title: "Colors"
nav_title: "Material color palette"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/colors"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Colors

Source: https://vuetifyjs.com/en/styles/colors

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Colors.

## Overview

Learn about the colors of Material Design. Consume the javascript color pack directly in your application.

## Key Headings

- Classes
- Javascript color pack
- Sass color pack
- Material colors

## Extracted Guidance

Out of the box you get access to all colors in the [Material Design specification](https://material.io/design/color/the-color-system.html) through **sass** and **javascript**. These values can be used within your style sheets, your component files and on actual components via the **color** prop.

Each color from the specification gets converted to a **background** and **text** variant for styling within your application through a class, e.g. ` ` or ` `. These class colors are defined [here](https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/styles/settings/_colors.scss).

Text colors also support **darken** and **lighten** variants using `text-{color}-{lighten|darken}-{n}`

Vuetify has an optional javascript color pack that you can import and use within your application. This can also be used to help define your application's theme.

While convenient, the color pack increases the CSS export size by ~30kb. Some projects may only require the classes that are created at runtime from the Vuetify **theme** system. To disable the color pack feature, follow [sass variables](/features/sass-variables) and set `$color-pack: false`{.text-no-wrap}.

Below is a list of the Material design color palette grouped by primary color

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'

import colors from 'vuetify/util/colors'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          ...
        }
      },
    },
  },
})
```

```scss { resource="main.scss" }
@use 'vuetify' with (
  $color-pack: false,
);
```

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Transitions](transitions.md)
- [Borders](borders.md)
- [Border radius](border-radius.md)
