---
title: "Expansion panels"
nav_title: "Expansion panels"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/expansion-panels"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Expansion panels

Source: https://vuetifyjs.com/en/components/expansion-panels

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Expansion panels component.

## Overview

The expansion panel component is a lightweight container that hides information behind expandable and contractable containers.

## Key Headings

- Usage
- API
- Examples
- Props
- Variant
- Disabled
- Model
- Readonly
- Misc
- Advanced
- Custom icon

## Extracted Guidance

The `v-expansion-panel` component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion-panel body at a time; however, with the `multiple` property, the expansion-panel can remain open until explicitly closed.

Expansion panels in their simplest form display a list of expandable items. You can either declare the markup explicitly, or use the **title** and **text** props.

| Component | Description | | - | - | | [v-expansion-panels](/api/v-expansion-panels/) | Primary component | | [v-expansion-panel](/api/v-expansion-panel/) | Sub-component that wraps `v-expansion-panel-text` and `v-expansion-panel-title` | | [v-expansion-panel-title](/api/v-expansion-panel-title/) | Sub-component used to display the Expansion Panel's title. Wraps the `#title` slot | | [v-expansion-panel-text](/api/v-expansion-panel-text/) | Sub-component used to display the Expanion Panel's text. Wraps the `#text` slot |

There are four different variants of the expansion-panel. Accordion expansion-panels have no margins around the currently active panel. Inset expansion-panels become smaller when activated, while poput expansion-panels become larger.

Both the expansion-panel and its content can be disabled using the **disabled** prop.

<!-- #### Focusable

The expansion-panel headers can be made focusable with the prop **focusable**.

Expansion panels can be controlled externally by using the **v-model**. You will need to set a **value** on each panel, so that you can refer to them outside the component. If the **multiple** prop is set, then the **v-model** value will be an array.

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
