---
title: "Dialogs"
nav_title: "Dialogs"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/dialogs"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Dialogs

Source: https://vuetifyjs.com/en/components/dialogs

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Dialogs component.

## Overview

The dialog component informs a user about a specific task and may contain critical information or require the user to take a specific action.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Props
- v-model
- Persistent
- Transitions
- Nesting
- Overflowed
- Slots
- Default
- Activator
- Examples
- Scrollable
- Form
- Loader
- Fullscreen

## Extracted Guidance

The `v-dialog` component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.

In this basic example we use the **activator** slot to render a button that is used to open the dialog. When using the **activator** slot it is important that you bind the **props** object from the slot (using `v-bind`) to the element that will activate the dialog. See the examples below for more ways of activating a dialog.

| Component | Description | | - | - | | [v-dialog](/api/v-dialog/) | Primary component | | [v-overlay](/api/v-overlay/) | Extended component |

The recommended components to use inside of a `v-dialog` are:

![Dialog Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-dialog/v-dialog-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | The dialog's content that animates from the activator | | 2. Activator | The element that activates the dialog |

The `v-dialog` component is used to inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. They are controlled by a **v-model** and/or an activator.

The `v-dialog` component extends [v-overlay](/components/overlays/) and has access to all of its props.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
