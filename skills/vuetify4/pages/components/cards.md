---
title: "Cards"
nav_title: "Cards"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/cards"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Cards

Source: https://vuetifyjs.com/en/components/cards

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Cards component.

## Overview

The v-card component is a versatile and enhanced sheet of paper that provides a simple interface for headings, text, images, and actions.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Basics
- Combined
- Props
- Variants
- Color
- Elevation
- Hover
- Href
- Link
- Disabled
- Image
- Slots
- Avatar and icon
- Examples

## Extracted Guidance

The `v-card` component is a versatile and enhanced version of [v-sheet](/components/sheets/) that provides a simple interface for headings, text, images, icons, and more.

The `v-card` component is a stylish way to wrap different types of content; such as tables, images, or user actions.

| Component | Description | | - | - | | [v-card](/api/v-card/) | Primary Component | | [v-card-item](/api/v-card-item/) | Sub-component used to wrap the Card's `v-card-title` and `v-card-subtitle` components. | | [v-card-title](/api/v-card-title/) | Sub-component used to display the Card's title. Wraps the `#title` slot | | [v-card-subtitle](/api/v-card-subtitle/) | Sub-component used to display the Card's subtitle. Wraps the `#subtitle` slot. | | [v-card-text](/api/v-card-text/) | Sub-component used to display the Card's text. Wraps the `#text` slot. | | [v-card-actions](/api/v-card-actions/) | Sub-component that modifies the default styling of [v-btn](/components/buttons/). Wraps the `#actions` slot |

The recommended placement of elements inside of `v-card` is:

![Card Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-card/v-card-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | The Card container holds all `v-card` components. Composed of 3 major parts: `v-card-item`, `v-card-text`, and `v-card-actions` | | 2. Title (optional) | A heading with increased **font-size** | | 3. Subtitle (optional) | A subheading with a lower emphasis text color | | 4. Text (optional) | A content area with a lower emphasis text color | | 5. Actions (optional) | A content area that typically contains one or more [v-btn](/components/buttons) components |

The `v-card` component is a versatile and enhanced sheet of paper that provides a simple interface for headings, text, images, and actions. It is a content container that is the most common way to present information.

There are three ways you can populate a `v-card` with content. The first one is by using props, the second one is by slots, and the third one is by manually using the `v-card-*` components.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Chips](chips.md)
