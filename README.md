# Pa11y Lint Config

Linter configurations for Pa11y projects. We use these configurations to ensure Pa11y's coding style remains consistent across our repositories.

[![NPM version][shield-npm]][info-npm]
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
printf "'use strict';\n\nmodule.exports = require('pa11y-lint-config/eslint/es2017');\n" > .eslintrc.js
```

Two other standards can replace `es2017` above:

1. `es2015`, for an ES2015/ES6 project, forgoing the use of more recent syntax additions such as `async`
1. `es2009`, for an ES2009/ES5 project, such as an older client-side codebase

A project which contains more than one standard, for example ES2017 for the server and ES2015 for the browser, can support each required standard by including a different config file in each relevant subdirectory.

## Contributing

There are many ways to contribute to Pa11y Lint Config, we cover these in the [contributing guide](CONTRIBUTING.md) for this repo.

If you're ready to contribute some code, clone this repo locally and commit your code on a new branch.

Please check that everything works by running the following before opening a <abbr title="pull request">PR</abbr>:

```sh
npm test
```

## Licence

Licensed under the [Lesser General Public License (LGPL-3.0)](LICENSE).<br/>
Copyright &copy; 2023, Team Pa11y



[eslint]: http://eslint.org/
[issues]: https://github.com/pa11y/pa11y-lint-config/issues
[node.js]: https://nodejs.org/

[info-license]: LICENSE
[info-npm]: https://www.npmjs.com/package/pa11y-lint-config
[info-build]: https://travis-ci.org/pa11y/pa11y-lint-config
[shield-license]: https://img.shields.io/badge/license-LGPL%203.0-blue.svg
[shield-npm]: https://img.shields.io/npm/v/pa11y-lint-config.svg
[shield-build]: https://img.shields.io/travis/pa11y/pa11y-lint-config/master.svg
