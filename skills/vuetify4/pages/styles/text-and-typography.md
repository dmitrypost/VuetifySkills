---
title: "Text and typography"
nav_title: "Text and typography"
section: "Styles and animations"
source_url: "https://vuetifyjs.com/en/styles/text-and-typography"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Text and typography

Source: https://vuetifyjs.com/en/styles/text-and-typography

## Agent Use

Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to Text and typography.

## Overview

View the various typography styles. From display to labels, with various weights, sizes and italics.

## Key Headings

- Usage
- Breakpoints
- Font emphasis
- Text
- Alignment
- Decoration
- Opacity
- Transform
- Wrapping and overflow
- Customizing Fonts
- Loading Custom Fonts
- Configuring Vuetify
- Using CSS Variables
- RTL Alignment

## Extracted Guidance

Control text size, alignment, wrapping, overflow, transforms and more. By default, Vuetify uses the Material Design 3 specification [Roboto Font](https://fonts.google.com/specimen/Roboto).

| Class | Properties | | - | - | | **text-display-large** | font-size: 3.5625rem (57px); font-weight: 400; line-height: 4rem (64px); letter-spacing: -0.015625rem (-0.25px); | | **text-display-medium** | font-size: 2.8125rem (45px); font-weight: 400; line-height: 3.25rem (52px); letter-spacing: 0; | | **text-display-small** | font-size: 2.25rem (36px); font-weight: 400; line-height: 2.75rem (44px); letter-spacing: 0; | | **text-headline-large** | font-size: 2rem (32px); font-weight: 400; line-height: 2.5rem (40px); letter-spacing: 0; | | **text-headline-medium** | font-size: 1.75rem (28px); font-weight: 400; line-height: 2.25rem (36px); letter-spacing: 0; | | **text-headline-small** | font-size: 1.5rem (24px); font-weight: 400; line-height: 2rem (32px); letter-spacing: 0; | | **text-title-large** | font-size: 1.375rem (22px); font-weight: 400; line-height: 1.75rem (28px); letter-spacing: 0; | | **text-title-medium** | font-size: 1rem (16px); font-weight: 500; line-height: 1.5rem (24px); letter-spacing: 0.009375rem (0.15px); | | **text-title-small** | font-size: 0.875rem (14px); font-weight: 500; line-height: 1.25rem (20px); letter-spacing: 0.00625rem (0.1px); | | **text-body-large** | font-size: 1rem (16px); font-weight: 400; line-height: 1.5rem (24px); letter-spacing: 0.03125rem (0.5px); | | **text-body-medium** | font-size: 0.875rem (14px); font-weight: 400; line-height: 1.25rem (20px); letter-spacing: 0.015625rem (0.25px); | | **text-body-small** | font-size: 0.75rem (12px); font-weight: 400; line-height: 1rem (16px); letter-spacing: 0.025rem (0.4px); | | **text-label-large** | font-size: 0.875rem (14px); font-weight: 500; line-height: 1.25rem (20px); letter-spacing: 0.00625rem (0.1px); | | **text-label-medium** | font-size: 0.75rem (12px); font-weight: 500; line-height: 1rem (16px); letter-spacing: 0.03125rem (0.5px); | | **text-label-small** | font-size: 0.6875rem (11px); font-weight: 500; line-height: 1rem (16px); letter-spacing: 0.03125rem (0.5px); | | **text-high-emphasis** | color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity)); | | **text-medium-emphasis** | color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity)); | | **text-disabled** | color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity)); | | **text-uppercase** | text-transform: uppercase; | | **text-lowercase** | text-transform: lowercase; | | **text-capitalize** | text-transform: capitalize; | | **text-none** | text-transform: none; | | **text-start** | text-align: start; | | **text-center** | text-align: center; | | **text-end** | text-align: end; | | **text-justify** | text-align: justify; | | **text-left** | text-align: left; | | **text-right** | text-align: right; | | **text-truncate** | overflow: hidden; text-overflow: ellipsis; white-space: nowrap; | | **text-no-wrap** | white-space: nowrap; | | **text-pre-wrap** | white-space: pre-wrap; | | **text-break** | overflow-wrap: break-word; | | **text-decoration-none** | text-decoration: none; | | **text-decoration-overline** | text-decoration: overline; | | **text-decoration-underline** | text-decoration: underline; | | **text-decoration-line-through** | text-decoration: line-through; | | **font-weight-black** | font-weight: 900; | | **font-weight-bold** | font-weight: 700; | | **font-weight-semibold** | font-weight: 600; | | **font-weight-medium** | font-weight: 500; | | **font-weight-regular** | font-weight: 400; | | **font-weight-light** | font-weight: 300; | | **font-weight-thin** | font-weight: 100; | | **font-italic** | font-style: italic; | | **text-{breakpoint}-display-large** | Set the text-display-large style for the specified breakpoint. | | **text-{breakpoint}-display-medium** | Set the text-display-medium style for the specified breakpoint. | | **text-{breakpoint}-display-small** | Set the text-display-small style for the specified breakpoint. | | **text-{breakpoint}-headline-large** | Set the text-headline-large style for the specified breakpoint. | | **text-{breakpoint}-headline-medium** | Set the text-headline-medium style for the specified breakpoint. | | **text-{breakpoint}-headline-small** | Set the text-headline-small style for the specified breakpoint. | | **text-{breakpoint}-title-large** | Set the text-title-large style for the specified breakpoint. | | **text-{breakpoint}-title-medium** | Set the text-title-medium style for the specified breakpoint. | | **text-{breakpoint}-title-small** | Set the text-title-small style for the specified breakpoint. | | **text-{breakpoint}-body-large** | Set the text-body-large style for the specified breakpoint. | | **text-{breakpoint}-body-medium** | Set the text-body-medium style for the specified breakpoint. | | **text-{breakpoint}-body-small** | Set the text-body-small style for the specified breakpoint. | | **text-{breakpoint}-label-large** | Set the text-label-large style for the specified breakpoint. | | **text-{breakpoint}-label-medium** | Set the text-label-medium style for the specified breakpoint. | | **text-{breakpoint}-label-small** | Set the text-label-small style for the specified breakpoint. { style="max-height: 600px;" fixed-header } |

Control the size and style of text using the Typography helper classes. These values are based upon the [Material Design type specification](https://m3.material.io/styles/typography/type-scale-tokens).

All of the typography classes support the responsive breakpoints seen in other parts of the framework. The base class `.text-{variant}` corresponds to the `xsAndUp` breakpoint, while the classes `.text-{breakpoint}-{variant}` can be used for the rest of the breakpoints (`sm`, `md`, `lg` and `xl`).

The following example shows a slightly contrived example of how one can use the different classes to effect:

Material design, by default, supports **100, 300, 400, 500, 700, 900** font weights and italicized text.

Alignment helper classes allow you to easily re-align text.

The alignment classes also support responsive breakpoints.

## Code Patterns

```scss { resource="src/styles/settings.scss" }
@use 'sass:string';
@use 'vuetify/settings' with (
  $body-font-family: string.unquote('"Open Sans", sans-serif'),
  $heading-font-family: string.unquote('"Montserrat", sans-serif')
);
```

```scss { resource="src/styles/settings.scss" }
@use 'vuetify/settings' with (
  $body-font-family: var(--font-sans)
  // $heading-font-family inherits the same font in this example
);
```

## Related Pages

- [Entry points](entry-points.md)
- [CSS Reset](css-reset.md)
- [CSS Layers](layers.md)
- [Transitions](transitions.md)
- [Material color palette](colors.md)
- [Borders](borders.md)
