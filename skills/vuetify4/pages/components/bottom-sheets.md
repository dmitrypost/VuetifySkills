---
title: "Bottom sheets"
nav_title: "Bottom sheets"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/bottom-sheets"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Bottom sheets

Source: https://vuetifyjs.com/en/components/bottom-sheets

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Bottom sheets component.

## Overview

The bottom sheet component is used for elevating content above other elements in a dialog style fashion.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Props
- Model
- Inset
- Slots
- Examples
- Music Player
- Open In List

## Extracted Guidance

The bottom sheet is a modified `v-dialog` that slides from the bottom of the screen, similar to a `v-bottom-navigation`.

Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet is meant to contain anything.

| Component | Description | |--------------------------------------------------|-------------------| | [v-bottom-sheet](/api/v-bottom-sheet/) | Primary Component |

The recommended components to use inside of a `v-bottom-sheet` are:

![Bottom Sheet Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-bottom-sheet/v-bottom-sheet-anatomy.png)

| Element / Area | Description | |----------------|--------------------------------------------------------------------------| | 1. Container | The bottom sheet is a dialog that animates from the bottom of the screen |

The `v-bottom-sheet` component is a modified [v-dialog](/components/dialogs/) that slides from the bottom of the screen. It is used for elevating content above other elements in a dialog style fashion. The bottom sheet can be controlled using the `v-model` prop or through the `activator` slot.

The following code snippet is an example of a basic `v-bottom-sheet` component:

## Code Patterns

```html
<v-bottom-sheet>
  <v-card
    title="Bottom Sheet"
    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis."
  ></v-card>
</v-bottom-sheet>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
- [Chips](chips.md)
