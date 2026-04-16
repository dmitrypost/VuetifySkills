---
title: "VFileUpload"
nav_title: "VFileUpload"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-file-upload"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VFileUpload

Source: https://vuetifyjs.com/en/api/v-file-upload

## Agent Use

Use this page when you need the Vuetify 4 API contract for VFileUpload, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VFileUpload.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VFileUpload/VFileUpload.tsx

## Props

- browseText: Text for the browse button.
- dividerText: Text in the divider.
- hideBrowse: Hides the browse button.
- multiple: Allows multiple files to be uploaded.
- scrim: Determines whether an overlay is used when hovering over the component with files. Accepts true/false to enable background, and string to define color.
- insetFileList: Renders the file list inside the dropzone container instead of below it.
- showSize: Shows the size of the file.

## Slots

- browse: Slot for the browse button.
- divider: Slot for the divider between icon and the browse button.
- icon: Slot for a custom appearance in icon section.
- input: Define a custom native input.
- single: Slot for customizing the appearance of a single file when using inset file list mode.

## Exposed

- controlRef: Reference to the underlying input control element.

## Source-derived Keys

- Props: browseText, dividerText, title, subtitle, icon, clearable, insetFileList, hideBrowse, multiple, scrim, showSize, modelValue
- Events: update:modelValue, update:focused, rejected

## Source Snippets

### propsFactory

```tsx
{
  browseText: {
    type: String,
    default: '$vuetify.fileUpload.browse',
  },
  dividerText: {
    type: String,
    default: '$vuetify.fileUpload.divider',
  },
  title: {
    type: String,
    default: '$vuetify.fileUpload.title',
  },
  subtitle: String,
  icon: {
    type: IconValue,
    default: '$upload',
  },
  clearable: Boolean,
  insetFileList: Boolean,
  hideBrowse: Boolean,
  multiple: Boolean,
  scrim: {
    type: [Boolean, String],
    default: true,
  },
  showSize: Boolean,

  ...makeFileFilterProps(),
  ...omit(makeVInputProps(), ['direction']),

  modelValue: {
    type: [Array, Object] as PropType<File[] | File>,
    default: null,
    validator: (val: any) => {
      return wrapInArray(val).every(v => v != null && typeof v === 'object')
    },
  },
}
```

### emits

```tsx
{
    'update:modelValue': (files: File[]) => true,
    'update:focused': (focused: boolean) => true,
    rejected: (files: File[]) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
