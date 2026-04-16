---
title: "Overflow"
nav_title: "Overflow"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/overflow"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Overflow

Source: https://vuetifyjs.com/en/styles/overflow

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Overflow.

## Overview

Overflow helper classes allow you to configure how content overflows when it becomes too large.

## Key Headings

- Usage
- Overflow property
- Overflow X property

## Extracted Guidance

Configure how content overflows when it becomes out of container bounds.

| Class | Properties | | - | - | | **overflow** | overflow: auto; | | **overflow-auto** | overflow: auto; | | **overflow-hidden** | overflow: hidden; | | **overflow-visible** | overflow: visible; | | **overflow-x** | overflow-x: auto; | | **overflow-x-auto** | overflow-x: auto; | | **overflow-x-hidden** | overflow-x: hidden; | | **overflow-x-scroll** | overflow-x: scroll; | | **overflow-x-visible** | overflow-x: visible; | | **overflow-y** | overflow-y: auto; | | **overflow-y-auto** | overflow-y: auto; | | **overflow-y-hidden** | overflow-y: hidden; | | **overflow-y-scroll** | overflow-y: scroll; { style="max-height: 420px;" fixed-header } | | **overflow-y-visible** | overflow-y: visible; |

Specify the elements `overflow`, `overflow-x`, or `overflow-y` property. These classes can be applied using the following format: `{overflow}-{value}`. Where **overflow** refers to the type: `overflow`, `overflow-x` or `overflow-y` and **value** can be one of: `auto`, `hidden`, or `visible`

`overflow-auto` is used to add scrollbars to an element when its content overflows the bounds. while `overflow-hidden` is used to clip any content that overflows the bounds. `overflow-visible` will prevent content from being clipped even when it overflows the bounds.

**overflow-x** can be used to specify horizontal overflows to an element if needed.

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Transitions](transitions.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
