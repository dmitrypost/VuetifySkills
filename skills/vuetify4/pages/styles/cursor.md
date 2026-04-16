---
title: "Cursor"
nav_title: "Cursor"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/cursor"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Cursor

Source: https://vuetifyjs.com/en/styles/cursor

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Cursor.

## Overview

Assign a custom cursor to any element.

## Key Headings

- Usage
- SASS variables

## Extracted Guidance

Utilities for controlling the cursor styling when hovering over elements.

| Class | Properties | | - | - | | **cursor-auto** | cursor: auto; | | **cursor-default** | cursor: default; | | **cursor-grab** | cursor: grab; | | **cursor-grabbing** | cursor: grabbing; | | **cursor-help** | cursor: help; | | **cursor-move** | cursor: move; | | **cursor-none** | cursor: none; | | **cursor-not-allowed** | cursor: not-allowed; | | **cursor-pointer** | cursor: pointer; | | **cursor-progress** | cursor: progress; | | **cursor-text** | cursor: text; | | **cursor-wait** | cursor: wait; { style="max-height: 420px;" fixed-header } |

Apply custom cursor styling to a component or element.

You can also use the following SASS variables to customize the border color and width:

Disable the generation of **cursor** utility classes by overwriting the utilities value:

## Code Patterns

```scss { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $utilities: (
    "cursor": (
      property: cursor,
      class: cursor,
      values: auto default pointer wait text move help not-allowed progress grab grabbing none
    )
  )
);
```

```scss { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $utilities: (
    "cursor": false,
  ),
);
```

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Transitions](transitions.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
