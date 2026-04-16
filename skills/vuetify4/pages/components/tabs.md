---
title: "Tabs"
nav_title: "Tabs"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/tabs"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Tabs

Source: https://vuetifyjs.com/en/components/tabs

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Tabs component.

## Overview

The tabs component provides a way to organize and navigate between groups of content that are related at the same level of hierarchy.

## Key Headings

- Usage
- API
- Examples
- Props
- Align tabs
- Align tabs with title
- Center active
- Custom icons
- Fixed tabs
- Grow
- Stacked
- Slider Transition
- Pagination
- Vertical tabs
- Spaced
- Misc
- Content
- Mobile tabs

## Extracted Guidance

The `v-tabs` component is used for hiding content behind a selectable item. This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content.

The `v-tabs` component is a styled extension of [v-slide-group](/components/slide-groups). It provides an easy to use interface for organizing content into separate sections.

| Component | Description | | - | - | | [v-tabs](/api/v-tabs/) | Primary Component | | [v-tab](/api/v-tab/) | Sub-component used for modifying the `v-tabs` state |

The **align-tabs** prop will align tabs to the `start`, `center`, or `end` of its container.

Make `v-tabs` line up with the `v-toolbar-title` component by setting the **align-tabs** prop to `title` (`v-app-bar-nav-icon` or `v-btn` must be used in `v-toolbar`).

The **center-active** prop will make the active tab always centered.

**prev-icon** and **next-icon** can be used for applying custom pagination icons.

The **fixed-tabs** prop forces `v-tab` items to take up all available space up to 300px width, and centers them.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
