---
title: "Banners"
nav_title: "Banners"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/banners"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Banners

Source: https://vuetifyjs.com/en/components/banners

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Banners component.

## Overview

The banner component displays an important and concise message for a user to address. It can also indicate actions that the user can take.

## Key Headings

- Usage
- API
- Anatomy
- Examples
- Props
- Lines
- Sticky
- Slots
- Actions
- Icon
- Prepend

## Extracted Guidance

The `v-banner` component is used as a middle-interrupting message to the user with one to two actions.

Banners come in two variations **single-line** and **multi-line** (implicit). These can have icons and actions that you can use with your message.

| Component | Description | | - | - | | [v-banner](/api/v-banner/) | Primary Component | | [v-banner-text](/api/v-banner-text/) | Sub-component used to display the `v-banner` subtitle. Wraps the `#text` slot | | [v-banner-actions](/api/v-banner-actions/) | Sub-component that modifies the default styling of [v-btn](/components/buttons/). Wraps the `#actions` slot |

The recommended placement of elements inside of `v-banner` is:

![Banner Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-banner/v-banner-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | The Banner container holds all `v-banner` components | | 2. Avatar / Icon (optional) | Leading media content intended to improve visual context | | 3. Text | A content area for displaying text and other inline elements | | 4. Actions (optional) | A content area that typically contains one or more [v-btn](/components/buttons) components |

The prop **lines** can be used to specify how the displayed text should be handled based on its length.

You can optionally turn on the **sticky** prop to ensure that the content is pinned to the top of the screen.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
