---
title: "Command Palettes"
nav_title: "Command Palettes"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/command-palettes"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Command Palettes

Source: https://vuetifyjs.com/en/components/command-palettes

## Agent Use

Use this page when you need Vuetify 4 guidance about Command Palettes.

## Overview

A keyboard-driven command palette component that provides a searchable dialog interface for executing commands and actions.

## Key Headings

- Installation
- Usage
- API
- Examples
- Props
- Items
- Hotkey
- Controlled close behavior
- Slots
- Item prepend
- Item append
- Filtering
- Keyboard navigation
- Accessibility

## Extracted Guidance

The `v-command-palette` component provides a keyboard-driven command interface that allows users to quickly search and execute commands. It's commonly used for quick navigation, command execution, and power-user workflows.

Labs components require manual import and registration with the Vuetify instance.

The command palette displays a searchable list of commands in a dialog. Users can type to filter items and press Enter or click to execute commands.

| Component | Description | | - | - | | [v-command-palette](/api/v-command-palette/) | Primary Component | | [v-dialog](/api/v-dialog/) | Base Component |

Below is a collection of simple to complex examples.

The **items** prop accepts an array of command palette items. Items support action items (interactive commands), subheaders (section labels), and dividers (visual separators).

Use the **hotkey** prop to register a global keyboard shortcut that toggles the command palette. Individual items can also have their own **hotkey** property for quick access.

By default, selecting an actionable item closes the palette. Use **close-on-select** to disable that behavior, or handle **@before-select** and call **preventDefault()** to keep the palette open for external drill-in flows.

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import { VCommandPalette } from 'vuetify/labs/VCommandPalette'

export default createVuetify({
  components: {
    VCommandPalette,
  },
})
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Avatar groups](avatar-groups.md)
- [Color inputs](color-inputs.md)
- [Date inputs](date-inputs.md)
- [File upload](file-upload.md)
- [Icon buttons](icon-buttons.md)
