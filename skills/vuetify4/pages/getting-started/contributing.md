---
title: "Contributing"
nav_title: "Contributing"
section: "Getting started"
source_url: "https://vuetifyjs.com/en/getting-started/contributing"
source_type: "markdown"
vuetify_version: "4.0.5"
docs_build: "bf53f9e"
status: "ok"
---

# Contributing

Source: https://vuetifyjs.com/en/getting-started/contributing

## Agent Use

Use this page when you need Vuetify 4 guidance about Contributing.

## Overview

Contributing to open source helps developers access amazing tools for free. Learn how you can help develop the Vuetify framework.

## Key Headings

- Reporting Issues
- Local development
- Setting up your environment
- Vuetify
- Playground.vue
- Automated testing
- Visual regression workflow
- Documentation
- API Generator
- Adding API Documentation
- Submitting Changes / Pull Requests
- Choosing a base branch
- Working with GitHub
- Issue triage
- For Docs - Language
- Requesting new features
- Commit guidelines
- General Rules

## Extracted Guidance

Vuetify is made possible by an amazing community that submits issues, creates pull requests, and provides invaluable feedback.

It is our job to enable you to create amazing applications. A lot of the time, you come across something that can be made better. Maybe you find a bug, or you have an idea for additional functionality. That's great! It's as easy as cloning the Vuetify repository to get started working in a development environment.

The issue list of this repo is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately. Before reporting an issue:

These steps ensure that we have all the information necessary to quickly triage and resolve your issue. Once your reproduction is complete, submit a new issue using the [Vuetify Issue Creator](https://issues.vuetifyjs.com/). Using this issue creator is required, otherwise the issue will be closed automatically.

When writing an issue please provide as much detail as possible. Note that "reproduction steps" should be a series of actions another developer should take after clicking your reproduction link, not a recollection of how you discovered the bug.

Issues that are convoluted and lacking a proper reproduction may be closed by a member of the [Core Team]. For additional questions regarding reporting issues and creating reproductions, join the official Vuetify Discord [community].

In the next section you will learn step-by-step how to set up your local environment and how to configure Vuetify for development.

The Vuetify repository is a [lerna](https://github.com/lerna/lerna) monorepo that connects the vuetify library, docs, api generator, and reduces the friction of working with multiple projects at once. The following guide is designed to get you up and running in no time.

## Code Patterns

```bash
# Using HTTPS
git clone https://github.com/vuetifyjs/vuetify.git

# Using SSH
git clone git@github.com:vuetifyjs/vuetify.git
```

```bash
# Navigate to the vuetify folder
cd vuetify

# Install all project dependencies
pnpm i

# Build the packages
pnpm build vuetify
pnpm build api
```

```html
<template>
  <v-app>
    <v-container>
      <!--  -->
    </v-container>
  </v-app>
</template>

<script setup>
  //
</script>
```

```bash
# Using HTTPS
git remote add fork https://github.com/YOUR_USERNAME/vuetify.git

# Using SSH
git remote add fork git@github.com:YOUR_USERNAME/vuetify.git
```

```bash
# Switch to the desired branch
# v4
git switch master
# v3
git switch v3-stable

# Pull down any upstream changes
git pull

# Create a new branch to work on
git switch --create fix/1234-some-issue
```

```bash
fix(VSelect): don't close when a detachable child is clicked

  fixes #12354
```

```bash
docs: restructure nav components

  Moved duplicated functionality in drawer to reduce
  scope of responsibility
```

```bash
docs(sass-variables): fix broken link to api

  resolves #3219
  resolves #3254
```

## Related Pages

- [Installation](installation.md)
- [Frequently asked questions](frequently-asked-questions.md)
- [Wireframes](wireframes.md)
- [Unit testing](unit-testing.md)
- [Browser support](browser-support.md)
- [Upgrade guide](upgrade-guide.md)
