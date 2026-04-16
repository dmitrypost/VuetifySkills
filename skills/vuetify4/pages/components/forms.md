---
title: "Forms"
nav_title: "Forms"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/forms"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Forms

Source: https://vuetifyjs.com/en/components/forms

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Forms component.

## Overview

The form component provides a wrapper that makes it easy to process and control validation states of input components.

## Key Headings

- Usage
- API
- Rules
- Validation state
- Examples
- Props
- Disabled
- Fast fail
- Misc
- Exposed properties
- Vee-validate
- Vuelidate

## Extracted Guidance

Vuetify offers a simple built-in form validation system based on functions as rules, making it easy for developers to get set up quickly.

The `v-form` component makes it easy to add validation to form inputs. All input components have a **rules** prop that can be used to specify conditions in which the input is either *valid* or *invalid*.

If you prefer using a 3rd party validation plugin, we provide [examples](#vee-validate) further down the page for integrating both [Vee-validate](https://github.com/baianat/Vee-validate) and [vuelidate](https://github.com/vuelidate/vuelidate) validation libraries.

Whenever the value of an input is changed, each rule receives a new value and is re-evaluated. If a rule returns `false` or a `string`, validation has failed and the `string` value is presented as an error message.

| Component | Description | | - | - | | [v-form](/api/v-form/) | Primary Component |

Rules allow you to apply custom validation on all form components. These are validated sequentially, and components display a *maximum* of 1 error at a time; so make sure you order your rules accordingly.

The most basic of rules is a simple function that checks if an input has a value or not; i.e. it makes it a required input.

However, you can make rules as complicated as needed, even allowing for asynchronous input validation. In the example below, the input is checked against a fake API service that takes some time to respond. Wait for the `submit` event promise to resolve and see the validation in action.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
