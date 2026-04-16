---
title: "VHotkey"
nav_title: "VHotkey"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-hotkey"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VHotkey

Source: https://vuetifyjs.com/en/api/v-hotkey

## Agent Use

Use this page when you need the Vuetify 4 API contract for VHotkey, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VHotkey.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VHotkey/VHotkey.tsx

## Props

- keys: String representing keyboard shortcuts to display. Supports multiple formats:
- **Single keys:** `"k"`, `"enter"`, `"escape"`
- **Key combinations:** `"ctrl+k"`, `"meta+shift+p"`, `"alt+arrowup"`
- **Sequential actions:** `"ctrl+k-then-p"` (use dash for 'then' relationships)
- **Multiple shortcuts:** `"ctrl+k meta+p"` (space-separated for alternative shortcuts)

Supports platform-aware key names like `meta` (becomes Cmd on Mac, Ctrl on PC) and `alt` (becomes Option on Mac).
- displayMode: Controls how keyboard keys are visually represented. Affects the entire component's appearance:
- **icon:** Uses SVG icons for keys when appropriate (default)
- **symbol:** Uses Unicode symbols (⌘, ⌃, ⇧, ⌥) - Allows you to manage presentation of modifier keys with fonts
- **text:** Uses full text labels (Command, Control, Shift, Alt) - most accessible and descriptive
- keyMap: Custom key mapping object that defines how individual keys should be displayed. Users can import and modify the exported `hotkeyMap` to create custom configurations. Each key maps to a `PlatformKeyConfig` object with:

```typescript
{
  mac?: { symbol?: string, icon?: string, text: string },
  default: { symbol?: string, icon?: string, text: string }
}
```

**Usage Example:**
```typescript
import { hotkeyMap } from 'vuetify/labs/VHotkey'

const customKeyMap = {
  ...hotkeyMap,
  'custom-key': {
    default: { text: 'Custom', icon: 'custom-icon' },
    mac: { text: 'Custom', symbol: '⚡' }
  }
}
```

This enables:
- **Custom key definitions:** Add support for application-specific keys
- **Localization:** Override text representations for different languages
- **Brand customization:** Change how modifier keys appear
- **Platform-specific styling:** Different representations for Mac vs other platforms

Recommended to set at the application level via component defaults rather than per-instance for consistency.
- platform: Controls platform-specific rendering behavior for keyboard shortcuts. Accepts three values:
- **`'auto'` (default):** Automatically detects the user's platform based on user agent and renders appropriately
- **`'mac'`:** Forces Mac-style rendering (Command symbols, icons, Option key, etc.)
- **`'pc'`:** Forces PC-style rendering (Ctrl text, Alt key, etc.)

This is particularly useful for:
- **Cross-platform testing:** Verify how shortcuts appear on different platforms
- **Design consistency:** Ensure specific platform rendering in demos and prototypes
- **Development workflow:** Test platform-specific behaviors without switching devices
- **Documentation:** Show platform-specific examples in help content
- inline: Optimizes the component for seamless integration within text content and documentation. Applies compact styling with baseline alignment, constrained height (1lh), and responsive typography that inherits from parent text. Ideal for help documentation, tooltips, and instructional content. When using multiple inline hotkeys in the same paragraph, increase line-height to prevent visual overlap on text wrapping.
- variant: Controls the visual style and presentation of the hotkey component. Supports standard Vuetify variants plus a special contained variant:

**Standard Variants** (apply styling to individual key elements):
- **elevated (default):** Raised appearance with shadow, good for standalone hotkey displays
- **flat:** Solid background without shadow, clean and minimal
- **tonal:** Subtle tinted background without border, balances visibility with restraint
- **outlined:** Border-only styling without elevation, lightweight and unobtrusive
- **text:** Minimal styling with text color emphasis only, blends with content
- **plain:** No background or border, most subtle option

**Special Variant** (different visual structure):
- **contained:** Follows MDN's nested `<kbd>` pattern - wraps all keys in a single styled container with unstyled nested elements. Creates a cohesive visual unit that clearly groups related keys together. Cannot be combined with standard variants. Ideal for complex key combinations where you want to show the entire sequence as one unit.
- disabled: Applies a disabled visual state to the component.
- prefix: Text to display before the hotkey.
- suffix: Text to display after the hotkey.

## Slots

- default: The default Vue slot. Not supported.

## Source-derived Keys

- Props: keys, displayMode, keyMap, platform, inline, disabled, prefix, suffix, variant, color

## Source Snippets

### propsFactory

```tsx
{
  // String representing keyboard shortcuts (e.g., "ctrl+k", "meta+shift+p")
  keys: String,
  // How to display keys: 'symbol' uses special characters (⌘, ⌃), 'icon' uses SVG icons, 'text' uses words
  displayMode: {
    type: String as PropType<DisplayMode>,
    default: 'icon',
  },
  // Custom key mapping configuration. Users can import and modify the exported hotkeyMap as needed
  keyMap: {
    type: Object as PropType<KeyMapConfig>,
    default: () => hotkeyMap,
  },
  platform: {
    type: String as PropType<'auto' | 'pc' | 'mac'>,
    default: 'auto',
  },
  inline: Boolean,
  disabled: Boolean,
  prefix: String,
  suffix: String,
  variant: {
    type: String as PropType<HotkeyVariant>,
    default: 'elevated' as const,
    validator: (v: any) => ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain', 'contained'].includes(v),
  },

  ...makeComponentProps(),
  ...makeThemeProps(),
  ...makeBorderProps(),
  ...makeRoundedProps(),
  ...makeElevationProps(),
  color: String,
}
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
