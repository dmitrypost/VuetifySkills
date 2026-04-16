---
title: "VFileUploadItem"
nav_title: "VFileUploadItem"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-file-upload-item"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VFileUploadItem

Source: https://vuetifyjs.com/en/api/v-file-upload-item

## Agent Use

Use this page when you need the Vuetify 4 API contract for VFileUploadItem, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VFileUploadItem.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VFileUpload/VFileUploadItem.tsx

## Props

- file: The file object uploaded
- fileIcon: The icon prepending each uploaded file. This will be a preview image if the file is an image.
- index: The index of the file in the upload list.
- showSize: Show the size of the file

## Events

- click:remove: Emitted when the remove icon is clicked

## Slots

- clear: Slot for the icon button to clear/remove a file

## Source-derived Keys

- Props: clearable, file, fileIcon, showSize
- Events: click:remove, click
- Slots: clear

## Source Snippets

### propsFactory

```tsx
{
  clearable: Boolean,
  file: {
    type: Object as PropType<File>,
    default: null,
  },
  fileIcon: {
    type: String,
    // TODO: setup up a proper aliased icon
    default: 'mdi-file-document',
  },
  showSize: Boolean,

  ...makeVListItemProps({
    border: true,
    rounded: true,
    lines: 'two' as const,
  }),
}
```

### slots

```tsx
{
  clear: {
    props: { onClick: () => void }
  }
}
```

### emits

```tsx
{
    'click:remove': () => true,
    click: (e: MouseEvent | KeyboardEvent) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
