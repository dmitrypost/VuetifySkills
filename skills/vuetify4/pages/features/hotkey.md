---
title: "Hotkeys"
nav_title: "Hotkeys"
section: "Features"
source_url: "https://vuetifyjs.com/en/features/hotkey"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Hotkeys

Source: https://vuetifyjs.com/en/features/hotkey

## Agent Use

Use this page for framework-level Vuetify 4 behavior related to Hotkeys, especially setup and global configuration decisions.

## Overview

Handle keyboard shortcuts within your application using the useHotkey composable

## Key Headings

- Quick start
- Usage
- API
- Guide
- Basic hotkeys
- Key sequences
- Platform awareness
- Reactive hotkeys
- Options
- Configuration options
- Event type
- Input handling
- Prevent default behavior
- Sequence timeout
- Key combination syntax
- Modifiers
- Special keys
- Syntax rules

## Extracted Guidance

Provides a simple and powerful way to register keyboard shortcuts that work across different platforms and input contexts.

To get started, import the `useHotkey` composable:

The **hotkey** composable takes a key combination string and a callback function. It automatically handles platform differences, key sequences, and provides options for customizing behavior.

| Composable | Description | | - | - | | [useHotkey](/api/use-hotkey/) | The useHotkey composable |

The `useHotkey` composable provides a declarative way to handle keyboard shortcuts in your Vue applications. It automatically cleans up event listeners when components are unmounted and supports reactive key combinations.

Register simple keyboard shortcuts by passing a key combination string and callback function:

Create multi-step keyboard shortcuts by separating keys with dashes. Users must press keys in sequence within the timeout period:

The composable automatically handles platform differences. Use `cmd` for cross-platform compatibility or specific modifiers for platform-specific behavior:

## Code Patterns

```html { resource="path/to/Component.vue"}
<script setup>
  import { useHotkey } from 'vuetify'

  useHotkey('ctrl+s', () => {
    console.log('Save action')
  })
</script>
```

```typescript
interface HotkeyOptions {
  event?: 'keydown' | 'keyup'
  inputs?: boolean
  preventDefault?: boolean
  sequenceTimeout?: number
}
```

```js
// Trigger on key press (default)
useHotkey('ctrl+s', handleSave, { event: 'keydown' })

// Trigger on key release
useHotkey('ctrl+s', handleSave, { event: 'keyup' })
```

```js
// Default: hotkeys disabled in input fields
useHotkey('ctrl+s', handleSave)

// Allow hotkeys even when inputs are focused
useHotkey('ctrl+s', handleSave, { inputs: true })
```

```js
// Prevent browser default (recommended for most cases)
useHotkey('ctrl+s', handleSave, { preventDefault: true })

// Allow browser default behavior
useHotkey('f5', handleRefresh, { preventDefault: false })
```

```js
// Default: 1 second between sequence steps
useHotkey('ctrl+k-p', openPalette)

// Faster timeout for expert users
useHotkey('ctrl+k-p', openPalette, { sequenceTimeout: 500 })

// Longer timeout for accessibility
useHotkey('ctrl+k-p', openPalette, { sequenceTimeout: 2000 })
```

```js
const cleanup = useHotkey('ctrl+s', () => {
  console.log('Save action')
})

// Later, manually cleanup
cleanup()
```

```js
// ❌ Browser shortcuts
useHotkey('f5', handleAction)        // Refresh
useHotkey('ctrl+t', handleAction)    // New tab
useHotkey('ctrl+w', handleAction)    // Close tab

// ❌ OS shortcuts
useHotkey('alt+tab', handleAction)   // Window switching

// ✅ Safe alternatives
useHotkey('cmd+shift+r', handleAction)
useHotkey('cmd+k-t', handleAction)
useHotkey('alt+1', handleAction)
```

## Related Pages

- [Accessibility (a11y)](accessibility.md)
- [Aliasing](aliasing.md)
- [Application layout](application-layout.md)
- [Blueprints](blueprints.md)
- [Overview](css-utilities/overview.md)
- [UnoCSS + Vuetify preset](css-utilities/unocss-vuetify-preset.md)
