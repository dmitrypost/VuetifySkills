---
title: "App bars"
nav_title: "App bars"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/app-bars"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# App bars

Source: https://vuetifyjs.com/en/components/app-bars

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 App bars component.

## Overview

The app bar component is a supercharged toolbar with advanced scrolling techniques and application layout support.

## Key Headings

- Usage
- API
- Anatomy
- Examples
- Props
- Scroll behavior
- Density
- Images
- Prominent

## Extracted Guidance

The `v-app-bar` component is pivotal to any graphical user interface (GUI), as it generally is the primary source of site navigation.

The `v-app-bar` component is used for application-wide actions and information.

| Component | Description | | - | - | | [v-app-bar](/api/v-app-bar/) | Primary Component | | [v-app-bar-nav-icon](/api/v-app-bar-nav-icon/) | A customized [v-btn](/components/buttons/) component that uses a default *icon* value of **$menu** | | [v-app-bar-title](/api/v-app-bar-title/) | An extension of `v-toolbar-title` that is used for scrolling techniques |

The app-bar component works great in conjunction with a [v-navigation-drawer](/components/navigation-drawers) for providing site navigation in your application.

The recommended placement of elements inside of `v-app-bar` is:

![App Bar Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-app-bar/v-app-bar-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | The App Bar container holds all `v-app-bar` components | | 2. App Bar Icon (optional) | A styled icon button component created that is often used to control the state of a `v-navigation drawer` | | 3. Title (optional) | A heading with increased **font-size** | | 4. Action items (optional) | Used to highlight certain actions not in the overflow menu | | 5. Overflow menu (optional) | Place less often used action items into a hidden menu |

When a `v-btn` with the `icon` prop is used inside of `v-toolbar` and `v-app-bar` they will automatically have their size increased and negative margin applied to ensure proper spacing according to the Material Design Specification. If you choose to wrap your buttons in any container, such as a `div`, you will need to apply negative margin to that container in order to properly align them.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
