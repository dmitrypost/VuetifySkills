---
title: "UnoCSS with presetWind4"
nav_title: "UnoCSS + presetWind4"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/css-utilities/unocss-tailwind-preset"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# UnoCSS with presetWind4

Source: https://vuetifyjs.com/en/features/css-utilities/unocss-tailwind-preset

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to UnoCSS with presetWind4, especially setup and global configuration decisions.

## Overview

Integrate UnoCSS with @unocss/preset-wind4 into an existing Vuetify project using Vite or Nuxt.

## Key Headings

- Establish CSS layer order
- Setup dependencies
- Vite
- Nuxt
- Disable Vuetify's built-in utilities
- Light/dark mode compatibility { id="dark-mode" }
- Custom themes
- Align breakpoints { id="breakpoints" }
- Typography
- Rounded corners
- Elevation utilities
- Align with shadows from TailwindCSS
- Restore Vuetify elevation shadows
- Safelist prop-driven classes
- VRow and VCol utility classes
- Forward Vuetify theme colors to UnoCSS { id="theme-colors" }

## Extracted Guidance

Use [`@unocss/preset-wind4`](https://unocss.dev/presets/wind4) for TailwindCSS v4 class names powered by UnoCSS's on-demand engine.

Unlike TailwindCSS v4 directly (which requires pure CSS `@theme` declarations), everything stays in JavaScript/TypeScript — breakpoints, typography, dark mode, all in one shared config file.

---

Create a `layers.css` file that declares the cascade layers in order. `uno` goes above component styles but below `vuetify-final`, where Vuetify keeps its transitions:

This file must be loaded **before** any other styles. In a **Vite** project, save it as `src/styles/layers.css` and import it at the top of `src/plugins/vuetify.ts`, before `vuetify/styles`.

Import the layers file at the top of `src/plugins/vuetify.ts`, before `vuetify/styles`:

Install UnoCSS and the Wind4 preset:

Register the UnoCSS Vite plugin in `vite.config.ts` and create `uno.config.ts`:

## Code Patterns

```bash [npx]
# generate working project for reference
npx @vuetify/cli@latest init --type=vuetify --css=unocss-wind4
```

```bash [pnpm]
# generate working project for reference
pnpx @vuetify/cli@latest init --type=vuetify --css=unocss-wind4
```

```bash [yarn]
# generate working project for reference
yarn dlx @vuetify/cli@latest init --type=vuetify --css=unocss-wind4
```

```bash [bun]
# generate working project for reference
bunx @vuetify/cli@latest init --type=vuetify --css=unocss-wind4
```

```css
@layer uno-base;
@layer uno-theme;

@layer vuetify-core;
@layer vuetify-components;
@layer vuetify-overrides;
@layer vuetify-utilities;

@layer uno-shortcuts;
@layer uno-default;

@layer vuetify-final;
```

```ts { resource="src/plugins/vuetify.ts" }
import '../styles/layers.css'
import 'vuetify/styles'
// ...
```

```bash [pnpm]
pnpm add -D unocss @unocss/preset-wind4
```

```bash [yarn]
yarn add -D unocss @unocss/preset-wind4
```

## Related Pages

- [Accessibility (a11y)](../accessibility.md)
- [Aliasing](../aliasing.md)
- [Application layout](../application-layout.md)
- [Blueprints](../blueprints.md)
- [Overview](overview.md)
- [UnoCSS + Vuetify preset](unocss-vuetify-preset.md)
