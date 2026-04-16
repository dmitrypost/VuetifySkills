---
title: "Infinite scrollers"
nav_title: "Infinite scrollers"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/infinite-scroller"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Infinite scrollers

Source: https://vuetifyjs.com/en/components/infinite-scroller

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Infinite scrollers component.

## Overview

The Infinite scroll component is a container that loads more items when scrolling. It is useful when you need to display an unknown but large number of items.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Props
- Mode
- Direction
- Side
- Color
- Slots
- Loading
- Load more
- Empty
- Error
- Misc
- Exposed properties
- Examples
- Virtualized infinite scroller

## Extracted Guidance

The `v-infinite-scroll` component displays a potentially infinite list, by loading more items of the list when scrolling. It supports either vertical or horizontal scrolling.

When scrolling towards the bottom, new items will be rendered either automatically, or manually with the click of a button.

A **load** event will be emitted when the component needs to load more content. The argument passed is an object with two properties.

|Status|Description| |------|-----------| |`'ok'`|Content was added successfully| |`'error'`|Something went wrong when adding content. This will display the `error` slot| |`'empty'`|There is no more content to fetch. This will display the `empty` slot| |`'loading'`|Content is currently loading. This will display a message that the content is loading. This status is only set internally by the component and should not be used with the **done** function|

| Component | Description | | - | - | | [v-infinite-scroll](/api/v-infinite-scroll/) | Primary Component |

The `v-infinite-scroll` works with any content in its default slot.

![Infinite scroll Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-infinite-scroll/v-infinite-scroll-anatomy.png)

| Element / Area | Description | |----------------|-----------------------------------------| | 1. Container | The infinite scroller content container | | 2. Loader | The loader content area |

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
