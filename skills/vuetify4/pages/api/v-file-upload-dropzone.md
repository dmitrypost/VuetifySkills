---
title: "VFileUploadDropzone"
nav_title: "VFileUploadDropzone"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-file-upload-dropzone"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VFileUploadDropzone

Source: https://vuetifyjs.com/en/api/v-file-upload-dropzone

## Agent Use

Use this page when you need the Vuetify 4 API contract for VFileUploadDropzone, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VFileUploadDropzone.json

## Props

- browseText: Text for the browse button.
- dividerText: Text in the divider.
- error: Puts the dropzone in an error state, changing the border color.
- hideBrowse: Hides the browse button.
- insetFileList: Renders the file list inside the dropzone container instead of below it.
- multiple: Allows multiple files to be uploaded.
- scrim: Determines whether an overlay is used when hovering over the component with files. Accepts true/false to enable background, and string to define color.
- showSize: Shows the size of the file.

## Events

- drop: Emitted when files are dropped onto the dropzone.
- click:browse: Emitted when the browse button is clicked.
- click:remove: Emitted when a file's remove button is clicked.

## Slots

- browse: Slot for the browse button.
- divider: Slot for the divider between icon and the browse button.
- icon: Slot to replace the default upload icon.
- input: Slot to replace the native file input.
- single: Slot for customizing the appearance of a single file when using inset file list mode.

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
