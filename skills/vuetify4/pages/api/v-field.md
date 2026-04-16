---
title: "VField"
nav_title: "VField"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-field"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VField

Source: https://vuetifyjs.com/en/api/v-field

## Agent Use

Use this page when you need the Vuetify 4 API contract for VField, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VField.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VField/VField.tsx

## Props

- appendInnerIcon: Creates a [v-icon](/api/v-icon/) component in the **append-inner** slot.
- baseColor: Sets the color of the input when it is not focused.
- centerAffix: Vertically align **appendInner**, **prependInner**, **clearIcon** and **label** in the center.
- clearIcon: The icon used when the **clearable** prop is set to true.
- dirty: Manually apply the dirty state styling.
- disabled: Removes the ability to click or target the input.
- glow: Makes prepend/append icons full opacity when the field is focused and apply color.
- error: Puts the input in a manual error state.
- flat: Removes box shadow when using a variant with elevation.
- iconColor: Sets the color of the prepend/append icons.
- id: Sets the DOM id on the component.
- labelId: Sets the DOM id on the inner label element. Useful for associating the label with custom input elements.
- details: Controls whether the field generates an `aria-describedby` attribute for accessibility.
- persistentClear: Always show the clearable icon when the input is dirty (By default it only shows on hover).
- prependInnerIcon: Creates a [v-icon](/api/v-icon/) component in the **prepend-inner** slot.
- reverse: Reverses the orientation.
- singleLine: Label does not move on focus/dirty.

## Events

- click:appendInner: Emitted when appended inner icon is clicked.
- click:clear: Emitted when clearable icon clicked.
- click:prependInner: Emitted when prepended inner icon is clicked.
- update:focused: Emitted when the input is focused or blurred

## Slots

- append-inner: Slot that is appended to the input.
- clear: Slot for custom clear icon (displayed when the **clearable** prop is equal to true).
- label: The default slot of the [v-label](/api/v-label/) or [v-field-label](/api/v-field-label/) component.
- prepend-inner: Slot that is prepended to the input.

## Exposed

- controlRef: Reference to the control element of the field.
- fieldIconColor: The color of the icon.

## Source-derived Keys

- Props: appendInnerIcon, bgColor, clearable, clearIcon, active, centerAffix, color, baseColor, dirty, disabled, glow, error, flat, iconColor, label, persistentClear, prependInnerIcon, reverse, singleLine, variant, onClick:clear, onClick:appendInner, onClick:prependInner
- Events: update:focused, update:modelValue
- Slots: clear, prepend-inner, append-inner, label, loader, default

## Source Snippets

### propsFactory

```tsx
{
  appendInnerIcon: IconValue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: IconValue,
    default: '$clear',
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: undefined,
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null,
  },
  glow: Boolean,
  error: Boolean,
  flat: Boolean,
  iconColor: [Boolean, String],
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: IconValue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String as PropType<Variant>,
    default: 'filled',
    validator: (v: any) => allowedVariants.includes(v),
  },

  'onClick:clear': EventProp<[MouseEvent]>(),
  'onClick:appendInner': EventProp<[MouseEvent]>(),
  'onClick:prependInner': EventProp<[MouseEvent]>(),

  ...makeComponentProps(),
  ...makeLoaderProps(),
  ...makeRoundedProps(),
  ...makeThemeProps(),
}
```

### slots

```tsx
{
  clear: DefaultInputSlot & { props: Record<string, any> }
  'prepend-inner': DefaultInputSlot
  'append-inner': DefaultInputSlot
  label: DefaultInputSlot & { label: string | undefined, props: Record<string, any> }
  loader: LoaderSlotProps
  default: VFieldSlot
}
```

### emits

```tsx
{
    'update:focused': (focused: boolean) => true,
    'update:modelValue': (value: any) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
