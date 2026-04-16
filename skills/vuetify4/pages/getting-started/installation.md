---
title: "Get started with Vuetify 4"
nav_title: "Installation"
section: "Getting started"
source_url: "https://vuetifyjs.com/en/getting-started/installation"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Get started with Vuetify 4

Source: https://vuetifyjs.com/en/getting-started/installation

## Agent Use

Use this page when you need Vuetify 4 guidance about Get started with Vuetify 4.

## Overview

Details for v4 release - faq, changes, and upgrading.

## Key Headings

- Installation
- Using Vite
- Using Nuxt 3
- Manual setup
- vuetify-nuxt-module
- Using Laravel
- Using CDN
- Using as ES Module with CDN
- Using Vitepress
- Existing projects
- Fonts
- Option A — Install via @fontsource/roboto
- Option B — Install via unplugin-fonts + @fontsource (recommended)
- SSR caveats
- Exposed exports
- JS / TS
- SASS
- Nightly Builds

## Extracted Guidance

Get started with Vuetify, the world’s most popular Vue.js framework for building feature rich, blazing fast applications.

Vuetify has support for multiple different installation paths with the most common scaffolding tool being [create-vuetify](https://github.com/vuetifyjs/create-vuetify)

For more information regarding supported package managers, please visit their official websites:

To get started with Vuetify 4, simply paste the following code into your terminal:

This command prompts you with a few options before generating your scaffolded Vue / Vuetify 4 project.

After making your selections, [create-vuetify](https://github.com/vuetifyjs/create-vuetify) will generate the structure for your new application.

Once the scaffold is complete, start the vite development server by running the following commands:

[Nuxt](https://nuxt.com/) is an open-source framework that has helpful features to quickly get you started with developing a full-stack Vue app, such as file-based routing, SSR and component auto-imports.

## Code Patterns

```bash [pnpm]
pnpm create vuetify
```

```bash [yarn]
yarn create vuetify
```

```bash [npm]
npm create vuetify@latest
```

```bash [bun]
bun create vuetify
```

```bash
success Installed "create-vuetify@x.x.x" with binaries:
    - create-vuetify

? Project name: ❯ vuetify-project // the folder to generate your application
? Use TypeScript?: ❯ No / Yes
? Would you like to install dependencies with yarn, npm, or pnpm?:
  ❯ yarn
    npm
    pnpm
    bun
    none
```

```bash
cd vuetify-project
pnpm dev
```

```bash [pnpm]
pnpx nuxi@latest init <project-name>
cd <project-name>
# Create a .npmrc file with shamefully-hoist=true
pnpm install
```

```bash [yarn]
npx nuxi@latest init <project-name>
cd <project-name>
yarn
```

## Related Pages

- [Frequently asked questions](frequently-asked-questions.md)
- [Wireframes](wireframes.md)
- [Unit testing](unit-testing.md)
- [Browser support](browser-support.md)
- [Upgrade guide](upgrade-guide.md)
- [Release notes](release-notes.md)
