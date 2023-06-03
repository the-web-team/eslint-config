module.exports = {
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/strict',
		'plugin:security/recommended',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	plugins: [
		'@typescript-eslint',
		'prefer-arrow-functions',
		'promise',
		'sort-exports'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json']
	},
	globals: {
		FC: 'readonly',
		FCC: 'readonly',
		JSX: 'readonly',
		FunctionalComponentWithChildren: 'readonly',
		NextPage: 'readonly',
		NextPageWithLayout: 'readonly',
	},
	overrides: [
		{
			files: [
				'**/*.tsx',
				'**/*.jsx',
			],
		},
		{
			files: [
				'**/*.spec.ts',
				'**/*.spec.tsx'
			],
			env: {
				'jest/globals': true
			},
			extends: [
				'plugin:jest/recommended'
			],
			plugins: [
				'jest'
			],
			rules: {
				'jest/prefer-expect-assertions': 'off'
			},
			settings: {
				jest: {
					globalAliases: {
						describe: [
							'context'
						],
						fdescribe: [
							'fcontext'
						],
						xdescribe: [
							'xcontext'
						]
					}
				}
			}
		}
	],
	rules: {
		// Typescript ESLint
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
				disallowTypeAnnotations: true,
			},
		],
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none',
				},
				singleline: {
					delimiter: 'comma',
					requireLast: false,
				},
			},
		],
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/method-signature-style': ['error', 'property'],
		'@typescript-eslint/no-confusing-void-expression': 'error',
		'@typescript-eslint/no-duplicate-type-constituents': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-useless-empty-export': 'error',
		'@typescript-eslint/prefer-enum-initializers': 'error',
		'@typescript-eslint/prefer-regexp-exec': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',

		// - Extensions
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
		'block-spacing': 'off',
		'@typescript-eslint/block-spacing': 'error',
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error', '1tbs'],
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'warn',
		'no-extra-parens': 'off',
		'@typescript-eslint/no-extra-parens': [
			'error',
			'all',
			{ ignoreJSX: 'all' },
		],
		quotes: 'off',
		'@typescript-eslint/quotes': ['error', 'single'],
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'error',
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': 'error',
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-this': 'error',
		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'error',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'object-curly-spacing':'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		'semi': 'off',
		'@typescript-eslint/semi': [
			'error',
			'never',
			{
				beforeStatementContinuationChars: 'never',
			},
		],
		'space-before-blocks': 'off',
		'@typescript-eslint/space-before-blocks': ['error', 'always'],
		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': 'error',
		'@typescript-eslint/array-type': 'warn',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',

		// General
		// - Possible Problems
		'array-callback-return': 'error',
		'no-await-in-loop': 'error',
		'no-constant-binary-expression': 'error',
		'no-constructor-return': 'error',
		'no-duplicate-imports': 'error',
		'no-new-native-nonconstructor': 'error',
		'no-promise-executor-return': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable-loop': 'error',
		'require-atomic-updates': 'error',

		// - Suggestions
		'arrow-body-style': ['error', 'always'],
		'block-scoped-var': 'error',
		camelcase: [
			'error',
			{
				ignoreDestructuring: true,
				ignoreImports: true,
				properties: 'never',
			},
		],
		complexity: 'warn',
		'consistent-return': 'error',
		curly: 'error',
		'default-case-last': 'error',
		'no-alert': 'warn',
		'no-confusing-arrow': 'error',
		'no-continue': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'error',
		'no-empty-static-block': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-negated-condition': 'error',

		// - Layout & Formatting
		'array-bracket-spacing': ['error', 'never'],
		'array-bracket-newline': ['error', { multiline: true, minItems: 1 }],
		'array-element-newline': ['error', { multiline: true, minItems: 0 }],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': 'error',
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'dot-location': ['error', 'property'],
		'eol-last': ['error', 'always'],
		eqeqeq: 'error',
		'func-call-spacing': ['error', 'always'],
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'multiline'],
		'implicit-arrow-linebreak': ['error', 'beside'],
		'key-spacing': ['error', { afterColon: true }],
		'linebreak-style': ['error', 'unix'],
		'max-statements-per-line': ['error', { max: 1 }],
		'new-cap': ['error', { capIsNew: false }],
		'new-parens': 'error',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-div-regex': 'error',
		'no-multi-assign': 'error',
		'no-multi-spaces': ['error', { ignoreEOLComments: true }],
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
		'no-new-wrappers': 'error',
		'no-new-object': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-plusplus': 'error',
		'no-proto': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-trailing-spaces': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-whitespace-before-property': 'error',
		'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
		'object-shorthand': ['error', 'properties'],
		'one-var': ['error', 'always'],
		'operator-linebreak': ['error', 'before'],
		'operator-assignment': ['error', 'always'],
		'padded-blocks': ['error', 'never'],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
		],
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'rest-spread-spacing': ['error', 'never'],
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreMemberSort: true,
				ignoreDeclarationSort: true,
				memberSyntaxSortOrder: [
					'none',
					'all',
					'multiple',
					'single',
				],
				allowSeparatedGroups: false,
			},
		],
		'space-before-function-paren': ['error', 'always'],
		'space-in-parens': ['error', 'never'],
		'switch-colon-spacing': 'error',
		'template-curly-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': ['error', 'always'],
		'valid-jsdoc': 'warn',
		yoda: 'error',

		// eslint-plugin-sort-exports
		'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],

		// eslint-plugin-promise
		'promise/always-return': 'error',
		'promise/no-return-wrap': 'error',
		'promise/catch-or-return': 'error',
		'promise/no-native': 'off',
		'promise/no-nesting': 'warn',
		'promise/no-promise-in-callback': 'warn',
		'promise/no-callback-in-promise': 'warn',
		'promise/avoid-new': 'warn',
		'promise/no-new-statics': 'error',
		'promise/no-return-in-finally': 'warn',
		'promise/valid-params': 'error',

		// eslint-plugin-import
		'import/no-duplicates': 'error',
		'import/no-named-as-default': 'off',
		'import/first': 'error',
		'import/no-anonymous-default-export': 'off',
		'import/no-amd': 'error',
		'import/no-commonjs': 'error',
		'import/no-dynamic-require': 'error',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'type',
					'external',
					'internal',
				],
				pathGroups: [
					{ pattern: '~**', group: 'internal', position: 'before' },
					{ pattern: '@**', group: 'external', position: 'before' },
				],
				'newlines-between': 'never',
			},
		],
		'import/namespace': 'off',

		// eslint-plugin-security
		'security/detect-object-injection': 'off',
		'security/detect-non-literal-fs-filename': 'off',

		// eslint-plugin-prefer-arrow-functions
		'prefer-arrow-functions/prefer-arrow-functions': [
			'error',
			{
				classPropertiesAllowed: false,
				disallowPrototype: false,
				returnStyle: 'unchanged',
				singleReturnOnly: false,
			},
		],

		// React
		'jsx-quotes': ['error', 'prefer-double'],
		'react-hooks/exhaustive-deps': 'error',
		'react/jsx-closing-bracket-location': [
			1,
			'line-aligned'
		],
		'react/jsx-curly-brace-presence': 'error',
		'react/jsx-first-prop-new-line': [
			'error',
			'multiline-multiprop'
		],
		'react/jsx-indent': [
			'error',
			'tab'
		],
		'react/jsx-max-props-per-line': [
			1
		],
		'react/jsx-no-leaked-render': 'error',
		'react/jsx-one-expression-per-line': 'error',
		'react/jsx-tag-spacing': 'error',
		'react/prop-types': 'off',
	}
}
