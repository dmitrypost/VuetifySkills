---
title: "Pagination"
nav_title: "Pagination"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/paginations"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Pagination

Source: https://vuetifyjs.com/en/components/paginations

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Pagination component.

## Overview

The pagination component is used to separate long sets of data so that it is easier for a user to consume information.

## Key Headings

- Usage
- API
- Examples
- Props
- Rounded
- Disabled
- Icons
- Length
- Total visible

## Extracted Guidance

The `v-pagination` component is used to separate long sets of data so that it is easier for a user to consume information.

Pagination by default displays the number of pages based on the set **length** prop, with **prev** and **next** buttons surrounding to help you navigate. Depending on the length provided, the pagination component will automatically scale. To maintain the current page, simply supply a **v-model** attribute.

| Component | Description | | - | - | | [v-pagination](/api/v-pagination/) | Primary Component |

The **rounded** prop allows you to render pagination buttons with alternative styles.

Pagination items can be manually deactivated using the **disabled** prop.

Previous and next page icons can be customized with the **prev-icon** and **next-icon** props.

Using the **length** prop you can set the length of `v-pagination`, if the number of page buttons exceeds the parent container, it will truncate the list.

You can also manually set the maximum number of visible page buttons with the **total-visible** prop.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
