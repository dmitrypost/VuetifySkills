---
title: "Virtual scrollers"
nav_title: "Virtual scrollers"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/virtual-scroller"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Virtual scrollers

Source: https://vuetifyjs.com/en/components/virtual-scroller

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Virtual scrollers component.

## Overview

The Virtual scroll component is a container that renders only visible elements. It is useful when you need to display large amounts of uniform data.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Props
- Height
- Item Height
- Renderless
- Examples
- User Directory

## Extracted Guidance

The `v-virtual-scroll` component displays a virtual, _infinite_ list. It supports dynamic height and scrolling vertically and is a good alternative to pagination.

The virtual scroller displays just enough records to fill the viewport and uses the existing component, rehydrating it with new data.

| Component | Description | | - | - | | [v-virtual-scroll](/api/v-virtual-scroll/) | Primary Component |

The `v-virtual-scroll` component contains only a default slot with no styling options. It is typically used with large collections of [v-list-item](/components/lists/)s.

![Virtual scroll Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-virtual-scroll/v-virtual-scroll-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | The rendered content area from the provided **items** prop |

The `v-virtual-scroll` allows you to display thousands of records on a single page without the performance hit of actually showing all of them at once. `v-virtual-scroll` is devoid of styling and pairs well with components such as [v-card](/components/cards/) to provide a better visual experience.

The `v-virtual-scroll` component has a small API mainly used to configure the root and item height.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
