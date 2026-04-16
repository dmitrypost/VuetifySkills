---
title: "Buttons"
nav_title: "Buttons"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/buttons"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Buttons

Source: https://vuetifyjs.com/en/components/buttons

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Buttons component.

## Overview

The button component communicates actions that a user can take and are typically placed in dialogs, forms, cards and toolbars.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Props
- Density
- Size
- Block
- Rounded
- Elevation
- Ripple
- Variants
- Icon
- Loaders
- Inside of bars
- Slots
- Icon color
- Spaced

## Extracted Guidance

The `v-btn` component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.

Buttons in their simplest form contain uppercase text, a slight elevation, hover effect, and a ripple effect on click.

| Component | Description | | - | - | | [v-btn](/api/v-btn/) | Primary Component |

The recommended placement of elements inside of `v-btn` is:

![Button Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-btn/v-btn-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | In addition to text, the Button container typically holds a [v-icon](/components/icons/) component | | 2. Icon (optional) | Leading media content intended to improve visual context | | 3. Text | A content area for displaying text and other inline elements |

The `v-btn` component is commonly used throughout Vuetify and is a staple for any application. It is used for everything from navigation to form submission; and can be styled in a multitude of ways.

The following code snippet is an example of a basic `v-btn` component only containing text:

## Code Patterns

```html
<v-btn>Button</v-btn>
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetifyjs'

export default createVuetify({
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'outlined',
      rounded: true,
    },
  },
})
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetifyjs'
import { VBtn } from 'vuetifyjs/components'

export createVuetify({
  aliases: {
    VBtnSecondary: VBtn,
    VBtnTertiary: VBtn,
  },
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'text',
    },
    VBtnSecondary: {
      color: 'secondary',
      variant: 'flat',
    },
    VBtnTertiary: {
      rounded: true,
      variant: 'plain',
    },
  },
})
```

```scss { resource="src/settings.scss" }
@use 'vuetify/settings' with (
  $button-banner-actions-padding: 16px,
  $button-height: 32px,
);
```

```js { resource="src/plugins/vuetify.js" }
export default createVuetify({
  defaults: {
    VToolbar: {
      VBtn: { variant: 'flat' },
    },
  },
})
```

```html
<v-btn
  aria-label="Refresh"
  icon="mdi-refresh"
></v-btn>
```

```html
<v-btn size="large">
  Large Button
</v-btn>

<v-btn size="x-large">
  Extra Large Button
</v-btn>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Cards](cards.md)
- [Chips](chips.md)
