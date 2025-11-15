# eslint-config-pa11y

Linter configuration for Pa11y projects. We use this configuration to ensure Pa11y's coding style remains consistent across our repositories.

[![Latest version published to npm][shield-npm]][info-npm]
[![Node.js version support][shield-node]][info-node]
[![ESLint version target][shield-eslint]][eslint]
[![Build status][shield-build]][info-build]
[![LGPL-3.0 licensed][shield-license]][info-license]

## Table Of Contents

- [Requirements](#requirements)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Requirements

This library requires [Node.js] 20 or above.

## Usage

To include these config files in your project, install this module as a development dependency. Using npm:

```sh
npm install --save-dev eslint-config-pa11y
```

The logging will mention any further peer dependencies required.

## Contributing

There are many ways to contribute to `eslint-config-pa11y`, we cover these in the [contributing guide](CONTRIBUTING.md) for this repo.

If you're ready to contribute some code, clone this repo locally and commit your code on a new branch.

Please check that everything works by running the following before opening a <abbr title="pull request">PR</abbr>:

```sh
npm test
```

### Testing the GitHub Actions workflows

This project's GitHub Actions workflows can be tested locally using [nektos/act](https://github.com/nektos/act), which can be installed with Homebrew:

```sh
brew install act
```

To run the testing workflow locally:

```sh
act
```

To validate the testing workflow, without running it:

```sh
act --dryrun
```

To validate the publishing workflow:

```sh
act --dryrun release
```

Add `--verbose` to any `act` command for more output.

## Support

When we release a new major version we will continue to support the previous major version for 6 months. This support will be limited to fixes for critical bugs and security issues.

## License

Licensed under the [Lesser General Public License (LGPL-3.0)][info-license].<br/>
Copyright &copy; 2017-2025, Team Pa11y


[eslint]: http://eslint.org/
[issues]: https://github.com/pa11y/eslint-config-pa11y/issues
[node.js]: https://nodejs.org/

[info-build]: https://github.com/pa11y/eslint-config-pa11y/actions/workflows/tests.yml
[info-license]: LICENSE
[info-node]: package.json
[info-npm]: https://www.npmjs.com/package/eslint-config-pa11y
[shield-build]: https://github.com/pa11y/eslint-config-pa11y/actions/workflows/tests.yml/badge.svg
[shield-eslint]: https://img.shields.io/npm/dependency-version/eslint-config-pa11y/dev/eslint
[shield-license]: https://img.shields.io/badge/license-LGPL%203.0-blue
[shield-node]: https://img.shields.io/node/v/eslint-config-pa11y
[shield-npm]: https://img.shields.io/npm/v/eslint-config-pa11y
