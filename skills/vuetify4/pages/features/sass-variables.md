---
title: "SASS variables"
nav_title: "SASS variables"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/sass-variables"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# SASS variables

Source: https://vuetifyjs.com/en/features/sass-variables

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to SASS variables, especially setup and global configuration decisions.

## Overview

Customize Vuetify's internal styles by modifying SASS variables.

## Key Headings

- Installation
- Usage
- Variable API
- Usage in templates
- Disabling utility classes
- Disabling color packs
- Enabling CSS cascade layers
- Caveats
- Duplicated CSS
- Build performance
- Symlinks
- sass-loader with `api: 'modern'`

## Extracted Guidance

Vuetify uses **SASS/SCSS** to craft the style and appearance of all aspects of the framework.

It is recommended to familiarize yourself with the [Treeshaking](/features/treeshaking/) guide before continuing.

Vuetify works out of the box without any additional compilers needing to be installed but does support advanced use-cases such as modifying the underlying variables of the framework. Vite provides built-in support for sass, less and stylus files without the need to install Vite-specific plugins for them; just the corresponding pre-processor itself.

To begin modifying Vuetify's internal variables, install the [sass](https://sass-lang.com/) pre-processor:

For additional details about css-pre-processors, please refer to the official vite page at: or official vue-cli-page at:

There are many SASS variables such as **font size**, **font family**, and **line height** that can be configured globally. An extensive list of configurable global SASS variables can be found [here](/api/globals/). To start, follow the plugin setup guide from [treeshaking](/features/treeshaking/) then add `styles.configFile` to the plugin options:

`configFile` will be resolved relative to the project root, and loaded before each of vuetify's stylesheets. Next, create a **settings.scss** file in your **src/styles** directory:

Within your style file, specify the variables you want to override, and that's it.

## Code Patterns

```bash [pnpm]
pnpm install -D sass-loader sass
```

```bash [yarn]
yarn add -D sass
```

```bash [npm]
npm install -D sass-loader sass
```

```bash [bun]
bun add -D sass-loader sass
```

```js { resource="vite.config.js" }
vuetify({
  styles: {
    configFile: 'src/styles/settings.scss',
  },
})
```

```scss { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  // variables go here
);
```

```html { resource="Comp1.vue" }
<style lang="scss">
  @use './settings';

  .my-button {
    height: settings.$button-height;
  }
</style>
```

```diff { resource="src/styles/settings.scss" }
- @use 'vuetify/settings' with (
+ @forward 'vuetify/settings' with (
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
