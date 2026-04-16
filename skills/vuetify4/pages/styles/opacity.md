---
title: "Opacity"
nav_title: "Opacity"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/opacity"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Opacity

Source: https://vuetifyjs.com/en/styles/opacity

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Opacity.

## Overview

Use opacity utilities to quickly style the opacity of any element.

## Key Headings

- Usage
- Hover
- SASS variables

## Extracted Guidance

Utilities for controlling the opacity of elements in your application.

| Class | Properties | | - | - | | **opacity-0** | opacity: 0; | | **opacity-10** | opacity: .1; | | **opacity-20** | opacity: .2; | | **opacity-30** | opacity: .3; | | **opacity-40** | opacity: .4; | | **opacity-50** | opacity: .5; | | **opacity-60** | opacity: .6; | | **opacity-70** | opacity: .7; | | **opacity-80** | opacity: .8; | | **opacity-90** | opacity: .9; | | **opacity-100** | opacity: 1; | | **opacity-hover** | opacity: var(--v-hover-opacity); | | **opacity-focus** | opacity: var(--v-focus-opacity); | | **opacity-selected** | opacity: var(--v-selected-opacity); | | **opacity-activated** | opacity: var(--v-activated-opacity); | | **opacity-pressed** | opacity: var(--v-pressed-opacity); | | **opacity-dragged** | opacity: var(--v-dragged-opacity); { style="max-height: 420px;" fixed-header } |

The `opacity` utilities allow you to quickly change the opacity of any element.

Using the [v-hover](/components/hover/) component, conditionally apply an opacity class when the element is hovered over.

You can also use the following SASS variables to customize the opacity color and width:

Disable opacity class generation by setting the $opacities variable to **false**.

## Code Patterns

```sass { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $opacities: (
    hover: var(--v-hover-opacity),
    focus: var(--v-focus-opacity),
    selected: var(--v-selected-opacity),
    activated: var(--v-activated-opacity),
    pressed: var(--v-pressed-opacity),
    dragged: var(--v-dragged-opacity),
    0: 0,
    10: .1,
    20: .2,
    30: .3,
    40: .4,
    50: .5,
    60: .6,
    70: .7,
    80: .8,
    90: .9,
    100: 1
  )
);
```

```sass { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $opacities: false
);
```

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Transitions](transitions.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
