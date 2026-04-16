---
title: "Validation rules"
nav_title: "Validation rules"
section: "Labs"
source_url: "https://vuetifyjs.com/en/features/rules"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Validation rules

Source: https://vuetifyjs.com/en/features/rules

## Agent Use

Use this page when you need Vuetify 4 guidance about Validation rules.

## Overview

Vuetify implements a set of validation rules that can be overwritten

## Key Headings

- Installation
- Usage
- API
- Guide
- Error message
- Options
- Aliases
- Custom rules

## Extracted Guidance

The rules composable provide a multitude of validation rules to be used with form inputs.

To use the Rules plugin, you'll need to import and register it with your Vuetify instance:

This will make the rules system available throughout your application. The plugin accepts options for customizing validation rules and integrates with Vuetify's locale system for internationalization.

Inside of components, you can now import and utilize the rules composable:

Within your application, import the useRules function and use it to access the rules composable. Existing rules' error messages can also be customized on the fly, to fit specific field cases.

Below is a table of the available validation rules provided by the rules composable, including their arguments or options:

| Rule Name | Description | Arguments/Options | |--------------|-----------------------------------------------------------------------------|------------------------------------| | required | Ensures the field is not empty. | `err?: string` | | email | Validates that the field contains a valid email address. | `err?: string` | | number | Validates that the field contains a number. | `err?: string` | | integer | Validates that the field contains an integer. | `err?: string` | | capital | Ensures the field contains at least one capital letter. | `err?: string` | | maxLength | Validates that the field does not exceed a specified maximum length. | `len: number, err?: string` | | minLength | Validates that the field meets a specified minimum length. | `len: number, err?: string` | | strictLength | Ensures the field has an exact specified length. | `len: number, err?: string` | | exclude | Ensures the field does not contain any of the specified values. | `exclude: string[], err?: string` | | notEmpty | Ensures the field is not empty (similar to required). | `err?: string` | | pattern | Validates that the field matches a specified regular expression pattern. | `options: RegExp, err?: string` |

The `useRules` composable doesn't return rules directly but RuleBuilders that allows to customize error messages and to provide options when necessary.

## Code Patterns

```js
import { createVue } from 'vue'
import { createVuetify } from 'vuetify'
import { createRulesPlugin } from 'vuetify/labs/rules'

const app = createVue()
const vuetify = createVuetify()

app.use(createRulesPlugin({ /* options */ }, vuetify.locale))
```

```js
import { useRules } from 'vuetify/labs/rules'

const rules = useRules()
```

```html { resource="src/views/ValidationForm.vue" }
<template>
  <v-app>
    <v-container>
      <v-form validate-on="submit" @submit.prevent="submit">
        <v-text-field :rules="[rules.required()]" label="Email" />

        <v-btn text="Submit" type="submit"/>
      </v-form>
    </v-container>
  </v-app>
</template>

<script setup>
  import { useRules } from 'vuetify/labs/rules'

  const rules = useRules()

  async function submit (event) {
    await event
  }
</script>
```

```html { resource="src/App.vue" }
<v-form>
  <v-text-field
    label="Username"
    :rules="[rules.required('You have to fill this field!')]"
  ></v-text-field>
</v-form>
```

```html { resource="src/App.vue" }
<v-form>
  <v-text-field
    label="Username"
    :rules="[rules.maxLength(10)]"
  ></v-text-field>
</v-form>
```

```html { resource="src/App.vue" }
<v-form>
  <v-text-field
    label="Username"
    :rules="[rules.maxLength(10, 'You can\'t write over 10 characters')]"
  ></v-text-field>
</v-form>
```

```html { resource="src/App.vue" }
<v-form>
  <v-text-field
    label="Username"
    :rules="['$required']"
  ></v-text-field>
</v-form>
```

```html { resource="src/App.vue" }
<v-form>
  <v-text-field
    label="Username"
    :rules="[
      ['$required', 'This field is mandatory'],
      ['$maxLength', 10, 'You can\'t write over 10 characters']
    ]"
  ></v-text-field>
</v-form>
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Avatar groups](../components/avatar-groups.md)
- [Color inputs](../components/color-inputs.md)
- [Command Palettes](../components/command-palettes.md)
- [Date inputs](../components/date-inputs.md)
- [File upload](../components/file-upload.md)
