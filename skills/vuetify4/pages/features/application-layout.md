---
title: "Application layout"
nav_title: "Application layout"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/application-layout"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Application layout

Source: https://vuetifyjs.com/en/features/application-layout

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Application layout, especially setup and global configuration decisions.

## Overview

Vuetify provides functionality to create complex layouts using components such as app bars and navigation drawers

## Key Headings

- Usage
- Complex layouts
- Dynamic layouts and order
- Accessing layout information

## Extracted Guidance

Vuetify features an application layout system that allows you to easily create complex website designs.

The system is built around an outside-in principle, where each application layout component reserves space for itself in one of four directions (left, right, up, down), leaving the available free space for any subsequent layout component(s) to occupy.

The following components are compatible with the layout system:

| Component | Description | | - | - | | [v-app-bar](/components/app-bars/) | A container that is used navigation, branding, search, and actions | | [v-system-bar](/components/system-bars/) | A system bar replaces the native phone system bar | | [v-navigation-drawer](/components/navigation-drawers/) | A persistent or temporary container that holds site navigation links | | [v-footer](/components/footers/) | A generic component used to replace the default html footer | | [v-bottom-navigation](/components/bottom-navigation/) | A persistent or temporary container that holds navigation links and is typically used for smaller devices |

The final part of the layout system is the **v-main** component. Inside this is where you place your page content. It will use the remaining free space on the page after all layout components have reserved their space.

In the following examples, **v-app** has been replaced by **v-layout**. This is because **v-app** defaults to a minimum height of `100dvh`. In your own application you would always use **v-app** for the root layout.

By default, the order in which layout components will attempt to reserve space is simply the order that they appear in your markup. To illustrate this concept, see the following two examples where a single **v-app-bar** and **v-navigation-drawer** have changed places in the markup.

As you can see, placing the **v-app-bar** before the **v-navigation-drawer** means that it will use the full width of the screen. When it it placed after the **v-navigation-drawer**, it will only use the free space left over.

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
- [UnoCSS + presetWind4](css-utilities/unocss-tailwind-preset.md)
