---
title: "Treeview"
nav_title: "Treeview"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/treeview"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Treeview

Source: https://vuetifyjs.com/en/components/treeview

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Treeview component.

## Overview

The treeview component is a user interface that is used to represent hierarchical data in a tree structure.

## Key Headings

- Usage
- API
- Guide
- Props
- Activatable
- Color
- Density
- Items registration
- Item props
- Open all
- Fluid
- Selected color
- Selection type
- Load children
- Slots
- Append and prepend
- No data
- Title

## Extracted Guidance

The `v-treeview` component is useful for displaying large amounts of nested data.

A basic example of the treeview component.

| Component | Description | | - | - | | [v-treeview](/api/v-treeview/) | Primary Component | | [v-treeview-item](/api/v-treeview-item/) | Sub-component used to display a single treeview node | | [v-treeview-group](/api/v-treeview-group/) | Sub-component used to display a single treeview node's children |

There is a [bug](https://github.com/vuejs/babel-plugin-jsx/issues/712) related to how [babel-plugin-jsx](https://github.com/vuejs/babel-plugin-jsx) renders templates that degrades VTreeview performance. We are tracking the issue [here](https://github.com/vuetifyjs/vuetify/issues/19919).

The `v-treeview` component is useful for displaying large amounts of nested data. It is a tree structure that can be expanded and collapsed, allowing users to navigate through the hierarchy of items.

It is built on top of the [v-list](/components/lists/) component, which provides the basic structure and functionality for displaying lists of items. The `v-treeview` component extends this functionality by adding support for hierarchical data, allowing users to expand and collapse items to reveal or hide their children.

The `v-treeview` component has several props that allow you to customize its appearance and behavior.

Treeview nodes can be activated by clicking on them.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
