---
title: "Autocompletes"
nav_title: "Autocompletes"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/autocompletes"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Autocompletes

Source: https://vuetifyjs.com/en/components/autocompletes

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Autocompletes component.

## Overview

The autocomplete component provides type-ahead autocomplete functionality and provides a list of available options.

## Key Headings

- Usage
- API
- Caveats
- Examples
- Props
- Density
- Filter
- Filter keys
- Subheaders and dividers
- Slots
- Item and selection
- Menu footer
- Misc
- Asynchronous items
- State selector
- New tab

## Extracted Guidance

The `v-autocomplete` component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically requesting information from an API.

The autocomplete component extends `v-select` and adds the ability to filter items.

| Component | Description | | - | - | | [v-autocomplete](/api/v-autocomplete/) | Primary Component | | [v-combobox](/api/v-combobox/) | A select component that allows for filtering and custom values | | [v-select](/api/v-select/) | A replacement for the HTML |

When using objects for the **items** prop, you must associate **item-title** and **item-value** with existing properties on your objects. These values are defaulted to **title** and **value** and can be changed.

Below is a collection of simple to complex examples.

You can use `density` prop to adjust vertical spacing within the component.

The `custom-filter` prop can be used to filter each individual item with custom logic. In this example we filter items by name.

When user is typing in the field to narrow the list of options, the input text is matched against the `title`. With `filter-keys` you can specify which properties should be used instead. Properties of original objects passed to `items` need to be accessed via the `raw.*` path, as `filter-keys` index the root level of `InternalItem`.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
