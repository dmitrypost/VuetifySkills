---
title: "VAlert"
nav_title: "VAlert"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-alert"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VAlert

Source: https://vuetifyjs.com/en/api/v-alert

## Agent Use

Use this page when you need the Vuetify 4 API contract for VAlert, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VAlert.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VAlert/VAlert.tsx

## Props

- border: Adds a colored border to the component.
- borderColor: Specifies the color of the border. Only used in combination with **border** prop. Accepts any color value.
- closable: Adds a close icon that can hide the alert.
- closeIcon: Change the default icon used for **closable** alerts.
- closeLabel: Text used for *aria-label* on **closable** alerts. Can also be customized globally in [Internationalization](/customization/internationalization).
- height: Sets the height for the component.
- maxHeight: Sets the maximum height for the component.
- maxWidth: Sets the maximum width for the component.
- minHeight: Sets the minimum height for the component.
- minWidth: Sets the minimum width for the component.
- modelValue: Controls whether the component is visible or hidden.
- prominent: Displays a larger vertically centered icon to draw more attention.
- tile: Removes the component's border-radius.
- type: Create a specialized alert that uses a contextual color and has a pre-defined icon.
- width: Sets the width for the component.

## Slots

- append: Slot for icon at end of alert.
- close: Slot for icon used in **dismissible** prop.
- prepend: Slot for icon at beginning of alert.

## Source-derived Keys

- Props: border, borderColor, closable, closeIcon, closeLabel, icon, modelValue, prominent, title, text, type
- Events: click:close, update:modelValue
- Slots: default, prepend, title, text, append, close

## Source Snippets

### propsFactory

```tsx
{
  border: {
    type: [Boolean, String] as PropType<boolean | 'top' | 'end' | 'bottom' | 'start'>,
    validator: (val: boolean | string) => {
      return typeof val === 'boolean' || [
        'top',
        'end',
        'bottom',
        'start',
      ].includes(val)
    },
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: '$close',
  },
  closeLabel: {
    type: String,
    default: '$vuetify.close',
  },
  icon: {
    type: [Boolean, String, Function, Object] as PropType<false | IconValue>,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: true,
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String as PropType<ContextualType>,
    validator: (val: ContextualType) => allowedTypes.includes(val),
  },

  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeIconSizeProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({ variant: 'flat' } as const),
}
```

### slots

```tsx
{
  default: never
  prepend: never
  title: never
  text: never
  append: never
  close: { props: Record<string, any> }
}
```

### emits

```tsx
{
    'click:close': (e: MouseEvent) => true,
    'update:modelValue': (value: boolean) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
