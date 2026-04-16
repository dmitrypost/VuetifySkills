---
title: "Avatar groups"
nav_title: "Avatar groups"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/avatar-groups"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Avatar groups

Source: https://vuetifyjs.com/en/components/avatar-groups

## Agent Use

Use this page when you need Vuetify 4 guidance about Avatar groups.

## Overview

The avatar group component combines multiple avatars into a stacked or inline group display.

## Key Headings

- Installation
- Usage
- API
- Examples
- Props
- Items
- Size and Gap
- Reverse
- Vertical
- Slots
- Overflow
- Misc
- Hoverable

## Extracted Guidance

The `v-avatar-group` component is used to display a collection of avatars in a stacked or grouped layout, commonly used for showing collaborators, team members, or user lists.

Labs components require manual import and registration with the Vuetify instance.

Avatar groups stack avatars together with overlapping edges. Use the **items** prop to render avatars from an array, or nest `v-avatar` components directly.

| Component | Description | | - | - | | [v-avatar-group](/api/v-avatar-group/) | Primary component | | [v-avatar](/api/v-avatar/) | Sub-component used to display individual avatars |

Use the **items** prop to render avatars from an array. Strings are treated as image URLs, objects are passed as props to `v-avatar`.

Use the **size** prop to control avatar dimensions and the **gap** prop to adjust the overlap between avatars.

The **reverse** prop displays avatars in reverse stacking order. When rendering individual avatars (instead of passing `items`), use `toReversed` to counter flexbox visual order.

Use the **vertical** prop to stack avatars vertically instead of horizontally.

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { VAvatarGroup } from 'vuetify/labs/VAvatarGroup'

export default createVuetify({
  components: {
    VAvatarGroup,
  },
})
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Color inputs](color-inputs.md)
- [Command Palettes](command-palettes.md)
- [Date inputs](date-inputs.md)
- [File upload](file-upload.md)
- [Icon buttons](icon-buttons.md)
