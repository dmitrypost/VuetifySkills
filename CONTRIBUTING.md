# Contributing

Thanks for your interest in improving Vuetify 4 Skills. This project generates a Vuetify 4 documentation set and ships installers that wire it into different agent frameworks (Claude Code, GitHub Copilot, OpenAI Responses).

## Project layout

- [scripts/generate-vuetify4-skills.ts](scripts/generate-vuetify4-skills.ts) — generator entry point
- [scripts/vuetify4/](scripts/vuetify4/) — fetcher, extractors, source parser, writers
- [scripts/install/](scripts/install/) — per-framework installers
- [skills/vuetify4/](skills/vuetify4/) — generated output (do not hand-edit)
- [data/vuetify4-nav.json](data/vuetify4-nav.json) — pinned navigation snapshot

## Getting set up

```sh
git clone https://github.com/dmitrypost/VuetifySkills.git
cd VuetifySkills
npm install
npm run typecheck
npm run generate
```

The generator only fetches from `https://vuetifyjs.com/en/`. It will not pull from Vuetify 1, 2, or 3 docs.

## What to change where

- **Generator behavior, extractors, source parsing** → [scripts/vuetify4/](scripts/vuetify4/)
- **Installer behavior or new framework targets** → [scripts/install/](scripts/install/)
- **Navigation snapshot or pinned release** → [data/vuetify4-nav.json](data/vuetify4-nav.json) and [scripts/vuetify4/config.ts](scripts/vuetify4/config.ts)
- **Documentation** → [README.md](README.md), this file

Do not commit changes under [skills/vuetify4/pages/](skills/vuetify4/pages/), [skills/vuetify4/manifest.json](skills/vuetify4/manifest.json), or the section index files by hand. Regenerate them with `npm run generate` and commit the result.

## Pull request checklist

Before opening a PR:

1. `npm run typecheck` passes.
2. `npm run generate` runs cleanly and any regenerated files are included in the commit.
3. If you added a new installer or option, the README is updated to match.
4. Commit messages describe the *why*, not just the *what*.

## Reporting issues

Open a GitHub issue with:

- What you ran and what you expected.
- The actual output (full error message and stack if applicable).
- The pinned Vuetify release shown in [skills/vuetify4/manifest.json](skills/vuetify4/manifest.json).
- Your Node.js version (`node --version`).

For broken or missing pages, please attach the failing entry from [skills/vuetify4/failures.json](skills/vuetify4/failures.json) if present.

## Scope and ground rules

- This corpus is **Vuetify 4 only**. Pull requests that add Vuetify 1/2/3 content will be closed.
- Keep new dependencies to a minimum. Prefer the standard library and the existing `cheerio` / `tsx` toolchain.
- Be respectful in issue and PR discussions.

## License

By contributing you agree that your contributions are licensed under the [MIT License](LICENSE).
