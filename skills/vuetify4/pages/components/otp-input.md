---
title: "OTP Input"
nav_title: "OTP Input"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/otp-input"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# OTP Input

Source: https://vuetifyjs.com/en/components/otp-input

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 OTP Input component.

## Overview

The OTP input component is used for MFA authentication via input field.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Props
- Length
- Focus-all
- Error
- Variants
- Masked
- Loader
- Examples
- Card variants
- Mobile text
- Verify account
- Divider

## Extracted Guidance

The OTP input is used for MFA procedure of authenticating users by a one-time password.

Here we display a list of settings that could be applied within an application.

| Component | Description | | - | - | | [v-otp-input](/api/v-otp-input/) | Primary Component |

The `v-otp-input` component is a collection of [v-field](/api/v-field/) components that combine to create a single input.

![Otp input Anatomy](https://cdn.vuetifyjs.com/docs/images/components/v-otp-input/v-otp-input-anatomy.png "OTP input Anatomy")

| Element / Area | Description | | - | - | | 1. Container | The OTP input container holds a number of `v-field` components | | 2. Field | The `v-field` component is used to create a single input field |

The `v-otp-input` component is a collection of `v-field` components that combine to create a single input. It is used to validate a one-time password (OTP) that is sent to the user via email or SMS.

The following code snippet is an example of a basic `v-otp-input` component.

## Code Patterns

```html
<v-otp-input></v-otp-input>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
