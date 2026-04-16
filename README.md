# Vuetify 4 Skills

This workspace contains a generated skills corpus for AI agents that need to answer implementation questions about Vuetify 4 only.

- Pinned Vuetify release: 4.0.5
- Pinned docs build: bf53f9e
- Total pages: 394

The generator is pinned to the Vuetify 4 documentation navigation snapshot captured from the live docs drawer starting at:

- https://vuetifyjs.com/en/getting-started/installation/

## Output layout

- [data/vuetify4-nav.json](data/vuetify4-nav.json) — pinned Vuetify 4 navigation map
- [scripts/generate-vuetify4-skills.ts](scripts/generate-vuetify4-skills.ts) — TypeScript generator entry point
- [scripts/vuetify4/](scripts/vuetify4/) — fetcher, extractors, source parser, and writers
- [skills/vuetify4/README.md](skills/vuetify4/README.md) — generated package index
- [skills/vuetify4/manifest.json](skills/vuetify4/manifest.json) — machine-readable catalog
- [skills/vuetify4/pages/](skills/vuetify4/pages/) — generated per-page markdown files
- [skills/vuetify4/](skills/vuetify4/) — section index files (`introduction.md`, `getting-started.md`, `features.md`, `styles-and-animations.md`, `common-concepts.md`, `components.md`, `api.md`, `directives.md`, `labs.md`, `resources.md`, `about.md`)
- [skills/vuetify4/frameworks/](skills/vuetify4/frameworks/) — framework-specific exports (`claude`, `copilot`, `openai-responses`)
- [skills/vuetify4/failures.json](skills/vuetify4/failures.json) — pages the last run failed to fetch or parse

## Usage

```sh
npm install
npm run generate
npm run typecheck
```

The generator only accepts URLs from `https://vuetifyjs.com/en/` and does not pull content from Vuetify 1, 2, or 3 documentation sites.
