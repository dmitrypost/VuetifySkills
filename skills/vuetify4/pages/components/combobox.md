---
title: "Combobox"
nav_title: "Combobox"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/combobox"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Combobox

Source: https://vuetifyjs.com/en/components/combobox

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Combobox component.

## Overview

The combobox component provides type-ahead autocomplete functionality and allows users to provide a custom values beyond the provided list of options.

## Key Headings

- Usage
- API
- Caveats
- Examples
- Props
- Density
- Placeholder
- Multiple combobox
- Slots
- No data
- Menu header
- Custom chips
- Misc
- Advanced custom options

## Extracted Guidance

The `v-combobox` component is a [v-text-field](/components/text-fields) that allows the user to select values from a provided **items** array, or to enter their own value. Created items will be returned as strings.

With Combobox, you can allow a user to create new values that may not be present in a provided items list.

| Component | Description | | - | - | | [v-combobox](/api/v-combobox/) | Primary component | | [v-autocomplete](/api/v-autocomplete/) | A select component that allows for advanced filtering | | [v-select](/api/v-select/) | A replacement for the HTML |

You can use `density` prop to adjust vertical spacing within the component.

Use the **placeholder** prop to give users additional context about the expected values in the combobox. The placeholder will only appear when no items are selected.

Previously known as **tags** - user is allowed to enter more than one value.

In this example we utilize a custom **no-data** slot to provide context to the user when searching / creating items.

The **menu-header** slot allows you to add custom content at the top of the dropdown menu, such as tabs to filter items by category.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
