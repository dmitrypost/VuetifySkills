---
title: "UnoCSS with Vuetify preset"
nav_title: "UnoCSS + Vuetify preset"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/css-utilities/unocss-vuetify-preset"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# UnoCSS with Vuetify preset

Source: https://vuetifyjs.com/en/features/css-utilities/unocss-vuetify-preset

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to UnoCSS with Vuetify preset, especially setup and global configuration decisions.

## Overview

Integrate UnoCSS with the unocss-preset-vuetify into an existing Vuetify project using Vite or Nuxt.

## Key Headings

- Establish CSS layer order
- Setup dependencies
- Vite
- Nuxt
- Disable Vuetify's built-in utilities
- How on-demand generation works
- Safelist prop-driven classes

## Extracted Guidance

Generate Vuetify's built-in utility classes on demand with `unocss-preset-vuetify`, maintained by the Vuetify team.

No class-naming convention change required — use the same Vuetify class names you already know, generated on demand instead of shipped in full.

---

Create a `layers.css` file that declares the cascade layers in order. `uno` goes above component styles but below `vuetify-final`, where Vuetify keeps its transitions:

This file must be loaded **before** any other styles. In a **Vite** project, save it as `src/styles/layers.css` and import it at the top of `src/plugins/vuetify.ts`, before `vuetify/styles`.

Import the layers file at the top of `src/plugins/vuetify.ts`, before `vuetify/styles`:

Install UnoCSS and the Vuetify preset:

Register the UnoCSS Vite plugin in `vite.config.ts` and create `uno.config.ts`:

## Code Patterns

```bash [npx]
# generate working project for reference
npx @vuetify/cli@latest init --type=vuetify --css=unocss-vuetify
```

```bash [pnpm]
# generate working project for reference
pnpx @vuetify/cli@latest init --type=vuetify --css=unocss-vuetify
```

```bash [yarn]
# generate working project for reference
yarn dlx @vuetify/cli@latest init --type=vuetify --css=unocss-vuetify
```

```bash [bun]
# generate working project for reference
bunx @vuetify/cli@latest init --type=vuetify --css=unocss-vuetify
```

```css
@layer vuetify-core;
@layer vuetify-components;
@layer vuetify-overrides;
@layer vuetify-utilities;
@layer uno;
@layer vuetify-final;
```

```ts { resource="src/plugins/vuetify.ts" }
import '../styles/layers.css'
import 'vuetify/styles'
// ...
```

```bash [pnpm]
pnpm add -D unocss unocss-preset-vuetify
```

```bash [yarn]
yarn add -D unocss unocss-preset-vuetify
```

## Related Pages

- [Accessibility (a11y)](../accessibility.md)
- [Aliasing](../aliasing.md)
- [Application layout](../application-layout.md)
- [Blueprints](../blueprints.md)
- [Overview](overview.md)
- [UnoCSS + presetWind4](unocss-tailwind-preset.md)
