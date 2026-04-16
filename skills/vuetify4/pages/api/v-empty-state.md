---
title: "VEmptyState"
nav_title: "VEmptyState"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-empty-state"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VEmptyState

Source: https://vuetifyjs.com/en/api/v-empty-state

## Agent Use

Use this page when you need the Vuetify 4 API contract for VEmptyState, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VEmptyState.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VEmptyState/VEmptyState.tsx

## Props

- actionText: The text used for the action button.
- headline: A large headline often used for 404 pages.
- href: The URL the action button links to.
- justify: Control the justification of the text.
- textWidth: Sets the width of the text container.
- to: The URL the action button links to.
- size: The size used to control the dimensions of the media element inside the component. Can be specified as a number or a string (e.g., '50%', '100px').

## Events

- click:action: Event emitted when the action button is clicked.

## Slots

- actions: Slot for the action button.
- headline: Slot for the component's headline.
- media: Slot for the component's media.

## Source-derived Keys

- Props: actionText, bgColor, color, icon, image, justify, headline, title, text, textWidth, href, to
- Events: click:action
- Slots: actions, default, headline, title, media, text

## Source Snippets

### propsFactory

```tsx
{
  actionText: String,
  bgColor: String,
  color: String,
  icon: IconValue,
  image: String,
  justify: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'center',
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500,
  },
  href: String,
  to: String,

  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeSizeProps({ size: undefined }),
  ...makeThemeProps(),
}
```

### slots

```tsx
{
  actions: {
    props: {
      onClick: (e: Event) => void
    }
  }
  default: never
  headline: never
  title: never
  media: never
  text: never
}
```

### emits

```tsx
{
    'click:action': (e: Event) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
