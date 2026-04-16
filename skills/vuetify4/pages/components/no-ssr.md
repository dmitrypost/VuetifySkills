---
title: "No SSR"
nav_title: "No SSR"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/no-ssr"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# No SSR

Source: https://vuetifyjs.com/en/components/no-ssr

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 No SSR component.

## Overview

The No SSR component is a simple component that doesn't get rendered on the server, but only on the client.

## Key Headings

- Usage
- API

## Extracted Guidance

The `v-no-ssr` component is a simple wrapper that allows a developer to designate what a server-side renderer should not render, but leave to the client.

The `v-no-ssr` component prevents its content from rendering on the server side.

| Component | Description | | - | - | | [v-no-ssr](/api/v-no-ssr/) | Primary Component |

## Code Patterns

```html
<template>
  <v-no-ssr>
    <!-- Everything inside will only render on the Client -->
    <v-sheet>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae minus, incidunt laboriosam amet doloribus officiis?
    </v-sheet>
  </v-no-ssr>
</template>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
