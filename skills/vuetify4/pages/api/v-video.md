---
title: "VVideo"
nav_title: "VVideo"
section: "API"
source_url: "https://vuetifyjs.com/en/api/v-video"
source_type: "html"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# VVideo

Source: https://vuetifyjs.com/en/api/v-video

## Agent Use

Use this page when you need the Vuetify 4 API contract for VVideo, including props, events, slots, directives, or composable details.

## API Enrichment

Kind: component
Locale descriptions: https://github.com/vuetifyjs/vuetify/blob/master/packages/api-generator/src/locale/en/VVideo.json
Source file: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/labs/VVideo/VVideo.tsx

## Props

- aspectRatio: Sets the aspect ratio for the playback, calculated as width/height.
- src: Media file URL
- srcObject: Sets the source of the video to a MediaStream, MediaSource, or Blob object. Useful for WebRTC streaming.
- type: Media file type (optional)
- error: Puts the component in the manual error state.
- image: Apply a specific image as cover before the video is loaded.
- autoplay: Starts loading the media file without waiting for user to click. Playback begins once enough data is loaded.
- muted: Hides volume control and disables the playback sound.
- eager: Silently loades the media file without waiting for user to click.
- hideOverlay: Hide center play icon.
- noFullscreen: Disable fullscreen and hide the default fullscreen button.
- rounded: Applies a border radius to the video container and the controls. Accepts array of two values to customize elements separately.
- startAt: Moves progress to the specified time (in seconds) once the media file is loaded.
- controlsProps: Pass props through to the `v-video-controls` component. Accepts an object with anything from [v-video-controls](/api/v-video-controls/#props) props, camelCase keys are recommended.
- controlsTransition: The reveal transition applied to the VVideoControls component once the media file is loaded.
- controlsVariant: Variant passed to the VVideoControls component.

## Events

- loaded: Emitted when the video has loaded and is ready to be played.
- update:playing: Emitted when playing state changes.
- update:progress: Emitted when the internal playback progress changes.
- update:volume: Emitted when the volume changes.
- error: Emits `true` when the video fails to load or `false` when user triggered retry.

## Slots

- header: Slot for additional content placed on top of the video.
- append: Additional content on the right within the control bar.
- controls: Replaces controls bar with custom content.
- loader: Slot used to replace loader displayed when the video is being loaded.
- prepend: Additional content on the left within the control bar.
- sources: Slot for content placed within native `<video>` element.

## Exposed

- skipTo: Skip to specific moment in the video playback. Accepts percent value (0-100).
- toggleFullscreen: Toggle fullscreen mode.
- toggleMuted: Mute/unmute audio.

## Source-derived Keys

- Props: aspectRatio, autoplay, muted, eager, error, src, srcObject, type, image, hideOverlay, noFullscreen, startAt, variant, controlsTransition, controlsVariant, controlsProps, rounded
- Events: error, loaded, update:error, update:playing, update:progress, update:volume
- Slots: header, controls, prepend, append, loader, sources, error

## Source Snippets

### propsFactory

```tsx
{
  aspectRatio: [String, Number],
  autoplay: Boolean,
  muted: Boolean,
  eager: Boolean,
  error: [Object, Boolean] as PropType<MediaError | boolean>,
  src: String,
  srcObject: Object as PropType<MediaStream | MediaSource | Blob>,
  type: String, // e.g. video/mp4
  image: String,
  hideOverlay: Boolean,
  noFullscreen: Boolean,
  startAt: [Number, String],
  variant: {
    type: String as PropType<Variant>,
    default: 'player',
    validator: (v: any) => allowedVariants.includes(v),
  },
  controlsTransition: {
    type: [Boolean, String, Object] as PropType<null | string | boolean | TransitionProps & { component?: any }>,
    component: VFadeTransition as Component,
  },
  controlsVariant: {
    type: String as PropType<VVideoControlsVariant>,
    default: 'default',
  },
  controlsProps: {
    type: Object as PropType<VVideoControls['$props']>,
  },
  rounded: [Boolean, Number, String, Array] as PropType<boolean | number | string | (boolean | number | string)[]>,

  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeThemeProps(),
  ...omit(makeVVideoControlsProps(), [
    'fullscreen',
    'variant',
  ]),
}
```

### slots

```tsx
{
  header: never
  controls: VVideoControlsActionsSlot
  prepend: VVideoControlsActionsSlot
  append: VVideoControlsActionsSlot
  loader: LoaderSlotProps
  sources: never
  error: { error?: MediaError | boolean }
}
```

### emits

```tsx
{
    error: (val: MediaError | boolean) => true,
    loaded: (element: HTMLVideoElement) => true,
    'update:error': (val: boolean) => true,
    'update:playing': (val: boolean) => true,
    'update:progress': (val: number) => true,
    'update:volume': (val: number) => true,
  }
```

## Related Pages

- [globals](globals.md)
- [useDate](use-date.md)
- [useDefaults](use-defaults.md)
- [useDisplay](use-display.md)
- [useGoTo](use-go-to.md)
- [useHotkey](use-hotkey.md)
