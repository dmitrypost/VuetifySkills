---
title: "CSS Utilities - Overview"
nav_title: "Overview"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/css-utilities/overview"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# CSS Utilities - Overview

Source: https://vuetifyjs.com/en/features/css-utilities/overview

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to CSS Utilities - Overview, especially setup and global configuration decisions.

## Overview

Reduce your CSS bundle size and unlock modern utility-first styling by integrating TailwindCSS or UnoCSS alongside Vuetify.

## Key Headings

- Introduction
- Why integrate a CSS utility library?
- Limitations
- Creating a new project
- Integration with existing projects

## Extracted Guidance

Integrate TailwindCSS or UnoCSS with Vuetify to reduce bundle size and unlock modern utility-first styling.

While integrating third-party CSS utility libraries was technically possible with Vuetify v3, it required fighting specificity battles between Vuetify's own utility classes (generated with `!important`) and the incoming utilities. CSS layers — enabled by default in Vuetify v4 — change the picture. Layers give you an explicit cascade order between groups of styles, so utility-first CSS can sit above component styles without hacks or `!important` overrides.

Vuetify ships a large set of built-in utility classes (spacing, flex, display, text, etc.) that are included in every project by default. Integrating TailwindCSS or UnoCSS lets you:

Vuetify's built-in color utilities (`bg-primary`, `text-error`, etc.) automatically calculate a foreground color that ensures sufficient contrast. This works because Vuetify reads theme colors at runtime and applies a contrast multiplier based on the CSS custom property `--v-theme-on-*`. The CSS function `contrast-color()` that would enable the same automatic contrast adjustment in plain CSS is not yet supported in major browsers.

When replacing Vuetify's color utilities with TailwindCSS or UnoCSS equivalents, this automatic contrast calculation is no longer available. **You are responsible for choosing foreground colors that remain legible against the chosen background.** Use Vuetify's `--v-theme-on-*` CSS variables as your text color wherever possible, or validate contrast ratios manually.

---

The quickest way to start a new Vuetify project — including optional TailwindCSS or UnoCSS integration — is through the official Vuetify CLI. Install the latest version globally and run the wizard:

The wizard will walk you through selecting a project name, base framework (Vite or Nuxt), desired Vuetify version, and optional integrations including TailwindCSS or UnoCSS. You end up with a ready-to-run project.

## Code Patterns

```bash [pnpm]
pnpm add -g @vuetify/cli
vuetify init
```

```bash [yarn]
yarn global add @vuetify/cli
vuetify init
```

```bash [npm]
npm i -g @vuetify/cli@latest
vuetify init
```

```bash [bun]
bun add -g @vuetify/cli
vuetify init
```

```bash [Vite + TailwindCSS]
vite-tailwindcss/
├── src/
│   ├── components/
│   │   └── HelloWorld.vue
│   ├── plugins/
│   │   ├── index.ts
│   │   └── vuetify.ts              # Vuetify configuration entrypoint
│   ├── styles/
│   │   ├── layers.css              # cascade layer order
│   │   ├── settings.scss           # disables Vuetify's built-in utilities
│   │   └── tailwind.css            # breakpoints, dark/light variants
│   ├── App.vue
│   └── main.ts                     # loads Tailwind stylesheet
├── index.html
├── package.json
└── vite.config.mts                 # registers Tailwind CSS Vite plugin
```

```bash [Vite + UnoCSS Vuetify]
vite-unocss-vuetify/
├── src/
│   ├── components/
│   │   └── HelloWorld.vue
│   ├── plugins/
│   │   └── vuetify.ts              # Vuetify configuration entrypoint
│   ├── styles/
│   │   ├── layers.css              # cascade layer order
│   │   └── settings.scss           # disables Vuetify's built-in utilities
│   ├── App.vue
│   └── main.ts                     # loads UnoCSS generated styles
├── index.html
├── package.json
├── uno.config.ts                   # Vuetify preset and layer mapping
└── vite.config.mts                 # UnoCSS Vite plugin
```

```bash [Vite + UnoCSS Wind4]
vite-unocss-wind4/
├── src/
│   ├── components/
│   │   └── HelloWorld.vue
│   ├── plugins/
│   │   └── vuetify.ts              # Vuetify configuration entrypoint
│   ├── styles/
│   │   ├── layers.css              # cascade layer order
│   │   └── settings.scss           # disables Vuetify's built-in utilities
│   ├── theme/
│   │   └── breakpoints.ts          # shared breakpoints for Vuetify and UnoCSS
│   ├── App.vue
│   └── main.ts                     # loads UnoCSS generated styles
├── index.html
├── package.json
├── uno.config.ts                   # Wind4 preset, dark mode, breakpoints
└── vite.config.mts                 # UnoCSS Vite plugin
```

```bash [Nuxt + TailwindCSS]
nuxt-tailwindcss/
├── app/
│   ├── assets/
│   │   └── styles/
│   │       ├── layers.css          # cascade layer order
│   │       ├── settings.scss       # disables Vuetify's built-in utilities
│   │       └── tailwind.css        # breakpoints, dark/light variants
│   ├── components/
│   │   └── HelloWorld.vue
│   ├── pages/
│   │   └── index.vue
│   └── app.vue
├── nuxt.config.ts                  # modules and style load order
└── package.json
```

## Related Pages

- [Accessibility (a11y)](../accessibility.md)
- [Aliasing](../aliasing.md)
- [Application layout](../application-layout.md)
- [Blueprints](../blueprints.md)
- [UnoCSS + Vuetify preset](unocss-vuetify-preset.md)
- [UnoCSS + presetWind4](unocss-tailwind-preset.md)
