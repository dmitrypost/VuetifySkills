---
title: "Display"
nav_title: "Display"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/display"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Display

Source: https://vuetifyjs.com/en/styles/display

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Display.

## Overview

Display helper classes allow you to control when elements should display based upon viewport.

## Key Headings

- Usage
- Visibility
- Caveats
- Display in print
- Accessibility
- Screen readers

## Extracted Guidance

Display helpers control content visibility and display type based on the viewport.

| Class | Properties | | - | - | | **d-none** | display: none; | | **d-sm-none** | display: none; | | **d-md-none** | display: none; | | **d-lg-none** | display: none; | | **d-xl-none** | display: none; | | **d-xxl-none** | display: none; | | **d-sm-flex** | display: flex; | | **d-md-flex** | display: flex; | | **d-lg-flex** | display: flex; | | **d-xl-flex** | display: flex; | | **d-xxl-flex** | display: flex; | | **d-sm-inline** | display: inline; | | **d-md-inline** | display: inline; | | **d-lg-inline** | display: inline; | | **d-xl-inline** | display: inline; | | **d-xxl-inline** | display: inline; | | **d-sm-inline-block** | display: inline-block; | | **d-md-inline-block** | display: inline-block; | | **d-lg-inline-block** | display: inline-block; | | **d-xl-inline-block** | display: inline-block; | | **d-xxl-inline-block** | display: inline-block; | | **d-sm-table** | display: table; | | **d-md-table** | display: table; | | **d-lg-table** | display: table; | | **d-xl-table** | display: table; | | **d-xxl-table** | display: table; | | **d-sm-table-cell** | display: table-cell; | | **d-md-table-cell** | display: table-cell; | | **d-lg-table-cell** | display: table-cell; | | **d-xl-table-cell** | display: table-cell; | | **d-xxl-table-cell** | display: table-cell; | | **d-sm-table-row** | display: table-row; | | **d-md-table-row** | display: table-row; | | **d-lg-table-row** | display: table-row; | | **d-xl-table-row** | display: table-row; | | **d-xxl-table-row** | display: table-row; | | **d-sm-flex** | display: flex; | | **d-md-flex** | display: flex; | | **d-lg-flex** | display: flex; | | **d-xl-flex** | display: flex; | | **d-xxl-flex** | display: flex; | | **d-sm-inline-flex** | display: inline-flex; | | **d-md-inline-flex** | display: inline-flex; | | **d-lg-inline-flex** | display: inline-flex; | | **d-xl-inline-flex** | display: inline-flex; | | **d-xxl-inline-flex** | display: inline-flex; | | **d-print-none** | display: none; | | **d-print-inline** | display: inline; | | **d-print-inline-block** | display: inline-block; | | **d-print-block** | display: block; | | **d-print-table** | display: table; | | **d-print-table-cell** | display: table-cell; | | **d-print-table-row** | display: table-row; | | **d-print-flex** | display: flex; | | **d-print-inline-flex** | display: inline-flex; | | **d-sr-only** | display: none; | | **d-sr-only-focusable** | display: none; { style="max-height: 420px;" fixed-header } |

Specify the element's `display` property. These classes can be applied to all breakpoints from `xs` to `xxl`. When using a base class,`.d-{value}`, it is inferred to be `.d-xs-{value}`.

The _value_ property is one of:

When setting a specific breakpoint for a display helper class, it will apply to all screen widths from the designation and up. For example, `d-lg-flex` will apply to `lg`, `xl` and `xxl` size screens.

Conditionally display an element based upon the current **viewport**. Breakpoint utility classes always apply from the bottom up. That means if you have `.d-none`, it will apply to all breakpoints. However, `.d-md-none` will apply to only `md` and up.

| Screen size | Class | |---------------------|----------------------------------| | Hidden on all | `.d-none` | | Hidden only on xs | `.d-none .d-sm-flex` | | Hidden only on sm | `.d-sm-none .d-md-flex` | | Hidden only on md | `.d-md-none .d-lg-flex` | | Hidden only on lg | `.d-lg-none .d-xl-flex` | | Hidden only on xl | `.d-xl-none .d-xxl-flex` | | Hidden only on xxl | `.d-xxl-none` | | Visible on all | `.d-flex` | | Visible only on xs | `.d-flex .d-sm-none` | | Visible only on sm | `.d-none .d-sm-flex .d-md-none` | | Visible only on md | `.d-none .d-md-flex .d-lg-none` | | Visible only on lg | `.d-none .d-lg-flex .d-xl-none` | | Visible only on xl | `.d-none .d-xl-flex .d-xxl-none` | | Visible only on xxl | `.d-none .d-xxl-flex` |

Alternatively you can hide an element based upon the current **viewport** using lateral display helper classes. These classes can be applied using the following format `hidden-{breakpoint}-{condition?}`

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Transitions](transitions.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
