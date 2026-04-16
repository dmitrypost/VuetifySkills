---
title: "Pull To Refresh"
nav_title: "Pull To Refresh"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/pull-to-refresh"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Pull To Refresh

Source: https://vuetifyjs.com/en/components/pull-to-refresh

## Agent Use

Use this page when you need Vuetify 4 guidance about Pull To Refresh.

## Overview

The PullToRefresh allows users to update content with a simple downward swipe on their screen.

## Key Headings

- Installation
- Usage
- API

## Extracted Guidance

The PullToRefresh allows users to update content with a simple downward swipe on their screen. Works for Mobile and Desktop.

Labs components require manual import and registration with the Vuetify instance.

Drag the list downward to activate the pull-to-refresh feature.

Pull down functionality is available as soon as its immediate scrollable parent has scrolled to the top.

| Component | Description | | - | - | | [v-pull-to-refresh](/api/v-pull-to-refresh/) | Primary Component |

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { VPullToRefresh } from 'vuetify/labs/VPullToRefresh'

export default createVuetify({
  components: {
    VPullToRefresh,
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
