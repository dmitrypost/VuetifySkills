---
title: "Steppers"
nav_title: "Steppers"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/steppers"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Steppers

Source: https://vuetifyjs.com/en/components/steppers

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Steppers component.

## Overview

The stepper component provides a linear progression process for gathering and displaying information to a user, similar to a form wizard.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Props
- Non editable steps
- Editable steps
- Alternate label
- Linear steppers
- Optional steps
- Items
- Mobile
- Errors
- Dynamic steps
- Alternative label with errors
- Non linear

## Extracted Guidance

The `v-stepper` component displays progress through numbered steps.

A stepper can be used for a multitude of scenarios, including shopping carts, record creation and more.

Due to the massive differences in display and functionality between horizontal and vertical steppers, the **vertical** property is moving to a new component [v-stepper-vertical](/components/vertical-steppers/).

| Component | Description | | - | - | | [v-stepper](/api/v-stepper/) | Primary Component | | [v-stepper-actions](/api/v-stepper-actions/) | Actions for stepper | | [v-stepper-header](/api/v-stepper-header/) | Container for stepper items | | [v-stepper-item](/api/v-stepper-item/) | Primary Component | | [v-stepper-window](/api/v-stepper-window/) | Window container for stepper window items | | [v-stepper-window-item](/api/v-stepper-window-item/) | Items for stepper window |

The recommended placement of elements inside of `v-stepper` is:

![Pending graphic](https://cdn.vuetifyjs.com/docs/images/components/v-stepper/v-stepper-anatomy.png "Stepper Anatomy")

| Element / Area | Description | | - | - | | 1. Container | The Stepper container holds all `v-stepper` components and is composed of 3 major parts: `v-stepper-header`, `v-stepper-window`, and `v-stepper-actions`. | | 2. Header | The header is the container for the `v-stepper-item` components. | | 3. Window | The window is the container for the `v-stepper-window-item` components. | | 4. Actions (optional) | A content area that typically contains one or more [v-btn](/components/buttons) components |

The `v-stepper` component provides a linear progression process for gathering and displaying information to a user, similar to a form wizard.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
