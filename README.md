# Vuetify 4 Skills

This workspace contains a generated skills corpus for AI agents that need to answer implementation questions about Vuetify 4 only.

The generator is pinned to the Vuetify 4 documentation navigation snapshot captured from the live docs drawer starting at:

- https://vuetifyjs.com/en/getting-started/installation/

Output layout:

- `data/vuetify4-nav.json`: pinned Vuetify 4 navigation map
- `scripts/generate-vuetify4-skills.mjs`: generator that fetches and extracts page content
- `skills/vuetify4/README.md`: generated package index
- `skills/vuetify4/manifest.json`: machine-readable catalog
- `skills/vuetify4/pages/**`: generated page files

Usage:

```sh
npm install
npm run generate
```

The generator only accepts URLs from `https://vuetifyjs.com/en/` and does not pull content from Vuetify 1, 2, or 3 documentation sites.