'use strict';

module.exports = {
	env: {
		es6: true,
		node: true,
		browser: true
	},
	parserOptions: {
		ecmaVersion: 2020
	},
	globals: {
		after: true,
		afterEach: true,
		before: true,
		beforeEach: true,
		describe: true,
		it: true
	},

	// The lint rules
	// ESLint reference: http://eslint.org/docs/rules
	// Node plugin's reference: https://github.com/eslint-community/eslint-plugin-n

	extends: [
		'eslint:recommended',
		'plugin:n/recommended'
	],
	rules: {

		// Possible errors
		'no-await-in-loop': 'off',
		'no-compare-neg-zero': 'error',
		'no-console': 'off',
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'no-extra-parens': 'off',
		'no-prototype-builtins': 'error',
		'no-template-curly-in-string': 'error',
		'no-unsafe-negation': 'error',

		// Good practices
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'error',
		complexity: [
			'warn',
			{
				max: 6
			}
		],
		'consistent-return': 'off',
		curly: 'error',
		'default-case': 'error',
		'dot-location': [
			'error',
			'property'
		],
		'dot-notation': [
			'error',
			{
				allowKeywords: true
			}
		],
		eqeqeq: 'error',
		'guard-for-in': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'warn',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': 'off',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-proto': 'error',
		'no-restricted-properties': 'error',
		'no-return-assign': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'no-with': 'error',
		'prefer-promise-reject-errors': 'error',
		radix: [
			'error',
			'always'
		],
		'require-await': 'error',
		'vars-on-top': 'warn',
		'wrap-iife': 'error',
		yoda: [
			'error',
			'never'
		],

		// Strict Mode
		strict: [
			'warn',
			'safe'
		],

		// Variables
		'init-declarations': 'off',
		'no-label-var': 'error',
		'no-restricted-globals': 'error',
		'no-shadow': 'warn',
		'no-shadow-restricted-names': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-use-before-define': 'off',

		// Node.js (eslint-plugin-n)
		'n/callback-return': 'error',
		'n/global-require': 'off',
		'n/handle-callback-err': 'error',
		'n/no-mixed-requires': 'error',
		'n/no-new-require': 'error',
		'n/no-path-concat': 'error',
		'n/no-process-env': 'off',
		'n/no-process-exit': 'off',
		'n/no-sync': 'off',

		// Stylistic Issues
		'array-bracket-spacing': 'error',
		'block-spacing': 'error',
		'brace-style': [
			'error',
			'1tbs'
		],
		camelcase: 'error',
		'capitalized-comments': [
			'warn',
			'always',
			{
				ignoreConsecutiveComments: true
			}
		],
		'comma-dangle': 'error',
		'comma-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'computed-property-spacing': [
			'error',
			'never'
		],
		'consistent-this': 'error',
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'func-name-matching': 'error',
		'func-names': 'off',
		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: true
			}
		],
		'id-denylist': [
			'error',
			'cb',
			'e',
			'err',
			'req',
			'res'
		],
		'id-length': [
			'error',
			{
				min: 2,
				exceptions: [
					'_',
					'$',
					'i'
				]
			}
		],
		'id-match': 'error',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		'keyword-spacing': [
			'error',
			{
				after: true,
				before: true
			}
		],
		'line-comment-position': 'off',
		'linebreak-style': [
			'error',
			'unix'
		],
		'lines-around-comment': 'error',
		'max-depth': [
			'warn',
			{
				max: 2
			}
		],
		'max-len': [
			'warn',
			{
				code: 100,
				ignoreUrls: true
			}
		],
		'max-lines': 'off',
		'max-nested-callbacks': [
			'warn',
			{
				max: 10
			}
		],
		'max-params': [
			'warn',
			{
				max: 4
			}
		],
		'max-statements': [
			'warn',
			{
				max: 15
			}
		],
		'max-statements-per-line': [
			'error',
			{
				max: 2
			}
		],
		'multiline-ternary': 'off',
		'new-cap': 'error',
		'new-parens': 'error',
		'newline-per-chained-call': 'off',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'error',
		'no-inline-comments': 'warn',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'warn',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-object-constructor': 'error',
		'no-plusplus': 'error',
		'no-restricted-syntax': 'error',
		'no-tabs': 'off',
		'no-ternary': 'off',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': [
			'error',
			{
				allowAfterThis: true,
				allowAfterSuper: true
			}
		],
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-newline': 'off',
		'object-curly-spacing': [
			'error',
			'never'
		],
		'object-property-newline': 'error',
		'one-var': [
			'error',
			'never'
		],
		'one-var-declaration-per-line': 'error',
		'operator-assignment': 'error',
		'operator-linebreak': [
			'error',
			'after'
		],
		'padded-blocks': [
			'error',
			{
				classes: 'always'
			}
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*'
			},
			{
				blankLine: 'any',
				prev: 'directive',
				next: 'directive'
			}
		],
		'quote-props': [
			'error',
			'as-needed'
		],
		quotes: [
			'error',
			'single',
			{
				allowTemplateLiterals: true
			}
		],
		semi: 'error',
		'semi-spacing': 'error',
		'sort-keys': 'off',
		'sort-vars': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [
			'error',
			'always'
		],
		'template-tag-spacing': 'error',
		'unicode-bom': 'error',
		'wrap-regex': 'off',

		// ECMAScript 6
		'arrow-body-style': 'off',
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'arrow-spacing': 'error',
		'generator-star-spacing': 'error',
		'no-confusing-arrow': 'error',
		'no-duplicate-imports': 'error',
		'no-restricted-imports': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': 'warn',
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: true
			}
		],
		'prefer-const': 'error',
		'prefer-destructuring': ['warn', {
			object: true,
			array: false
		}],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'rest-spread-spacing': 'error',
		'sort-imports': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': [
			'error',
			'before'
		]
	}
};
