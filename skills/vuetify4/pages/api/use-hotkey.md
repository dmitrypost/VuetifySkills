---
title: "useHotkey API"
nav_title: "useHotkey"
section: "API"
source_url: "https://vuetifyjs.com/en/api/use-hotkey"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# useHotkey API

Source: https://vuetifyjs.com/en/api/use-hotkey

## Agent Use

Use this page when you need the Vuetify 4 API contract for useHotkey API, including props, events, slots, directives, or composable details.

## Overview

API documentation for the useHotkey composable

## Key Headings

- Function Signature
- Parameters
- Options
- Return Value

## Extracted Guidance

Handle keyboard shortcuts within your application using the **useHotkey** composable.

## API Enrichment

Kind: composable
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/useHotkey.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/hotkey/index.ts

## Props

- keys: A reactive string defining the keyboard shortcut combination. Supports single keys (e.g., 'a'), modifier combinations (e.g., 'cmd+s', 'ctrl+shift+z'), sequential key combinations (e.g., 'cmd+k-t'), and multiple alternatives separated by spaces. Platform-aware: 'cmd' automatically maps to Ctrl on PC and Command on Mac. Use '-' for sequences, '+' for simultaneous key combinations.
- callback: Function to execute when the hotkey is triggered. Receives the KeyboardEvent as a parameter, allowing access to event details and the ability to call preventDefault() if needed.
- options: Configuration object to customize hotkey behavior. Includes event type ('keydown' or 'keyup'), input field handling, preventDefault behavior, and sequence timeout settings.

## Source Snippets

### composable source

```ts
export { useHotkey } from './hotkey'
```

## Code Patterns

```typescript
function useHotkey(
  keys: MaybeRef<string | undefined>,
  callback: (e: KeyboardEvent) => void,
  options?: HotkeyOptions
): () => void
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useLayout](use-layout.md)
