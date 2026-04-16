---
title: "Navigation drawers"
nav_title: "Navigation drawers"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/navigation-drawers"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Navigation drawers

Source: https://vuetifyjs.com/en/components/navigation-drawers

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Navigation drawers component.

## Overview

The navigation drawer component contains internal navigation links for an application and can be permanently on-screen or controlled programmatically.

## Key Headings

- Usage
- API
- Caveats
- Examples
- Props
- Bottom drawer
- Expand on hover
- Background images
- Rail variant
- Floating
- Location
- Temporary
- Misc
- Colored drawer
- Multiple drawers

## Extracted Guidance

The `v-navigation-drawer` component is what your users will utilize to navigate through the application.

The navigation drawer is primarily used to house links to the pages in your application and is pre-configured to work with or without **vue-router** right out the box. Using `null` as the starting value for its **v-model** will initialize the drawer as closed on mobile and as open on desktop. It is common to pair drawers with the [v-list](/components/lists) component using the **nav** property. You can learn more by exploring [application layout](/features/application-layout) examples.

For the purpose of display, some examples are wrapped in a `v-card` element. Within your application you will generally place the `v-navigation-drawer` as a direct child of `v-app`.

| Component | Description | | ------------------------------------------------ | ----------------------------------------- | | [v-navigation-drawer](/api/v-navigation-drawer/) | Primary Component | | [v-list-item](/api/v-list-item/) | Component used to create navigation links |

Using the **bottom** prop, we are able to relocate our drawer on mobile devices to come from the bottom of the screen. This is an alternative style and only activates once the **mobile-breakpoint** is met.

Places the component in **rail** mode and expands once hovered. This **does not** alter the content area of **v-main**. The width can be controlled with the **rail-width** property.

Apply a custom background to your drawer via the **image** prop. If you need to customize it further, you can use the `image` slot and render your own `v-img`.

When using the **rail** prop, the drawer will shrink (default 56px) and hide everything inside of `v-list` except the first element.

## Code Patterns

```html { resource="src/App.vue" }
<template>
  <v-app>
    <v-navigation-drawer />
  </v-app>
</template>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
