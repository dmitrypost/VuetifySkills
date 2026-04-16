---
title: "Data table - Server side tables"
nav_title: "Server side tables"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/data-tables/server-side-tables"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Data table - Server side tables

Source: https://vuetifyjs.com/en/components/data-tables/server-side-tables

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Data table - Server side tables component.

## Overview

The data table component is used for displaying tabular data in a way that is easy for users to scan. It includes sorting, searching, pagination and selection.

## Key Headings

- API
- Examples
- Server-side paginate and sort
- Server-side search
- Loading

## Extracted Guidance

Server-side Data tables are used for showing data coming from an API.

| Component | Description | | - | - | | [v-data-table-server](/api/v-data-table-server/) | Primary Component |

To use data from an API, listen to the **@update:options** event to know when to fetch new data. Use the **loading** prop to display a progress bar while fetching the data.

If you need to support search functionality, use the **search** prop to let the table know when new search input is available. Since the table does not actually do any filtering on its own, the **search** input does not need to be the actual value being searched for. In this example we have multiple values searchable, so we just make sure to set **search** to _anything_ when we need to fetch new data.

You can use the **loading** prop to indicate that data in the table is currently loading. If there is no data in the table, a loading message will also be displayed. This message can be customized using the **loading-text** prop or the `loading` slot.

## Related Pages

- [All Components](../all.md)
- [API Explorer Browse Components](../explorer.md)
- [Application](../application.md)
- [Bottom sheets](../bottom-sheets.md)
- [Buttons](../buttons.md)
- [Cards](../cards.md)
