---
title: "VFileInput"
nav_title: "VFileInput"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-file-input"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VFileInput

Source: https://vuetifyjs.com/en/api/v-file-input

## Agent Use

Use this page when you need the Vuetify 4 API contract for VFileInput, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VFileInput.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VFileInput/VFileInput.tsx

## Props

- chips: Changes display of selections to chips.
- counter: Displays the number of selected files.
- counterSizeString: The text displayed when using the **counter** and **show-size** props. Can also be customized globally on the [internationalization page](/customization/internationalization).
- counterString: The text displayed when using the **counter** prop. Can also be customized globally on the [internationalization page](/customization/internationalization).
- hideInput: Display the icon only without the input (file names).
- multiple: Adds the **multiple** attribute to the input, allowing multiple file selections.
- showSize: Sets the displayed size of selected file(s). When using **true** will default to _1000_ displaying (**kB, MB, GB**) while _1024_ will display (**KiB, MiB, GiB**).
- truncateLength: The length of a filename before it is truncated with ellipsis.

## Events

- mousedown:control: Event that is emitted when using mousedown on the main control area.

## Slots

- counter: Slot for the input’s counter text.
- selection: Slot for defining a custom appearance for selected item(s). Provides the current **index**, **text** (truncated) and [file](https://developer.mozilla.org/en-US/docs/Web/API/File).

## Source-derived Keys

- Props: chips, counter, counterSizeString, counterString, hideInput, multiple, showSize, truncateLength, modelValue
- Events: click:control, mousedown:control, update:focused, update:modelValue, rejected

## Source Snippets

### propsFactory

```tsx
{
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: '$vuetify.fileInput.counterSize',
  },
  counterString: {
    type: String,
    default: '$vuetify.fileInput.counter',
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String] as PropType<boolean | 1000 | 1024>,
    default: false,
    validator: (v: boolean | number) => {
      return (
        typeof v === 'boolean' ||
        [1000, 1024].includes(Number(v))
      )
    },
  },
  truncateLength: {
    type: [Number, String],
    default: 22,
  },

  ...omit(makeVInputProps({ prependIcon: '$file' }), ['direction']),

  modelValue: {
    type: [Array, Object] as PropType<File[] | File | null>,
    default: (props: any) => props.multiple ? [] : null,
    validator: (val: any) => {
      return wrapInArray(val).every(v => v != null && typeof v === 'object')
    },
  },

  ...makeFileFilterProps(),
  ...makeVFieldProps({ clearable: true }),
}
```

### emits

```tsx
{
    'click:control': (e: MouseEvent) => true,
    'mousedown:control': (e: MouseEvent) => true,
    'update:focused': (focused: boolean) => true,
    'update:modelValue': (files: File | File[]) => true,
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
