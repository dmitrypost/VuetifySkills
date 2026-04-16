---
title: "Images"
nav_title: "Images"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/images"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Images

Source: https://vuetifyjs.com/en/components/images

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Images component.

## Overview

The image component provides a flexible interface for displaying different types of images.

## Key Headings

- Usage
- API
- Caveats
- Examples
- Props
- Cover
- Rounded
- Height
- Image class
- Gradient
- Slots
- Placeholder
- Error
- Misc
- Future image formats
- Grid
- Complex Grid Layout

## Extracted Guidance

The `v-img` component is packed with features to support rich media. Combined with the [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader), you can add dynamic progressive images to provide a better user experience.

`v-img` component is used to display a responsive image with lazy-load and placeholder.

| Component | Description | | - | - | | [v-img](/api/v-img/) | Primary Component |

If the provided aspect ratio doesn't match that of the actual image, the default behavior is to fill as much space as possible without cropping. To fill the entire available space use the `cover` prop.

Use the **rounded** prop to control the border radius of the image container.

`v-img` will automatically grow to the size of its `src`, preserving the correct aspect ratio. You can limit this with the `height` and `max-height` props.

The `image-class` prop allows you to apply CSS classes directly to the inner ` ` element. This is useful for adding hover effects or styles that should target the image itself rather than the container.

The `gradient` prop can be used to apply a simple gradient overlay to the image. More complex gradients should be written as a class on the content slot instead.

## Code Patterns

```html
<v-img src="image.jpeg">
  <template #sources>
    <source srcset="image.webp">
  </template>
</v-img>
```

```html
<picture>
  <source srcset="image.webp">
  <img src="image.jpeg">
</picture>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
