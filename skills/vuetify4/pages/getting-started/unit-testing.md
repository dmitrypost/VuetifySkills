---
title: "Unit Testing"
nav_title: "Unit testing"
section: "Getting started"
source_url: "https://vuetifyjs.com/en/getting-started/unit-testing"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Unit Testing

Source: https://vuetifyjs.com/en/getting-started/unit-testing

## Agent Use

Use this page when you need Vuetify 4 guidance about Unit Testing.

## Overview

Learn how to create unit tests with vue-test-utils and Vuetify components in your Vue application.

## Key Headings

- Usage
- Using Vite
- Setup Vitest
- Testing Vuetify Components
- Recommended Test Runners
- Rendering with Vuetify
- Using `data-testid`
- Accessibility Considerations

## Extracted Guidance

Add regression protection by adding unit tests to your Vuetify application

Unit tests are an important (and sometimes ignored) part of developing applications. They help us secure our processes and workflows, ensuring that the most critical parts of our projects are protected from accidental mistakes or oversights in our development.

Because of this, Vue has its own testing utility called [vue-test-utils](https://test-utils.vuejs.org/). It provides useful features for interacting with Vue components and works with many popular test runners.

[Vite](https://vitejs.dev/) is a fast, opinionated frontend build tool that serves your code via native ES Module imports during dev and bundles it with Rollup for production. It provides a great developer experience and is the recommended build tool for Vuetify applications.

First, update your **vite.config.js** file to inline the `vuetify` dependency:

[Vitest](https://vitest.dev/) is a popular test runner that provides a great developer experience. It is fast, easy to use, and provides useful features like snapshot testing. To get started, install the following dependencies:

Once installed, create a new folder at the root of your application named **tests/spec** and add a new file named **HelloWorld.spec.js**. The following example shows how to setup a basic unit test for a Vuetify component:

When testing Vuetify components, we recommend running tests in a real browser environment instead of `jsdom`.

## Code Patterns

```js { resource="vite.config.js" }
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
})
```

```bash [pnpm]
pnpm add @vue/test-utils vitest resize-observer-polyfill --save-dev
```

```bash [yarn]
yarn add @vue/test-utils vitest resize-observer-polyfill --dev
```

```bash [npm]
npm install @vue/test-utils vitest resize-observer-polyfill --save-dev
```

```bash [bun]
bun add @vue/test-utils vitest resize-observer-polyfill --dev
```

```js { resource="tests/spec/HelloWorld.spec.js" }
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import HelloWorld from '../../src/components/HelloWorld.vue'

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('displays message', () => {
  const wrapper = mount({
    template: '<v-layout><hello-world></hello-world></v-layout>'
  }, {
    props: {},
    global: {
      components: {
        HelloWorld,
      },
      plugins: [vuetify],
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Components')
})
```

```ts { resource="vuetify/packages/vuetify/test/index.ts" }
export function render<C> (
  component: C,
  options?: RenderOptions<C> | null,
  vuetifyOptions?: VuetifyOptions
): RenderResult {
  const vuetify = createVuetify(mergeDeep({ icons: { aliases } }, vuetifyOptions))

  const defaultOptions = {
    global: {
      stubs: {
        transition: false,
        'transition-group': false,
      },
      plugins: [vuetify],
    },
  }

  const mountOptions = mergeDeep(defaultOptions, options!, (a, b) => a.concat(b))

  return _render(component, mountOptions)
}
```

```html
<v-btn data-testid="submit-btn">Submit</v-btn>
```

## Related Pages

- [Installation](installation.md)
- [Frequently asked questions](frequently-asked-questions.md)
- [Wireframes](wireframes.md)
- [Browser support](browser-support.md)
- [Upgrade guide](upgrade-guide.md)
- [Release notes](release-notes.md)
