---
title: "Skeleton loaders"
nav_title: "Skeleton loaders"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/skeleton-loaders"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Skeleton loaders

Source: https://vuetifyjs.com/en/components/skeleton-loaders

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Skeleton loaders component.

## Overview

The skeleton loader component provides a placeholder loading state for when content is being fetched from a server or loaded asynchronously. It can be used in a variety of contexts, including cards, lists, and tables.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Props
- Type
- Loading
- Elevation
- Boilerplate
- Examples
- Ice-cream suggestions
- SASS Variables
- Accessibility
- Configuring the aria-label

## Extracted Guidance

Skeleton loaders provide a simple way to display loading placeholders in your application.

The `v-skeleton-loader` component provides a user with a visual indicator that content is coming / loading. This is better received than traditional full-screen loaders.

| Component | Description | | - | - | | [v-skeleton-loader](/api/v-skeleton-loader/) | Primary Component |

The `v-skeleton-loader` has a default slot that is rendered when the component is not in a loading state.

![Skeleton loader Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-skeleton-loader/v-skeleton-loader-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | The container is the root element of the component. |

The `v-skeleton-loader` component can be used in a variety of contexts, including cards, lists, and tables. It can be used to create a placeholder loading state for when content is being fetched from a server or loaded asynchronously.

The following code snippet is an example of a basic `v-skeleton-loader` component. When no **type** property is provided, the component will default to an **image** type.

## Code Patterns

```html
<v-skeleton-loader></v-skeleton-loader>
```

```scss { resource="src/settings.scss" }
@use 'vuetify/settings' with (
  $skeleton-loader-gutter: 24px,
  $skeleton-loader-button-width: 80px,
);
```

```js { resource="src/plugins/vuetify.js" }
import { createVuetify } from 'vuetify'

export default createVuetify({
  locale: {
    messages: {
      loading: 'Loading content...',
    },
  },
})
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
