---
title: "Icons"
nav_title: "Icons"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/icons"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Icons

Source: https://vuetifyjs.com/en/components/icons

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Icons component.

## Overview

The icon component is compatible with multiple common icon fonts such as Material Design Icons, Font Awesome and more.

## Key Headings

- Usage
- API
- Examples
- Props
- Color
- Click
- Misc
- Buttons
- Font Awesome
- Material Design
- MDI SVG
- Accessibility
- Decorative Font Icons
- Semantic Font Icons
- Decorative SVG Icons
- Semantic SVG Icons

## Extracted Guidance

The `v-icon` component provides a large set of glyphs to provide context to various aspects of your application. For a list of all available icons, visit the official [Material Design Icons](https://pictogrammers.com/library/mdi/) page. To use any of these icons simply use the `mdi-` prefix followed by the icon name.

Icons come in two themes (light and dark), and five different sizes (x-small, small, medium (default), large, and x-large).

| Component | Description | | - | - | | [v-icon](/api/v-icon/) | Primary Component |

Using color helpers you can change the color of an icon from the standard dark and light themes.

<!-- ### Events

Binding any click event to `v-icon` will automatically change the cursor to a pointer.

Icons can be used inside of buttons to add emphasis to the action.

[Font Awesome](https://fontawesome.com/icons/) is also supported. Simply use the `fa-` prefixed icon name. Please note that you still need to include the Font Awesome icons in your project. For more information on how to install it, please navigate to the [installation page](/features/icon-fonts#install-font-awesome-5-icons)

## Code Patterns

```html
<v-icon aria-hidden="false">
  mdi-account
</v-icon>
```

```html { resource="Component.vue" }
<v-icon aria-label="My Account" role="img" aria-hidden="false">
  mdiAccount
</v-icon>

<script setup>
import { mdiAccount } from "@mdi/js";

const icons = { mdiAccount }
</script>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
