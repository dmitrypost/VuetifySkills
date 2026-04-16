---
title: "Snackbar Queue"
nav_title: "Snackbar Queue"
section: "Components"
source_url: "https://vuetifyjs.com/en/components/snackbar-queue"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Snackbar Queue

Source: https://vuetifyjs.com/en/components/snackbar-queue

## Agent Use

Use this page when implementing, configuring, or debugging the Vuetify 4 Snackbar Queue component.

## Overview

test

## Key Headings

- Usage
- API
- Examples
- Props
- Total visible
- Transition
- Misc
- Promise
- Additional props
- Global state

## Extracted Guidance

The `v-snackbar-queue` component is used to display a sequence of messages to the user.

Messages are passed as an array of strings to `v-model`, when a message is displayed it will be removed from the start of the array.

| Component | Description | | - | - | | [v-snackbar-queue](/api/v-snackbar-queue/) | Primary Component | | [v-snackbar](/api/v-snackbar/) | The actual Snackbar Component |

The **total-visible** prop controls how many snackbars are shown simultaneously, stacked vertically with automatic offset. The **display-strategy** prop determines what happens when the queue exceeds this limit: `"hold"` (default) pauses the queue until a visible slot opens, while `"overflow"` immediately shows new messages and dismisses the oldest ones. Enable the **collapsed** prop to visually compress the stack into a single snackbar with a counter badge.

Use the **transition** prop to change the enter/leave animation. If you pass CSS-based animation with suffix `*-auto` (e.g. `"slide-auto"`, `"scroll-auto"`) the effective transition will be location-aware. To present it more clearly, the example below uses custom "bouncy-slide" transition.

Messages can include a **promise** property along with **success** and **error** callbacks. The snackbar shows a loading state until the promise resolves or rejects, then updates accordingly.

Snackbar props can be set either on the queue to apply to all messages:

Or individual messages as objects:

## Code Patterns

```html
<v-snackbar-queue timeout="2000" color="error" />
```

```js
queue.push({
  text: text.value,
  timeout: 2000,
  color: 'error',
})
```

```js { resource="stores/messages.js" }
export const useMessagesStore = defineStore('messages', () => {
  const queue = ref([])
  function add (message) {
    queue.push(message)
  }

  return { queue, add }
})
```

```html { resource="App.vue" }
<template>
  <v-app>
    <router-view></router-view>

    <v-snackbar-queue v-model="messages.queue"></v-snackbar-queue>
  </v-app>
</template>

<script setup>
  const messages = useMessagesStore()
</script>
```

```html { resource="pages/error.vue" }
<script setup>
  const messages = useMessagesStore()

  function onError (err) {
    messages.add({ text: err.message, color: 'error' })
  }
</script>
```

## Related Pages

- [All Components](all.md)
- [API Explorer Browse Components](explorer.md)
- [Application](application.md)
- [Bottom sheets](bottom-sheets.md)
- [Buttons](buttons.md)
- [Cards](cards.md)
