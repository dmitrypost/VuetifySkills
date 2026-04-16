---
title: "Overlays"
nav_title: "Overlays"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/overlays"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Overlays

Source: https://vuetifyjs.com/en/components/overlays

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Overlays component.

## Overview

The overlay component makes it easy to create a scrim over components or your entire application.

## Key Headings

- Usage
- API
- Activator
- Activator prop
- Activator slot
- Location Strategies
- Static (default)
- Connected
- Scroll Strategies
- Block (default)
- Close
- Reposition
- None
- Examples
- Props
- Contained
- Misc
- Advanced

## Extracted Guidance

`v-overlay` is the base for components that float over the rest of the page, such as `v-menu` and `v-dialog`. It can also be used on its own and comes with everything you need to create a custom popover component.

In its simplest form, the `v-overlay` component will add a dimmed layer over your application.

| Component | Description | | - | - | | [v-overlay](/api/v-overlay/) | Primary Component |

Overlays can be opened with v-model, or by clicking or hovering on an activator element. An activator is mandatory for the connected locationLocation strategy. The activator element (if present) will also be used by some transitions to slide or scale from the activator's location instead of the middle of the screen.

Related props:

The simplest way of providing an activator. Can be a CSS selector to pass to `document.querySelector()`, a component instance, or a HTMLElement. The string `"parent"` is also accepted to automatically bind to the parent element.

For more manual control, the slot can be used instead. `props` is an object containing all the relevant ARIA attributes and event handlers, and must be applied to the target element with `v-bind` for the component to work correctly.

`location-strategy="static"`

## Code Patterns

```html
<v-overlay activator="#id" />
<v-overlay activator=".class" />
<v-overlay :activator="elementRef" />
<v-btn>
  <v-overlay activator="parent" />
</v-btn>
```

```html
<v-overlay>
  <template #activator="{ isActive, props }">
    <v-btn v-bind="props">Overlay is {{ isActive ? 'open' : 'closed' }}</v-btn>
  </template>
</v-overlay>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
