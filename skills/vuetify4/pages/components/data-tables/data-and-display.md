---
title: "Data and Display"
nav_title: "Data and Display"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/data-tables/data-and-display"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Data and Display

Source: https://vuetifyjs.com/en/components/data-tables/data-and-display

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Data and Display component.

## Overview

The data table component is used for displaying tabular data in a way that is easy for users to scan. It includes sorting, searching, pagination and selection.

## Key Headings

- Filtering examples
- Search
- Filter Keys
- Custom filter
- Pagination examples
- External pagination
- Selection examples
- Item value
- Selected values
- Selectable rows
- Custom select column
- Select strategies
- Sorting examples
- Basic sorting
- Multi sort
- Sort by raw

## Extracted Guidance

Data table filtering is a key feature that allows users to quickly find the data they are looking for.

These examples demonstrate various ways that you can utilize the **search** prop to filter results.

The data table exposes a **search** prop that allows you to filter your data.

You can easily select only the column you want to filter on by using the **filter-keys** prop. This prop accepts an array of keys from the table items that will be used for filtering. You may also choose to disable columns from filtering by setting the **filter** property to `false` on the header item(s). In the example below the we only filter on the `name` column.

You can override the default filtering used with the **search** prop by supplying a function to the **custom-filter** prop. You can see the signature of the function below.

Additionally, you may apply customize the filtering on a per column basis by setting custom function to the **filter** property on the header item(s). In the example below, the custom filter will only match inputs that are in completely in upper case.

Pagination is used to split up large amounts of data into smaller chunks.

Pagination can be controlled externally by using the individual props, or by using the **options** prop. Remember to use **v-model**, so you fully control the state.

## Code Patterns

```ts
(value: string, query: string, item?: any) => boolean | number | [number, number] | [number, number][]
```

## Related Pages

- [All Components](../all.md)
- [API Explorer Browse Components](../explorer.md)
- [Application](../application.md)
- [Bottom sheets](../bottom-sheets.md)
- [Buttons](../buttons.md)
- [Cards](../cards.md)
