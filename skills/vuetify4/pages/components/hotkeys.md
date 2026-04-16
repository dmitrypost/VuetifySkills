---
title: "Hotkeys"
nav_title: "Hotkeys"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/hotkeys"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Hotkeys

Source: https://vuetifyjs.com/en/components/hotkeys

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Hotkeys component.

## Overview

The hotkey component displays keyboard shortcuts in a visually consistent and platform-aware manner.

## Key Headings

- Usage
- API
- Guide
- Props
- Keys
- Display modes
- Platform awareness
- Custom key mapping
- Inline display
- Accessibility
- ARIA attributes

## Extracted Guidance

The `v-hotkey` component renders keyboard shortcuts in a visually consistent and accessible way. It handles complex key combination parsing, platform-specific differences (Mac vs PC), and provides multiple display modes for different design needs.

Hotkeys display keyboard shortcuts with proper styling and platform awareness. The component automatically handles platform differences like showing ⌘ on Mac and Ctrl on PC.

| Component | Description | | - | - | | [v-hotkey](/api/v-hotkey/) | Primary Component |

The `v-hotkey` component is designed to display keyboard shortcuts consistently across your application. It's commonly used in command palettes, help documentation, tooltips, and anywhere you need to show keyboard shortcuts to users.

The component provides several props to customize how keyboard shortcuts are displayed and parsed. This component is designed to work seamlessly across different platforms, automatically adjusting key representations based on the user's operating system.

The **keys** prop accepts a string representing keyboard shortcuts in various formats. See [Hotkeys](/features/hotkey/#key-combination-syntax) for detailed parsing rules.

The **display-mode** prop controls how keys are visually represented. Choose from **icon** (default), **symbol**, or **text** modes:

The component automatically detects the user's platform and adjusts key representations accordingly:

## Code Patterns

```typescript
import { hotkeyMap } from 'vuetify/labs/VHotkey'

const customKeyMap = {
  ...hotkeyMap,
  ctrl: {
    default: { text: 'Control', icon: '$ctrl' },
    mac: { symbol: '⌃', icon: '$ctrl', text: 'Control' }
  }
}
```

```html
<v-hotkey keys="ctrl+s" />
```

```html
<div class="v-hotkey" role="img" aria-label="Keyboard shortcut: Ctrl plus S">
  <span class="v-hotkey__combination">
    <div class="v-kbd v-hotkey__key" aria-hidden="true">Ctrl</div>
    <span class="v-hotkey__divider" aria-hidden="true">+</span>
    <div class="v-kbd v-hotkey__key" aria-hidden="true">S</div>
  </span>
</div>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
