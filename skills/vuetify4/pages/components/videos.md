---
title: "Video"
nav_title: "Videos"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/videos"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Video

Source: https://vuetifyjs.com/en/components/videos

## Agent Use

Use this page when you need Vuetify 4 guidance about Video.

## Overview

The video component acts as a customizable wrapper for native video element.

## Key Headings

- Installation
- Usage
- API
- Guide
- Props
- Image
- Start at
- Color
- Density
- Rounded
- Slots
- Sources
- Error
- Header
- Append and prepend
- Controls
- Examples
- Video card

## Extracted Guidance

The `v-video` component is useful for background video or as a customizable player for self-hosted content.

Labs components require manual import and registration with the Vuetify instance.

A basic example of the video component.

| Component | Description | | - | - | | [v-video](/api/v-video/) | Primary Component | | [v-video-controls](/api/v-video-controls/) | Sub-component used to display a video player controls | | [v-video-volume](/api/v-video-volume/) | Sub-component used to display a volume control |

This component is only useful if you self-host videos or when you can reliably obtain direct media file URL and it is permitted by the host terms of service to use custom players.

The `v-video` component lets you display videos with controls that nicely fit into your app design. It comes equiped with common keyboard shortcuts, and three predefined control variants.

All attributes that are not explicitly defined in the component API (`autoplay`, `muted`, `loop`, etc.) are passed to the underlying native HTML video element.

The `v-video` component has several props that allow you to customize its appearance and behavior.

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { VVideo } from 'vuetify/labs/VVideo'

export default createVuetify({
  components: {
    VVideo,
  },
})
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Avatar groups](avatar-groups.md)
- [Color inputs](color-inputs.md)
- [Command Palettes](command-palettes.md)
- [Date inputs](date-inputs.md)
- [File upload](file-upload.md)
