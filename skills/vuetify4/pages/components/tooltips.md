---
title: "Tooltips"
nav_title: "Tooltips"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/tooltips"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Tooltips

Source: https://vuetifyjs.com/en/components/tooltips

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Tooltips component.

## Overview

The tooltip component displays textual information regarding the element it is attached to.

## Key Headings

- Usage
- API
- Examples
- Props
- Interactive
- Location
- Color
- Open on Click
- Visibility
- Misc
- Tooltip at cursor

## Extracted Guidance

The `v-tooltip` component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a `v-model`. When activated, tooltips display a text label identifying an element, such as a description of its function.

Tooltips can wrap any element.

| Component | Description | | - | - | | [v-tooltip](/api/v-tooltip/) | Primary Component |

The **interactive** prop prevents the tooltip from closing during mouse interactions. For example, if the tooltip contains text that users might want to click or copy.

Use the **location** prop to specify on which side of the element the tooltip should show. Read more about **location** [here](/components/overlays/#location).

<!-- TODO: not supported #### Color

Tooltip color can be set with the `color` prop.

The **open-on-click** prop allows tooltip to open when the activator is clicked. Useful for touch devices or when manual triggering is preferred.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
