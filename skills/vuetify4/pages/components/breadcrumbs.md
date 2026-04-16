---
title: "Breadcrumbs"
nav_title: "Breadcrumbs"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/breadcrumbs"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Breadcrumbs

Source: https://vuetifyjs.com/en/components/breadcrumbs

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Breadcrumbs component.

## Overview

The breadcrumbs component is a navigational helper for pages. It can accept a Material Icons icon or characters as a divider.

## Key Headings

- Usage
- API
- Examples
- Props
- Divider
- Slots
- Prepend
- Dividers
- Title

## Extracted Guidance

The `v-breadcrumbs` component is used as a navigational helper and hierarchy for pages.

By default, breadcrumbs use a text divider. This can be any string.

Use [slots](/api/v-breadcrumbs/#slots) for more control of the breadcrumbs, either utilizing `v-breadcrumbs-item` or other custom markup.

| Component | Description | | - | - | | [v-breadcrumbs](/api/v-breadcrumbs/) | Primary Component | | [v-breadcrumbs-item](/api/v-breadcrumbs-item/) | Sub-component used for each breadcrumb | | [v-breadcrumbs-divider](/api/v-breadcrumbs-divider/) | Sub-component used for dividing breadcrumbs |

Breadcrumbs separator can be set using `divider` property.

Prepend content with the `prepend` slot.

To customize the divider, use the `divider` slot.

You can use the `title` slot to customize each breadcrumb title.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
