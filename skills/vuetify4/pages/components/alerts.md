---
title: "Alerts"
nav_title: "Alerts"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/alerts"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Alerts

Source: https://vuetifyjs.com/en/components/alerts

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Alerts component.

## Overview

The v-alert component is used to convey information to the user. Designed to stand out, the alerts come in four contextual styles.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Props
- Content
- Type
- Type reference
- Color and icon
- Density
- Variants
- Closable
- Additional Examples
- Border color
- Icon
- Outlined
- Accessibility

## Extracted Guidance

The `v-alert` component is used to convey important information to the user through the use of contextual types, icons, and colors.

An alert is a [v-sheet](/components/sheets/) that specializes in getting the user's attention. While similar to [v-banner](/components/banners/) in functionality, `v-alert` is typically inline with content and used multiple times throughout an application.

| Component | Description | | - | - | | [v-alert](/api/v-alert/) | Primary Component | | [v-alert-title](/api/v-alert-title/) | Sub-component used to display the `v-alert` title. Wraps the `#title` slot |

The recommended placement of elements inside of `v-alert` is:

![Alert Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-alert/v-alert-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | The Alert container holds all `v-alert` components | | 2. Icon | An icon that correlates to the contextual state of the alert; **success, info, warning, error** | | 3. Title | A heading with increased font-size | | 4. Text | A content area for displaying text and other inline elements | | 5. Close Icon (optional) | Used to hide the `v-alert` component |

The `v-alert` component is a callout element designed to attract the attention of a user. Unlike [v-banner](/components/banners/), the `v-alert` component is intended to be used and re-used throughout your application. An alert's color is derived from its **type** property which corresponds to your application's contextual [theme colors](/features/theme/#custom-theme-colors) and [iconfont aliases](/features/icon-fonts/#creating-a-custom-icon-set).

In addition to the standard [v-sheet](/components/sheets/) properties such as elevation, dimension, and border-radius, the `v-alert` component supports **v-model**, **variants**, and **density**.

## Code Patterns

```html
<v-alert text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus..."></v-alert>
```

```html
<v-alert
  color="success"
  icon="$success"
  title="Alert title"
  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus..."
></v-alert>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
