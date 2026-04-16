---
title: "Routing"
nav_title: "Routing"
section: "Common concepts"
source_url: "https://vuetifyjs.com/en/concepts/routing"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Routing

Source: https://vuetifyjs.com/en/concepts/routing

## Agent Use

Use this page when you need Vuetify 4 guidance about Routing.

## Overview

Routing

## Key Headings

- Guide
- Router view transitions

## Extracted Guidance

Routing is the process of navigating between different views or pages in an application.

[Vue Router](https://router.vuejs.org/) is the official router for Vue. It allows you to define routes and map them to components, enabling navigation between different views in your application.

The following components have built in support for routing:

These components can act like a [router-link](https://router.vuejs.org/guide/advanced/extending-router-link.html) and have access to props such as **to** and **exact**:

Vue Router lets you add transitions between different views. The **router-view** component is used to render the current route's component, and you can use the **transition** component to add transitions between different views.

Visit the [Transitions](/styles/transitions) page for more information.

Overlay components can be closed with the browser back button, but this also triggers when calling `router.back()`. Use `:close-on-back="false"` to disable this behavior.

## Code Patterns

```html
<v-btn to="/home" text="Home"></v-btn>
```

```html { resource="src/App.vue" }
<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>My App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component }">
        <v-fade-transition hide-on-leave>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-app>
</template>
```

## Related Pages

- [Density and sizing](density-and-sizing.md)
- [Items](items.md)
- [v-model](v-model.md)
- [Variants](variants.md)
