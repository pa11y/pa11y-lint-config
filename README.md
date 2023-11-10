# Pa11y Lint Config

Linter configurations for Pa11y projects. We use these configurations to ensure Pa11y's coding style remains consistent across our repositories.

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

This library requires [Node.js] 18 or above.

## Usage

To include these config files in your project, first install [ESLint] and this module, saving them to development dependencies. For example, using npm:

```sh
npm install --save-dev eslint pa11y-lint-config
```

Now create the files `.eslintrc.js` and `.eslintignore` in your project root. The following command will create both files and populate them with sensible settings for a new Pa11y project:

```sh
printf "coverage\n" > .eslintignore
printf "'use strict';\n\nmodule.exports = require('pa11y-lint-config');\n" > .eslintrc.js
```

## Contributing

There are many ways to contribute to Pa11y Lint Config, we cover these in the [contributing guide](CONTRIBUTING.md) for this repo.

If you're ready to contribute some code, clone this repo locally and commit your code on a new branch.

Please check that everything works by running the following before opening a <abbr title="pull request">PR</abbr>:

```sh
npm test
```

## Support

When we release a new major version we will continue to support the previous major version for 6 months. This support will be limited to fixes for critical bugs and security issues.

## Licence

Licensed under the [Lesser General Public License (LGPL-3.0)](LICENSE).<br/>
Copyright &copy; 2023, Team Pa11y



[eslint]: http://eslint.org/
[issues]: https://github.com/pa11y/pa11y-lint-config/issues
[node.js]: https://nodejs.org/

[info-build]: https://github.com/pa11y/pa11y-lint-config/actions/workflows/tests.yml
[info-license]: LICENSE
[info-node]: package.json
[info-npm]: https://www.npmjs.com/package/pa11y-lint-config
[shield-build]: https://github.com/pa11y/pa11y-lint-config/actions/workflows/tests.yml/badge.svg
[shield-eslint]: https://img.shields.io/npm/dependency-version/pa11y-lint-config/dev/eslint
[shield-license]: https://img.shields.io/badge/license-LGPL%203.0-blue
[shield-node]: https://img.shields.io/node/v/pa11y-lint-config
[shield-npm]: https://img.shields.io/npm/v/pa11y-lint-config
