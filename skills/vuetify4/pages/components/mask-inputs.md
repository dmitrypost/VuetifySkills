---
title: "Mask Inputs"
nav_title: "Mask inputs"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/mask-inputs"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Mask Inputs

Source: https://vuetifyjs.com/en/components/mask-inputs

## Agent Use

Use this page when you need Vuetify 4 guidance about Mask Inputs.

## Overview

The mask input component is a input component for masking input values.

## Key Headings

- Installation
- Usage
- API
- Guide
- Available Tokens
- Built-in Masks
- useMask composable
- Examples
- Using Built in Masks
- Using Custom Masks
- Using Custom Tokens
- IP Address
- Credit Card Form

## Extracted Guidance

The `v-mask-input` component allows you to enforce a format on user input according to specific patterns. This is particularly useful for fields like phone numbers, credit cards, dates, and other formatted data.

Labs components require manual import and registration with the Vuetify instance.

At its core, the `v-mask-input` is a wrapper around [v-text-field](/components/text-fields).

| Component | Description | | - | - | | [v-mask-input](/api/v-mask-input/) | Primary Component | | [useMask](/api/use-mask/) | Masking composable |

Masks are created using a combination of special tokens that define the allowed characters and their formatting. Each token represents a specific type of character input.

| Token | Description | |-------|-------------| | # | Any digit | | A | Any capital letter | | a | Any small letter | | N | Any capital alphanumeric character | | n | Any small alphanumeric character | | X | Any special symbol (-!$%^&*()_+ &#124;~=`{}[]:";'<>?,./\) or space |

Vuetify includes several pre-configured masks for common use cases:

| Name | Pattern | Example | |------------|------------|---------| | credit-card | #### - #### - #### - #### | 1234 - 5678 - 9012 - 3456 | | date | ##/##/#### | 12/31/2024 | | date-time | ##/##/#### ##:## | 12/31/2024 23:59 | | iso-date | ####-##-## | 2024-12-31 | | iso-date-time | ####-##-## ##:## | 2024-12-31 23:59 | | phone | (###) ### - #### | (123) 456 - 7890 | | social | ###-##-#### | 123-45-6789 | | time | ##:## | 23:59 | | time-with-seconds | ##:##:## | 23:59:59 |

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { VMaskInput } from 'vuetify/labs/VMaskInput'

export default createVuetify({
  components: {
    VMaskInput,
  },
})
```

```js
import { useMask } from 'vuetify'

  const mask = useMask({ mask: '####-####' })

  mask.mask('12345678') // 1234-5678
  mask.unmask('1234-5678') // 12345678
  mask.isValid('abc') // false
  mask.isValid('1234') // true
  mask.isComplete('1234') // false
  mask.isComplete('1234-5678') // true
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Avatar groups](avatar-groups.md)
- [Color inputs](color-inputs.md)
- [Command Palettes](command-palettes.md)
- [Date inputs](date-inputs.md)
- [File upload](file-upload.md)
