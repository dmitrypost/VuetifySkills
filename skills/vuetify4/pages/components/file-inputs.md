---
title: "File inputs"
nav_title: "File inputs"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/file-inputs"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# File inputs

Source: https://vuetifyjs.com/en/components/file-inputs

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 File inputs component.

## Overview

The file input component is a specialized input that provides a clean interface for selecting files, showing detailed selection information and upload progress.

## Key Headings

- Usage
- API
- Examples
- Props
- Accept
- Chips
- Counter
- Density
- Multiple
- Prepend icon
- Show size
- Validation
- Slots
- Selection
- Misc
- Complex selection slot

## Extracted Guidance

The `v-file-input` component is a specialized input that provides a clean interface for selecting files, showing detailed selection information and upload progress. It is meant to be a direct replacement for a standard file input.

At its core, `v-file-input` is built on the same [VField](/components/text-fields) and VInput primitives as [v-text-field](/components/text-fields), giving it a consistent look and feel without directly extending it.

| Component | Description | | - | - | | [v-file-input](/api/v-file-input/) | Primary component |

`v-file-input` component can accept only specific media formats/file types if you want. For more information, checkout the documentation on the [accept attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept).

A selected file can be displayed as a [chip](/components/chips). When using the **chips** and **multiple** props, each chip will be displayed (as opposed to the file count).

When using the **show-size** property along with **counter**, the total number of files and size will be displayed under the input.

You can reduces the file input height with the **density** prop.

The `v-file-input` can contain multiple files at the same time when using the **multiple** prop.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
