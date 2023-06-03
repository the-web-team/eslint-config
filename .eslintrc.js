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
		'@typescript-eslint/no-loop-func': 'warn',
		'no-unused-expressions': 'off',
		'@typescript/no-unused-expressions': 'error',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'object-curly-spacing':'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		'semi': 'off',
		'@typescript-eslint/semi': ['error', 'never', { beforeStatementContinuationChars: 'never' }],
		'space-before-blocks': 'off',
		'@typescript-eslint/space-before-blocks': ['error', 'always'],
		'space-infix-ops': 'error',
		'@typescript-eslint/space-infix-ops': 'error',

		'@typescript-eslint/array-type': 'warn',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',

		// General
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
		'func-call-spacing': ['error', 'always'],
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'multiline'],
		'implicit-arrow-linebreak': ['error', 'beside'],

		'linebreak-style': ['error', 'unix'],
		'newline-before-return': 'error',
		'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
		'prefer-const': 'error',
		'no-new-object': 'error',
		'object-shorthand': ['error', 'properties'],
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'prefer-spread': 'error',
		camelcase: [
			'error',
			{
				ignoreDestructuring: true,
				ignoreImports: true,
				properties: 'never',
			},
		],
		'new-cap': ['error', { capIsNew: false }],
		'array-callback-return': 'error',
		'no-await-in-loop': 'error',
		yoda: 'error',
		'no-constructor-return': 'error',
		'no-promise-executor-return': 'error',
		'no-self-compare': 'error',
		'no-multi-assign': 'error',
		'no-template-curly-in-string': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable': 'error',
		'no-else-return': 'error',
		'valid-jsdoc': 'warn',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'arrow-body-style': ['error', 'always'],
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
		'padded-blocks': ['error', 'never'],
		'no-trailing-spaces': 'error',

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
	}
}
