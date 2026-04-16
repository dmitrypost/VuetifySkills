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

## Installing the skill into a project

Each install command takes an optional `<path>`. Without it, the skill installs globally for the current user; with it, the skill installs into that project.

### Claude Code

```sh
npm run install:claude              # global -> ~/.claude/skills/vuetify4/
npm run install:claude -- ./my-app  # local  -> ./my-app/.claude/skills/vuetify4/ (+ ./my-app/CLAUDE.md)
```

Writes a `SKILL.md` (with frontmatter) at the skill root so Claude Code picks it up. Local installs also drop a `CLAUDE.md` guide at the project root.

### GitHub Copilot

```sh
npm run install:copilot              # global -> ~/.copilot-skills/vuetify4/ (+ ~/.copilot-skills/AGENTS.md)
npm run install:copilot -- ./my-app  # local  -> ./my-app/skills/vuetify4/ (+ ./my-app/AGENTS.md)
```

Copilot loads `AGENTS.md` from a project root, so for everyday use prefer the local form.

### OpenAI Responses (vector store)

```sh
export OPENAI_API_KEY=sk-...
npm install openai                  # one-time peer install
npm run install:openai              # global -> ~/.config/vuetify4-skills/openai-vector-store.json
npm run install:openai -- ./my-app  # local  -> ./my-app/.vuetify4-skills-openai.json
```

Creates a `vuetify4-skills` vector store, uploads every page under [skills/vuetify4/pages/](skills/vuetify4/pages/), and writes the store ID + system prompt to the metadata file shown above.

## Contributing

Issues and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for project layout, the PR checklist, and ground rules (in short: run `npm run typecheck` and `npm run generate`, and don't hand-edit files under [skills/vuetify4/pages/](skills/vuetify4/pages/)).

## License

This project is licensed under the [MIT License](LICENSE).

The generated corpus under [skills/vuetify4/](skills/vuetify4/) is derived from the official [Vuetify documentation](https://vuetifyjs.com/), which is published under the [MIT License](https://github.com/vuetifyjs/vuetify/blob/master/LICENSE.md). Vuetify is a trademark of its respective owners; this project is not affiliated with or endorsed by the Vuetify team.
