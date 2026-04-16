---
title: "CSS Layers"
nav_title: "CSS Layers"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/layers"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# CSS Layers

Source: https://vuetifyjs.com/en/styles/layers

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to CSS Layers.

## Overview

Vuetify 4 uses cascade layers to avoid specificity problems

## Key Headings

- Utilities group

## Extracted Guidance

[Cascade layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) are a modern CSS feature that makes it easier to write custom styles without having to deal with specificity issues and `!important`.

Import order of stylesheets becomes much more important with layers, therefore `import 'vuetify/styles'` or a file containing `@use 'vuetify'` **must** be loaded *before* any components or the CSS reset will take precedence over component styles and break everything. If you have separate plugin files make sure to import the vuetify plugin before `App.vue` or any other components.

Vuetify defines five layers containing all the framework styles:

Your own styles will always override vuetify's if you don't use `@layer` yourself, or you can specify an order for custom layers in a stylesheet loaded before vuetify. Vuetify's layers must remain in the same order for everything to display correctly, but you can add your own between or around them.

The `vuetify-utilities` layer itself contains nested sublayers to control the order of utility styles:

This ordering ensures that explicit color utilities (background and foreground) can override helper classes when both are applied to the same element.

## Code Patterns

```css
@layer vuetify-core, vuetify-components, vuetify-overrides, vuetify-utilities, vuetify-final;
```

```css { resource="src/styles/layers.css" }
@layer base,
  vuetify-core,
  vuetify-components,
  components,
  vuetify-overrides,
  overrides,
  vuetify-utilities,
  vuetify-final;
```

```css
@layer vuetify-utilities {
  @layer theme-base;
  @layer typography;
  @layer helpers;
  @layer theme-background;
  @layer theme-foreground;
}
```

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [Transitions](transitions.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
- [Border radius](border-radius.md)
