---
title: "Text fields"
nav_title: "Text fields"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/text-fields"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Text fields

Source: https://vuetifyjs.com/en/components/text-fields

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Text fields component.

## Overview

The text field component accepts textual input from users.

## Key Headings

- Usage
- API
- Anatomy
- Guide
- Props
- Labeling
- Placeholders
- Hints & messages
- Clearable
- Validation & rules
- Forms
- Examples
- Custom colors
- Density
- Disabled and readonly
- Hide details
- Hint
- Icons

## Extracted Guidance

Text field components are used for collecting user provided information.

A simple text field with placeholder and/or label.

| Component | Description | | - | - | | [v-text-field](/api/v-text-field/) | Primary Component |

The recommended placement of elements inside of `v-text-field` is:

![Text-field Anatomy](https://cdn.vuetifyjs.com/docs/images/components-temp/v-text-field/v-text-field-anatomy.png)

| Element / Area | Description | | - | - | | 1. Container | The Text field container contains the `v-input` and `v-field` components | | 2. Prepend icon | A custom icon that is located before `v-field` | | 3. Prepend-inner icon | A custom icon that is located at the start of `v-field` | | 4. Label | A content area for displaying text to users that correlates to the input | | 5. Append-inner icon | A custom icon that is located at the end of `v-field` component | | 6. Append icon | A custom icon that is located after `v-field` component |

The `v-text-field` component is a versatile ` ` field which combines both the `v-input` and `v-field` components into a single offering. It is a commonly used element that provides the baseline for other form inputs; such as [v-select](/components/selects/), [v-autocomplete](/components/autocompletes/), [v-combobox](/components/combobox/). In this guide you learn the basic fundamentals of `v-text-field` and how its various properties interact with each other.

The `v-text-field` component has an massive API with numerous options to modify the display, functionality, or style of your inputs. Many of the configurable options are also available through [slots](#slots).

## Code Patterns

```html
<v-text-field label="First name"></v-text-field>
```

```html
<v-text-field
  label="Email address"
  placeholder="johndoe@gmail.com"
  type="email"
></v-text-field>
```

```html
<v-text-field
  hint="Enter your password to access this website"
  label="Password"
  persistent-hint
  type="input"
></v-text-field>
```

```html { resource="Component.vue" }
<template>
  <v-text-field
    clearable
    label="Last name"
    placeholder="Doe"
    persistent-clear
    @click:clear="onClear"
  ></v-text-field>
</template>

<script setup>
  onClear () {
    alert('User cleared the input')
  }
</script>
```

```html { resource="Component.vue" }
<template>
  <v-text-field v-model="model">
    <template v-slot:label>
      <span>Type something...</span>
    </template>

    <template v-slot:prepend>
      <v-icon
        :color="model ? 'primary' : undefined"
        icon="$vuetify"
      />
    </template>

    <template v-slot:append-inner>
      <v-icon
        v-if="model"
        icon="mdi-check-circle"
      />
    </template>

    <template #details>
      <v-spacer />

      See our <a href="#">Terms and Service</a>
    </template>
  </v-text-field>
</template>

<script setup>
  import { shallowRef } from 'vue'

  const model = shallowRef('')
</script>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
