---
title: "Style entry points"
nav_title: "Entry points"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/entry-points"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Style entry points

Source: https://vuetifyjs.com/en/styles/entry-points

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Style entry points.

## Overview

Vuetify style entry points

## Key Headings

- From javascript
- All-in-one
- Individual modules
- `vuetify/styles/core`
- `vuetify/styles/colors`
- `vuetify/styles/utilities`
- From SASS
- Main entry point
- Sass settings

## Extracted Guidance

Vuetify allows you to import styles via JavaScript (pre-compiled CSS) or SASS (SCSS). Choosing the right entry point depends on whether you need a quick setup or deep customization capabilities (such as overriding SASS variables).

Imports in this section are typically added to your `main.js` or `main.ts` file. These are pre-compiled CSS files, meaning you cannot override SASS variables with them, but they are the easiest way to get started.

The `vuetify/styles` is the **standard, all-in-one import**. It includes the core framework, utility classes, and the layout system.

If you are strictly managing bundle size or using a manual build process, you can import style modules individually.

Contains the CSS reset, typography fundamentals, and basic application structure.

Includes the Material Design color palette utility classes (e.g., `text-red`, `bg-blue-darken-1`). If you are defining your own theme colors and do not use the standard Material palette classes, you may omit this.

Contains helper classes for layout and spacing (e.g., `d-flex`, `mt-4`, `pa-2`).

**Example of modular import:**

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import 'vuetify/styles'
  import { createVuetify } from 'vuetify'
```

```js { resource="src/plugins/vuetify.js" }
import 'vuetify/styles/core'      // Reset and structure (Required first)
import 'vuetify/styles/colors'    // Optional: standard color classes
import 'vuetify/styles/utilities' // Optional: helper classes
```

```scss { resource="src/styles/main.scss" }
@use 'vuetify';
// OR (these both point to the same file)
@use 'vuetify/styles';
```

```scss { resource="src/styles/main.scss" }
@use 'vuetify' with (
  $color-pack: false,
  $utilities: false,
);
```

```scss { resource="src/styles/_settings.scss" }
@use 'vuetify/settings' with (
  $utilities: false,
  $body-font-family: ('Remora Sans', sans-serif),
);
```

## Related Pages

- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Transitions](transitions.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
- [Border radius](border-radius.md)
