---
title: "VVideoControls"
nav_title: "VVideoControls"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-video-controls"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VVideoControls

Source: https://vuetifyjs.com/en/api/v-video-controls

## Agent Use

Use this page when you need the Vuetify 4 API contract for VVideoControls, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VVideoControls.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VVideo/VVideoControls.tsx

## Props

- color: General color applied to icons and sliders.
- backgroundColor: Container background color.
- trackColor: Passed to the main slider `color` prop.
- playing: Applies correct icon of the default play button.
- hidePlay: Hides default play button.
- hideProgressBar: Hides default progress bar.
- hideVolume: Hides default volume control.
- hideFullscreen: Hides default fullscreen button.
- fullscreen: Applies correct icon on the default fullscreen button.
- floating: Introduces visual spacing from the video boundaries.
- splitTime: Splits time into elapsed and remaining on each side of the main slider.
- pills: Makes the container transparent and shows inner actions in separated boxes.
- detached: Moves the container below so it won't obstruct the video.
- progress: Controls main slider value (0 ~ 100)
- duration: Total duration of the video used to calculate displayed time.
- volume: Volume value passed to the underlying control and slots.
- volumeProps: Props passed down to the VVideoVolume component.

## Events

- update:playing: Emitted when the playing state changes.
- update:progress: Emitted when the playback progress changes.
- update:volume: Emitted when the volume value changes.
- skip: Emitted when a skip action is triggered.
- click:fullscreen: Emitted when the fullscreen button is clicked.

## Exposed

- toggleMuted: Toggles the muted state of the video.

## Source-derived Keys

- Props: color, backgroundColor, trackColor, playing, hidePlay, hideVolume, hideFullscreen, hideProgressBar, fullscreen, floating, splitTime, pills, detached, progress, duration, volume, variant, volumeProps
- Events: update:playing, update:progress, update:volume, skip, click:fullscreen
- Slots: default, prepend, append

## Source Snippets

### propsFactory

```tsx
{
  color: String,
  backgroundColor: String,
  trackColor: String,
  playing: Boolean,
  hidePlay: Boolean,
  hideVolume: Boolean,
  hideFullscreen: Boolean,
  hideProgressBar: Boolean,
  fullscreen: Boolean,
  floating: Boolean,
  splitTime: Boolean,
  pills: Boolean,
  detached: Boolean,
  progress: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 0,
  },
  volume: [Number, String],
  variant: {
    type: String as PropType<VVideoControlsVariant>,
    default: 'default',
    validator: (v: any) => allowedVariants.includes(v),
  },
  volumeProps: Object as PropType<Pick<VVideoVolume['$props'], 'direction' | 'inline' | 'sliderProps' | 'menuProps'>>,

  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeThemeProps(),
}
```

### slots

```tsx
{
  default: VVideoControlsActionsSlot
  prepend: VVideoControlsActionsSlot
  append: VVideoControlsActionsSlot
}
```

### emits

```tsx
{
    'update:playing': (val: boolean) => true,
    'update:progress': (val: number) => true,
    'update:volume': (val: number) => true,
    skip: (val: number) => true,
    'click:fullscreen': () => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
