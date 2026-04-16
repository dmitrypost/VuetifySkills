---
title: "Elevation"
nav_title: "Elevation"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/elevation"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Elevation

Source: https://vuetifyjs.com/en/styles/elevation

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Elevation.

## Overview

Elevation helper classes allow you to control relative depth, or distance, between two surfaces along the z-axis.

## Key Headings

- Usage
- Examples
- Props
- Dynamic elevation

## Extracted Guidance

The elevation helpers control the relative depth between surfaces along the **z-axis**. Following Material Design 3 guidelines, Vuetify uses 6 elevation levels (0-5). Elevation values are measured in **dp** (density-independent pixels), a unit that ensures consistent sizing across different screen densities.

| Class | Level (dp) | Usage | |-----------------|------------|---------------------------------------| | **elevation-0** | 0dp | No shadow - flat surfaces | | **elevation-1** | 1dp | Cards, buttons (elevated) | | **elevation-2** | 3dp | Menus, rich tooltip, floating app bar | | **elevation-3** | 6dp | Dialogs, snackbars, FABs | | **elevation-4** | 8dp | Dragged elements | | **elevation-5** | 12dp | |

In MD3, elevation changes are commonly used to indicate interactive states. For example, a card at rest might use `elevation-1`, rising to `elevation-2` on hover and `elevation-3` when pressed or dragged.

The `elevation` helper classes allow you to assign a custom **z-depth** to any element.

Numerous components utilize the **elevatable** mixin and are given an **elevation** prop. For components that are not supported, you can dynamically change the class

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Transitions](transitions.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
