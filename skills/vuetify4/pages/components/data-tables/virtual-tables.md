---
title: "Data table - Virtual tables"
nav_title: "Virtual tables"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/data-tables/virtual-tables"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Data table - Virtual tables

Source: https://vuetifyjs.com/en/components/data-tables/virtual-tables

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Data table - Virtual tables component.

## Overview

The data table component is used for displaying tabular data in a way that is easy for users to scan. It includes sorting, searching, pagination and selection.

## Key Headings

- API
- Examples
- Basic example

## Extracted Guidance

The v-data-table-virtual component relies on all data being available locally. But unlike the standard data-table it uses virtualization to only render a small portion of the rows. This makes it well suited for displaying large data sets. It supports sorting and filtering, but not pagination.

| Component | Description | | - | - | | [v-data-table-virtual](/api/v-data-table-virtual/) | Primary Component |

When customizing rows with the `#item` slot, you must bind the provided `itemRef` to your ` `. This ensures that the virtual scroller can correctly measure and recycle rows.

## Related Pages

- [All Components](../all.md)
- [API Explorer Browse Components](../explorer.md)
- [Application](../application.md)
- [Bottom sheets](../bottom-sheets.md)
- [Buttons](../buttons.md)
- [Cards](../cards.md)
