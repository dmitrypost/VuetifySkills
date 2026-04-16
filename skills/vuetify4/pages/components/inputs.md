---
title: "Inputs"
nav_title: "Custom inputs"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/inputs"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Inputs

Source: https://vuetifyjs.com/en/components/inputs

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Inputs component.

## Overview

The input component is the baseline functionality for all of Vuetify's form components and provides a baseline for custom implementations.

## Key Headings

- Usage
- API
- Caveats
- Examples
- Props
- Error
- Error count
- Hide details
- Hint
- Loading
- Rules
- Events
- Slot clicks
- Slots
- Append and prepend

## Extracted Guidance

The `v-input` component gives you a baseline to create your own custom inputs. It consists of a prepend/append slot, messages, and a default slot.

`v-input` has 4 main areas. The prepended slot, the appended slot, the default slot, and messages. These make up the core logic shared between all form components.

| Component | Description | | - | - | | [v-input](/api/v-input/) | Primary Component |

The `v-input` component is used as a wrapper for all of the Vuetify form controls. It does **NOT** inherit attributes as they are expected to be passed down to inner inputs.

As any validatable Vuetify component, `v-input` can be set to error state using **error** prop, messages can be added using **error-messages** prop. You can determine error messages count to show using **error-count** property.

You can add multiple errors to `v-input` using **error-count** property.

When the **hide-details** prop is set to `auto` messages will be rendered only if there's a message (hint, error message etc) to display.

`v-input` can have **hint** which can tell user how to use the input (when focused). **persistent-hint** prop makes the hint visible always if no `error-messages` are displayed.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
