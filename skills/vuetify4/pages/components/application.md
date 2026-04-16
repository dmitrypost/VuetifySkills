---
title: "Application"
nav_title: "Application"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/application"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Application

Source: https://vuetifyjs.com/en/components/application

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Application component.

## Overview

Vuetify comes equipped with a default markup that makes it easy to create layouts (boilerplate) for any Vue application.

## Key Headings

- API
- Guide
- Theme

## Extracted Guidance

The `v-app` component is an optional feature that serves as the root layout component as well as providing an easy way to control the theme used at the root level.

| Component | Description | | - | - | | [v-app](/api/v-app/) | Primary Component | | [v-main](/api/v-main/) | Content area |

In Vuetify, the `v-app` component is a convenient way to dynamically modify your application's current theme and provide an entry point for your layouts. When an application is mounted, each layout child registers itself with the closest layout parent and is then automatically placed in your window.

When placing your application level components, the order matters. Elements are stacked based on when they register and are rendered in the DOM after the first **nextTick** (to account for suspense). Layouts utilize [suspense](https://vuejs.org/guide/built-ins/suspense) to allow all layout components to register before rendering the initial layout.

The following example demonstrates how the `v-app-bar` component takes priority over `v-navigation-drawer` because of its rendering order:

If we swap `v-app-bar` and `v-navigation-drawer`, the registration order changes and the layout system layers the two components differently.

The `v-app` component makes it easy to enable one of your application defined themes. By default, Vuetify comes with 2 themes, **light** and **dark**. Each one is a collection of various colors used to style each individual component. Because `v-app` acts as an interface for [theme](/features/theme/) functionality, you have the ability to change it dynamically within your template.

The following example demonstrates how to use the **theme** prop to toggle the theme from dark to light.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
- [Chips](chips.md)
