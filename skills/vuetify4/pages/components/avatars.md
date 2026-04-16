---
title: "Avatars"
nav_title: "Avatars"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/avatars"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Avatars

Source: https://vuetifyjs.com/en/components/avatars

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Avatars component.

## Overview

The avatar component is used to control the size and border radius of an image. It can be used with numerous components to provide better visual context.

## Key Headings

- Usage
- API
- Anatomy
- Examples
- Props
- Size
- Badge
- Tile
- Slots
- Default
- Misc
- Advanced usage
- Profile Card

## Extracted Guidance

The `v-avatar` component is typically used to display circular user profile pictures. This component will allow you to dynamically size and add a border radius of responsive images, icons, and text. When **rounded** prop set to `0` will display an avatar without border radius.

Avatars in their simplest form display content within a circular container.

| Component | Description | | - | - | | [v-avatar](/api/v-avatar/) | Primary Component |

The recommended placement of elements inside of `v-avatar` is:

![Avatar Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-avatar/v-avatar-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | The Avatar container that typically holds a [v-icon](/components/icons/) or [v-img](/components/images/) component |

The `size` prop allows you to change the height and width of the avatar.

The `badge` prop wraps the avatar in a [v-badge](/components/badges/) to display a status indicator. Set it to `true` for a default dot badge, a color string, or an object of VBadge props for full customization. Use the **badge** slot to render custom content inside the badge.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
