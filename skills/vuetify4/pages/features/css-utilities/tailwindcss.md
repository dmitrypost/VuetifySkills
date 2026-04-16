---
title: "TailwindCSS"
nav_title: "TailwindCSS"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/css-utilities/tailwindcss"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# TailwindCSS

Source: https://vuetifyjs.com/en/features/css-utilities/tailwindcss

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to TailwindCSS, especially setup and global configuration decisions.

## Overview

Integrate TailwindCSS v4 into an existing Vuetify project using Vite or Nuxt.

## Key Headings

- Establish CSS layer order
- Setup dependencies
- Vite
- Nuxt
- Configure TailwindCSS
- Disable Vuetify's built-in utilities
- Align breakpoints { id="breakpoints" }
- Dark mode { id="dark-mode" }
- Typography { id="typography" }
- Theme colors { id="theme-colors" }
- Using MD3 elevation

## Extracted Guidance

Integrate TailwindCSS v4 into an existing Vuetify project for a smaller CSS bundle, on-demand utility generation, and variants like `hover:`, `dark:`, and responsive prefixes.

---

Create a `layers.css` file that declares the cascade layers in order. `tailwind` goes above component styles but below `vuetify-final`, where Vuetify keeps its transitions:

This file must be loaded **before** any other styles. In a **Vite** project, save it as `src/styles/layers.css` and import it at the top of `src/plugins/vuetify.ts`, before `vuetify/styles`. You can find the exact configuration snippets in the sections for Vite and Nuxt below.

Import the layers file at the top of `src/plugins/vuetify.ts`, before `vuetify/styles`:

Install TailwindCSS and the Vite plugin:

Register `tailwindcss()` as the **first** entry in `plugins` inside `vite.config.mts`:

Import the TailwindCSS stylesheet (see [Configure TailwindCSS](#configure-tailwindcss)) in `src/main.ts`:

## Code Patterns

```bash [npx]
# generate working project for reference
npx @vuetify/cli@latest init --type=vuetify --css=tailwindcss
```

```bash [pnpm]
# generate working project for reference
pnpx @vuetify/cli@latest init --type=vuetify --css=tailwindcss
```

```bash [yarn]
# generate working project for reference
yarn dlx @vuetify/cli@latest init --type=vuetify --css=tailwindcss
```

```bash [bun]
# generate working project for reference
bunx @vuetify/cli@latest init --type=vuetify --css=tailwindcss
```

```css
@layer tailwind-theme;
@layer tailwind-reset;

@layer vuetify-core;
@layer vuetify-components;
@layer vuetify-overrides;
@layer vuetify-utilities;

@layer tailwind-utilities;

@layer vuetify-final;
```

```ts { resource="src/plugins/vuetify.ts" }
import '../styles/layers.css'
import 'vuetify/styles'
// ...
```

```bash [pnpm]
pnpm add -D tailwindcss @tailwindcss/vite
```

```bash [yarn]
yarn add -D tailwindcss @tailwindcss/vite
```

## Related Pages

- [Accessibility (a11y)](../accessibility.md)
- [Aliasing](../aliasing.md)
- [Application layout](../application-layout.md)
- [Blueprints](../blueprints.md)
- [Overview](overview.md)
- [UnoCSS + Vuetify preset](unocss-vuetify-preset.md)
