---
title: "Vertical Steppers"
nav_title: "Steppers Vertical"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/vertical-steppers"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Vertical Steppers

Source: https://vuetifyjs.com/en/components/vertical-steppers

## Agent Use

Use this page when you need Vuetify 4 guidance about Vertical Steppers.

## Overview

The vertical stepper component is a navigation element that guides users through a sequence of steps.

## Key Headings

- Installation
- Usage
- API
- Guide
- Props
- Non linear
- Slots
- Actions

## Extracted Guidance

The `v-stepper-vertical` component can be used as a navigation element that guides users through a sequence of steps.

Labs components require manual import and registration with the Vuetify instance.

Vertical steppers allow users to complete a series of actions in step order.

| Component | Description | | - | - | | [v-stepper-vertical](/api/v-stepper-vertical/) | Primary Component |

The `v-stepper-vertical` is the vertical variant of the [v-stepper](/components/steppers/) component. It also extends functionality of [v-expansion-panels](/components/expansion-panels/).

Non-linear stepper allow the user to navigate freely – skip to a desired section without forcing clicks on the action buttons within, provided **editable** prop is also present. When combined with `:mandatory="false"`, allowes to collapse the section as well.

The `v-stepper-vertical` component has several slots for customization.

Customize the flow of your stepper by hooking into the available **prev** and **next** slots.

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import {
  VStepperVertical,
  VStepperVerticalItem,
  VStepperVerticalActions,
} from 'vuetify/labs/VStepperVertical'

export default createVuetify({
  components: {
    VStepperVertical,
    VStepperVerticalItem,
    VStepperVerticalActions,
  },
})
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Avatar groups](avatar-groups.md)
- [Color inputs](color-inputs.md)
- [Command Palettes](command-palettes.md)
- [Date inputs](date-inputs.md)
- [File upload](file-upload.md)
