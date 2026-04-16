---
title: "Data tables"
nav_title: "Basics"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/data-tables/basics"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Data tables

Source: https://vuetifyjs.com/en/components/data-tables/basics

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Data tables component.

## Overview

The data table component is used for displaying tabular data in a way that is easy for users to scan. It includes sorting, searching, pagination and selection.

## Key Headings

- Usage
- API
- Server side tables
- Virtual tables
- Guide
- Items
- Headers
- Keys and values
- Sorting, filtering, pagination
- Customization
- Props
- Density
- Hide default header and footer
- Sort icons
- Selection
- Simple checkbox
- Group by
- Slots

## Extracted Guidance

The `v-data-table` component is used for displaying tabular data. Features include sorting, searching, pagination, grouping, and row selection.

The standard data table presumes that the entire data set is available locally. Sorting, pagination, and filtering is supported and done internally by the component itself.

| Component | Description | | - | - | | [v-data-table](/api/v-data-table/) | Primary Component | | [v-data-table-headers](/api/v-data-table-headers/) | Functional Component used to display Data-table headers | | [v-data-table-footer](/api/v-data-table-footer/) | Functional Component used to display Data-table footers | | [v-data-table-row](/api/v-data-table-row/) | Functional Component used to display a single row of a data-table | | [v-data-table-rows](/api/v-data-table-rows/) | Functional Component used to display all of the rows in a data-table | | [v-checkbox-btn](/api/v-checkbox-btn/) | Reusable lightweight [v-checkbox](/components/checkboxes) |

This variant of the data table is meant to be used for very large datasets, where it would be inefficient to load all the data into the client. It supports sorting, filtering, pagination, and selection like a standard data table, but all the logic must be handled externally by your backend or database.

| Component | Description | | - | - | | [v-data-table-server](/api/v-data-table-server/) | Primary Component |

Find more information and examples on the [Server side tables](/components/data-tables/server-side-tables) page.

The virtual variant of the data table relies, like the standard variant, on all data being available locally. But unlike the standard variant it uses virtualization to only render a small portion of the rows. This makes it well suited for displaying large data sets. It supports client-side sorting and filtering, but not pagination.

| Component | Description | | - | - | | [v-data-table-virtual](/api/v-data-table-virtual/) | Primary Component |

## Code Patterns

```js
const headers = [
  { title: 'No data, just a label' },
  { key: 'quantity' },
  { value: 'price' },
]
```

```js
const items = [
  {
    id: 1,
    name: {
      first: 'John',
      last: 'Doe',
    },
  },
]

const headers = [
  { title: 'First Name', value: 'name.first' },
  { title: 'Last Name', key: 'name.last' },
  {
    title: 'Full Name',
    key: 'fullName',
    value: item => `${item.name.first} ${item.name.last}`,
  },
]
```

## Related Pages

- [All Components](../all.md)
- [API Explorer Browse Components](../explorer.md)
- [Application](../application.md)
- [Bottom sheets](../bottom-sheets.md)
- [Buttons](../buttons.md)
- [Cards](../cards.md)
