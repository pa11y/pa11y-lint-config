
# Pa11y Lint Config

Linter configurations for Pa11y projects. This module should be used to ensure that the Pa11y coding style is consistent across all of our repositories.

[![NPM version][shield-npm]][info-npm]
[![Build status][shield-build]][info-build]
[![LGPL-3.0 licensed][shield-license]][info-license]


## Table Of Contents

- [Requirements](#requirements)
- [Usage](#usage)
  - [ESLint](#eslint)
- [Contributing](#contributing)
- [License](#license)


## Requirements

This library requires [Node.js] 14+.


## Usage

Pa11y Lint Config provides some linter config files which can be included in your project.

### ESLint

To use the [ESLint] config files, first install this module and ESLint, saving them to development dependencies:

```sh
npm install --save-dev eslint pa11y-lint-config
```

Now you should create `.eslintrc.js` and `.eslintignore` files in your project root. The command below provides some defaults which should be enough for most new Pa11y projects:

```sh
printf "coverage\n" > .eslintignore
printf "'use strict';\n\nmodule.exports = require('pa11y-lint-config/eslint/2015');\n" > .eslintrc.js
```

If your project uses ES5 syntax (should mostly be browser or legacy projects), then you'll need to include `eslint/legacy` instead of `eslint/2015`:

```sh
printf "'use strict';\n\nmodule.exports = require('pa11y-lint-config/eslint/legacy');\n" > .eslintrc.js
```

If your project uses more modern syntax (including `async`/`await`), then you'll need to include `eslint/2017` instead of `eslint/2015`:

```sh
printf "'use strict';\n\nmodule.exports = require('pa11y-lint-config/eslint/2017');\n" > .eslintrc.js
```

If your project contains a mix of ES6 and ES5 (e.g. Node.js and browser) then you can include different config files in each directory.


## Contributing

There are many ways to contribute to Pa11y Lint Config, we cover these in the [contributing guide](CONTRIBUTING.md) for this repo.

If you're ready to contribute some code, clone this repo locally and commit your code on a new branch.

Please check that everything works by running the following before opening a <abbr title="pull request">PR</abbr>:

```sh
make ci
```


## Licence

Licensed under the [Lesser General Public License (LGPL-3.0)](LICENSE).<br/>
Copyright &copy; 2020, Team Pa11y



[eslint]: http://eslint.org/
[issues]: https://github.com/pa11y/pa11y-lint-config/issues
[node.js]: https://nodejs.org/
[twitter]: https://twitter.com/pa11yorg

[info-license]: LICENSE
[info-npm]: https://www.npmjs.com/package/pa11y-ci
[info-build]: https://travis-ci.org/pa11y/pa11y-lint-config
[shield-license]: https://img.shields.io/badge/license-LGPL%203.0-blue.svg
[shield-npm]: https://img.shields.io/npm/v/pa11y-lint-config.svg
[shield-build]: https://img.shields.io/travis/pa11y/pa11y-lint-config/master.svg
