---
title: "Border radius"
nav_title: "Border radius"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/border-radius"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Border radius

Source: https://vuetifyjs.com/en/styles/border-radius

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Border radius.

## Overview

Use border utilities to quickly style the border-radius of any element.

## Key Headings

- Usage
- Rounded corners
- Pill and circle
- Rounding by side
- Rounding by corner
- No rounding
- Components
- SASS variables

## Extracted Guidance

Use border utilities to quickly style the border-radius of any element.

| Class | Properties | | - | - | | **rounded** | border-radius: 4px; | | **rounded-0** | border-radius: 0; | | **rounded-sm** | border-radius: 2px; | | **rounded-md** | border-radius: 4px; | | **rounded-lg** | border-radius: 8px; | | **rounded-xl** | border-radius: 24px; | | **rounded-pill** | border-radius: 9999px; | | **rounded-circle** | border-radius: 50%; | | **rounded-shaped** | border-radius: 24px 0 | | **rounded-t** | border-top-left-radius: 4px; border-top-right-radius: 4px; | | **rounded-t-0** | border-top-left-radius: 0; border-top-right-radius: 0; | | **rounded-t-sm** | border-top-left-radius: 2px; border-top-right-radius: 2px; | | **rounded-t-md** | border-top-left-radius: 4px; border-top-right-radius: 4px; | | **rounded-t-lg** | border-top-left-radius: 8px; border-top-right-radius: 8px; | | **rounded-t-xl** | border-top-left-radius: 24px; border-top-right-radius: 24px; | | **rounded-t-pill** | border-top-left-radius: 9999px; border-top-right-radius: 9999px; | | **rounded-t-circle** | border-top-left-radius: 50%; border-top-right-radius: 50%; | | **rounded-t-shaped** | border-top-left-radius: 24px; border-top-right-radius: 0; | | **rounded-te** | border-top-right-radius: 4px; | | **rounded-te-0** | border-top-right-radius: 0; | | **rounded-te-sm** | border-top-right-radius: 2px; | | **rounded-te-md** | border-top-right-radius: 4px; | | **rounded-te-lg** | border-top-right-radius: 8px; | | **rounded-te-xl** | border-top-right-radius: 24px; | | **rounded-te-pill** | border-top-right-radius: 9999px; | | **rounded-te-circle** | border-top-right-radius: 50%; | | **rounded-te-shaped** | border-top-right-radius: 24px border-top-left-radius: 0; | | **rounded-ts** | border-top-left-radius: 4px; | | **rounded-ts-0** | border-top-left-radius: 0; | | **rounded-ts-sm** | border-top-left-radius: 2px; | | **rounded-ts-md** | border-top-left-radius: 4px; | | **rounded-ts-lg** | border-top-left-radius: 8px; | | **rounded-ts-xl** | border-top-left-radius: 24px; | | **rounded-ts-pill** | border-top-left-radius: 9999px; | | **rounded-ts-circle** | border-top-left-radius: 50%; | | **rounded-ts-shaped** | border-top-left-radius: 24px; border-top-right-radius: 0; | | **rounded-e** | border-inline-end-radius: 4px; | | **rounded-e-0** | border-inline-end-radius: 0; | | **rounded-e-sm** | border-inline-end-radius: 2px; | | **rounded-e-md** | border-inline-end-radius: 4px; | | **rounded-e-lg** | border-inline-end-radius: 8px; | | **rounded-e-xl** | border-inline-end-radius: 24px; | | **rounded-e-pill** | border-inline-end-radius: 9999px; | | **rounded-e-circle** | border-inline-end-radius: 50%; | | **rounded-e-shaped** | border-inline-end-radius: 0; border-inline-start-radius: 24px; | | **rounded-b** | border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; | | **rounded-b-0** | border-bottom-left-radius: 0; border-bottom-right-radius: 0; | | **rounded-b-sm** | border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; | | **rounded-b-md** | border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; | | **rounded-b-lg** | border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; | | **rounded-b-xl** | border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; | | **rounded-b-pill** | border-bottom-left-radius: 9999px; border-bottom-right-radius: 9999px; | | **rounded-b-circle** | border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; | | **rounded-b-shaped** | border-bottom-left-radius: 0; border-bottom-right-radius: 24px; | | **rounded-be** | border-bottom-right-radius: 4px; | | **rounded-be-0** | border-bottom-right-radius: 0; | | **rounded-be-sm** | border-bottom-right-radius: 2px; | | **rounded-be-md** | border-bottom-right-radius: 4px; | | **rounded-be-lg** | border-bottom-right-radius: 8px; | | **rounded-be-xl** | border-bottom-right-radius: 24px; | | **rounded-be-pill** | border-bottom-right-radius: 9999px; | | **rounded-be-circle** | border-bottom-right-radius: 50%; | | **rounded-be-shaped** | border-bottom-right-radius: 24px; border-bottom-left-radius: 0; | | **rounded-bs** | border-inline-start-radius: 4px; | | **rounded-bs-0** | border-inline-start-radius: 0; | | **rounded-bs-sm** | border-inline-start-radius: 2px; | | **rounded-bs-md** | border-inline-start-radius: 4px; | | **rounded-bs-lg** | border-inline-start-radius: 8px; | | **rounded-bs-xl** | border-inline-start-radius: 24px; | | **rounded-bs-pill** | border-inline-start-radius: 9999px; | | **rounded-bs-circle** | border-inline-start-radius: 50%; | | **rounded-bs-shaped** | border-inline-start-radius: 24px; border-inline-end-radius: 0; | | **rounded-s** | border-inline-start-radius: 4px; | | **rounded-s-0** | border-inline-start-radius: 0; | | **rounded-s-sm** | border-inline-start-radius: 2px; | | **rounded-s-md** | border-inline-start-radius: 4px; | | **rounded-s-lg** | border-inline-start-radius: 8px; | | **rounded-s-xl** | border-inline-start-radius: 24px; | | **rounded-s-pill** | border-inline-start-radius: 9999px; | | **rounded-s-circle** | border-inline-start-radius: 50%; | | **rounded-s-shaped** | border-inline-start-radius: 24px; border-inline-end-radius: 0; { style="max-height: 420px;" fixed-header } |

The `border-radius` utilities allow you to quickly style the border-radius of any element.

Use the **rounded**, **rounded-0**, **rounded-sm**, **rounded-md**, **rounded-lg**, and **rounded-xl** classes to set the border-radius of an element.

Use the **rounded-pill** and **rounded-circle** classes to create pill and circle shapes.

Use the **rounded-t-\***, **rounded-b-\***, **rounded-s-\***, and **rounded-e-\*** classes to set the border-radius of an element on a specific side.

Use the **rounded-te-\***, **rounded-ts-\***, **rounded-be-\***, and **rounded-bs-\*** classes to set the border-radius of an element on a specific corner.

Use the **rounded-0** class to remove the border-radius from an element.

## Code Patterns

```scss
$rounded: (
  0: 0,
  'sm': $border-radius-root / 2,
  null: $border-radius-root,
  'md': $border-radius-root,
  'lg': $border-radius-root * 2,
  'xl': $border-radius-root * 6,
  'pill': 9999px,
  'circle': 50%
);
```

```sass { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $rounded: false
);
```

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Transitions](transitions.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
