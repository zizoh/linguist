The build scripts are designed to run on unix platform (linux, mac, bsd, etc), if you on windows, try to install [cygwin](https://www.cygwin.com/).

# Build from sources
The project uses a local copy of the [Translate Tools Core](https://github.com/zizoh/translate-tools-core) library. To get started, clone the Translate Tools Core repository to a directory on your machine

- Navigate to the translate-tools-core directory on your machine with `cd ../translate-tools-core`

- Install dependencies with `npm install`

- Build the library with `npm run build`

- Navigate to the dist directory created after build with `cd dist`

- Create a global symlink with `npm link`

- Navigate back to your Linguist project directory with `cd ../linguist`

- Link the global @translate-tools/core package to your project with run `npm link @translate-tools/core`

To clear build, install docker and run `make buildAll` in root of repository. This command will install dependencies and compile linguist for all platforms and will pack it to archives.

To build browser extension for one target:

- install dependencies with run `npm install`
- build browser extension for your platform (see scripts in `packages.json`), for example `npm run build:firefox`
- find artifacts in `build` directory

Available platforms:

- firefox
- chrome
- chromium: special build with auto updates not from google store

# Development

To development, you can run `npm run build:dev`.

If you change a theme tokens, you also have to compile a theme files: `npm run build:tokens`

To debug on android, [see instructions](./AndroidDebug.md).

To make a custom translator, see [translator API](./CustomTranslator.md).

# Tests

When you change code that touch any user data and interact with browser storages (`localStorage`, `indexedDB`, `browser.storage`, etc) or some external API, you must to add or update tests for it.

The common rule is any code that just transform data should be tested.

You may a not add tests for UI, but should add tests for data.

# Migrations

Migrations must have app version.
