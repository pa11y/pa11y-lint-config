# Migration guide

Major versions of Pa11y Lint Config can bring API or compatibility changes. This is a guide to help you make the switch when that happens.

## Migrating to 3 from 2

1. Upgrade to Node.js 18 or above.
1. Modifies some names and aliases for rulesets:
    1. Drops `es2015`'s alias `es6`
    1. Drops `legacy`'s alias `es5`
    1. Renames `legacy` to `es2009`
