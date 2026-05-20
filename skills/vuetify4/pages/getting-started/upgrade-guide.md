---
title: "Upgrade Guide"
nav_title: "Upgrade guide"
section: "Getting started"
source_url: "https://vuetifyjs.com/en/getting-started/upgrade-guide"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Upgrade Guide

Source: https://vuetifyjs.com/en/getting-started/upgrade-guide

## Agent Use

Use this page when you need Vuetify 4 guidance about Upgrade Guide.

## Overview

Detailed instruction on how to upgrade Vuetify to 4.0

## Key Headings

- Quick Start with Vuetify MCP
- Multi-step migration
- Styles
- Style entry points
- CSS reset
- Applying without a build step
- Layers
- Typography {codemod-available}
- Breakpoints
- Elevation {codemod-available}
- Themes
- Components
- VBtn display
- VBtn text-transform
- VBadge
- VContainer
- Max widths
- VCounter

## Extracted Guidance

This page contains a detailed list of breaking changes and the steps required to upgrade your application to Vuetify 4

The fastest way to check your project for breaking changes is with [Vuetify MCP](https://github.com/vuetifyjs/mcp/). To get started, run the following in your terminal:

Once the MCP server is set up and loaded you will gain access to new tools such as:

Now, prompt your agent with the following:

This will automatically analyze your codebase and provide a tailored list of changes you need to make.

If you have any questions about the upgrade process, come visit us at [community.vuetifyjs.com](https://community.vuetifyjs.com/).

Several breaking changes in Vuetify 4 can be temporarily reverted by pasting short CSS or configuration snippets — notably [CSS reset](#css-reset), [typography](#typography), [elevation](#elevation), and [grid](#grid-system-vrow-and-vcol). This means you can migrate incrementally: restore the legacy behavior first, then update each area at your own pace.

Even though these migrations mostly come down to adjusting CSS classes, manually reviewing every affected template can be time-consuming without automated visual regression tests. For large projects (typically over 200 components), we recommend scanning your codebase for relevant usage before starting:

## Code Patterns

```bash
# Claude Code
claude mcp add --transport http vuetify-mcp https://mcp.vuetifyjs.com/mcp

# Configure for hosted remote server
npx -y @vuetify/mcp config --remote

# Or configure for local installation
npx -y @vuetify/mcp config
```

```text
Using the vuetify-mcp server, scan this project for Vuetify 3 to 4 breaking changes. List each issue found with the file, line number, and recommended fix.
```

```css
@layer vuetify-core.reset {
  ul, ol, figure, details, summary {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
}
```

```css
@layer vuetify-core.reset {
  * { padding: 0; margin: 0; }
  a:active, a:hover { outline-width: 0; }
  code, kbd, pre, samp { font-family: monospace; }
  pre { font-size: 1em; }
  small { font-size: 80%; }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub { bottom: -0.25em; }
  sup { top: -0.5em; }
  textarea { resize: vertical; }
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border-style: none;
  }
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  legend {
    display: table;
    max-width: 100%;
    white-space: normal;
  }
}
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@4/dist/vuetify.css">

<style>
  @layer vuetify-core.reset {
    ul, ol, figure, details, summary { padding: 0; margin: 0; }
    h1, h2, h3, h4, h5, h6, p { margin: 0; }
  }
</style>
```

```diff
- @layer base, vuetify, overrides;
+ @layer base, vuetify-core, vuetify-components, vuetify-overrides, vuetify-utilities, vuetify-final, overrides;
```

```css
@layer vuetify-core, base, vuetify-components, vuetify-overrides, overrides, vuetify-utilities, utilities, vuetify-final;
```

```js { resource="src/plugins/vuetify.ts" }
export default createVuetify({
  display: {
    thresholds: {
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
    },
  },
})
```

## Related Pages

- [Installation](installation.md)
- [Frequently asked questions](frequently-asked-questions.md)
- [Wireframes](wireframes.md)
- [Unit testing](unit-testing.md)
- [Browser support](browser-support.md)
- [Release notes](release-notes.md)
