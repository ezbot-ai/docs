# ezbot.ai docs

Welcome to ezbot's public documentation repository. This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## How to change the docs

### Installation

```
$ npm
```

### Local Development

#### Start the development server

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### Add a new doc for the 'next' version

1. Create or modify file(s) in the `docs` folder.
2. Commit files
3. Open a pull request

When the pull request is merged, your changes will automatically go live. *They will only be visible when viewing the 'next' version of the docs.*

#### Modify the docs for an existing version

1. Create or modify file(s) in the `versioned_docs/version-{{version_number}}` folder.
2. Commit files
3. Open a pull request

When the pull request is merged, your changes will automatically go live. They will be visible when viewing the version of the docs that you modified.

### Manage Docs Versions

Docusaurus can manage multiple versions of your docs.

#### How to create versioned docs

Example: Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

#### Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`


### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Search

Note: Search is only available in production and via:

```bash
$ npm run build
$ npm run serve
```
