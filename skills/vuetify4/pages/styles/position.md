---
title: "Position"
nav_title: "Position"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/position"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Position

Source: https://vuetifyjs.com/en/styles/position

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Position.

## Overview

Use position utilities to quickly style the positioning of any element.

## Key Headings

- Usage
- Static
- Relative
- Absolute
- Fixed
- Sticky
- SASS Variables

## Extracted Guidance

Utilities for controlling the positioning of elements in your application.

| Class | Properties | | - | - | | **position-static** | position: static; | | **position-relative** | position: relative; | | **position-absolute** | position: absolute; | | **position-fixed** | position: fixed; | | **position-sticky** | position: sticky; | | **top-0** | top: 0; | | **right-0** | right: 0; | | **bottom-0** | bottom: 0; | | **left-0** | left: 0; |

The `position` utilities allow you to quickly style the positioning of any element. These classes can be used to apply the `position` and `top`, `right`, `bottom`, and `left` properties to an element.

The default position value for all elements is `static`. This means that the element is positioned according to the normal flow of the document. The `top`, `right`, `bottom`, `left` properties have no effect on a statically positioned element.

The `position-relative` class allows you to position an element relative to its normal position in the document. This means that the `top`, `right`, `bottom`, and `left` properties can be used to move the element from its normal position.

The `position-absolute` class allows you to position an element relative to its closest positioned ancestor. If no positioned ancestor is found, the element is positioned relative to the document body.

The `position-fixed` class allows you to position an element relative to the viewport. This means that the element will stay in the same position even when the page is scrolled.

The `position-sticky` class allows you to position an element based on the user's scroll position. The element is treated as `relative` until it crosses a specified threshold, at which point it is treated as `fixed`.

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Transitions](transitions.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
