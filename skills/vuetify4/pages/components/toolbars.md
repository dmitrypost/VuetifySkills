---
title: "Toolbars"
nav_title: "Toolbars"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/toolbars"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Toolbars

Source: https://vuetifyjs.com/en/components/toolbars

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Toolbars component.

## Overview

The toolbar component sits above the content that it affects and provides an area for labeling and additional actions.

## Key Headings

- Usage
- API
- Caveats
- Guide
- Props
- Dense toolbars
- Collapse
- Background
- Location
- Extended
- Extension height
- Slots
- Extension
- Examples
- Contextual action bar
- Flexible and card toolbar
- Floating with search
- Tooltips and Speed Dial

## Extracted Guidance

The `v-toolbar` component is pivotal to any graphical user interface (GUI), as it generally is the primary source of site navigation.

| Component | Description | | - | - | | [v-toolbar](/api/v-toolbar/) | Primary Component | | [v-toolbar-items](/api/v-toolbar-items/) | Sub-component used to modify the styling of [v-btn](/components/buttons) | | [v-toolbar-title](/api/v-toolbar-title/) | Sub-component used to display the title of the toolbar | | [v-btn](/api/v-btn/) | Sub-component commonly used in `v-toolbar` |

When `v-btn`s with the **icon** prop are used inside of `v-toolbar` and `v-app-bar` they will automatically have their size increased and negative margin applied to ensure proper spacing according to the Material Design Specification. If you choose to wrap your buttons in any container, such as a `div`, you will need to apply negative margin to that container in order to properly align them.

A toolbar is a flexible container that can be used in a number of ways. By default, the toolbar is 64px high on desktop and 56px high on mobile. There are a number of helper components available to use with the toolbar. The `v-toolbar-title` is used for displaying a title and `v-toolbar-items` allow [v-btn](/components/buttons) to extend full height.

The toolbar has a number of props that can be used to modify its appearance and behavior.

Dense toolbars reduce their height to _48px_.

Toolbars can be collapsed to save screen space.

Toolbars can display a background as opposed to a solid color using the **src** prop. This can be modified further by using the **img** slot and providing your own [v-img](/components/images) component. Backgrounds can be faded using a [v-app-bar](/components/app-bars#prominent-w-scroll-shrink-and-image)

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
