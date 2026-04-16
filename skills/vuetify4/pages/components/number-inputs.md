---
title: "Number inputs"
nav_title: "Number inputs"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/number-inputs"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Number inputs

Source: https://vuetifyjs.com/en/components/number-inputs

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Number inputs component.

## Overview

The number input component provides a clean interface for entering numeric values with increment and decrement controls.

## Key Headings

- Usage
- API
- Caveats
- Guide
- Props
- Control-variant
- Reverse
- Hide-input
- Inset
- Min/Max
- Step
- Precision

## Extracted Guidance

The VNumberInput extends the standard HTML number-type input, ensuring style consistency across browsers as a replacement for ` `

Here we display a list of settings that could be applied within an application.

| Component | Description | | - | - | | [v-number-input](/api/v-number-input/) | Primary Component |

The `v-number-input` component is built upon the `v-field` and `v-input` components. It is used as a replacement for ` `, accepting numeric values from the user.

The `v-number-input` component has support for most of `v-field`'s props and is follows the same design patterns as other inputs.

The `control-variant` prop offers an easy way to customize steppers button layout. The following values are valid options: **default**, **stacked**, **split** and **hidden**.

The `reverse` prop automatically changes the stepper buttons' position to the opposite side for both the default and stacked control variants.

The `hide-input` prop hides the input field, allowing only the stepper buttons to be visible. These stepper buttons follow a stacked control-variant layout.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
