---
title: "File upload"
nav_title: "File upload"
section: "Labs"
source_url: "https://vuetifyjs.com/en/components/file-upload"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# File upload

Source: https://vuetifyjs.com/en/components/file-upload

## Agent Use

Use this page when you need Vuetify 4 guidance about File upload.

## Overview

The file upload component is a drag and drop area for uploading files.

## Key Headings

- Installation
- Usage
- API
- Guide
- Props
- Content
- Inset file list
- Scrim
- Slots
- Item
- Misc
- List

## Extracted Guidance

Labs components require manual import and registration with the Vuetify instance.

The `v-file-upload` component is a drag and drop area for uploading files. It can be customized with slots and has support for density and multiple styles.

| Component | Description | | - | - | | [v-file-upload](/api/v-file-upload/) | Primary Component | | [v-file-upload-dropzone](/api/v-file-upload-dropzone/) | Dropzone Component | | [v-file-upload-item](/api/v-file-upload-item/) | Item Component | | [v-file-upload-list](/api/v-file-upload-list/) | List Component | | [v-file-input](/api/v-file-input/) | File input component |

The v-file-upload component is a more visual counterpart to the [v-file-input](/components/file-inputs/) component. It provides a drag and drop area for files, and can be customized with slots.

Utilize various properties to customize the look and feel of the `v-file-upload` component.

Use the **browse-text**, **divider-text**, **icon**, **title**, or **subtitle** props to customize the text displayed in the component.

The **inset-file-list** prop renders the file list inside the dropzone instead of below it.

The **scrim** property allows you to set a colored scrim when hovering over the component with files.

## Code Patterns

```js { resource="src/plugins/vuetify.js" }
import {
  VFileUpload,
  VFileUploadDropzone,
  VFileUploadItem,
  VFileUploadList,
} from 'vuetify/labs/VFileUpload'

export default createVuetify({
  components: {
    VFileUpload,
    VFileUploadDropzone,
    VFileUploadItem,
    VFileUploadList,
  },
})
```

## Related Pages

- [Introduction](../labs/introduction.md)
- [Avatar groups](avatar-groups.md)
- [Color inputs](color-inputs.md)
- [Command Palettes](command-palettes.md)
- [Date inputs](date-inputs.md)
- [Icon buttons](icon-buttons.md)
