import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		rules: {
			// House style: function expressions, Array<T>, ternaries over && in JSX
			'func-style': ['error', 'expression'],
			'@typescript-eslint/array-type': ['error', { default: 'generic' }],
			'no-restricted-syntax': [
				'error',
				{
					selector: "JSXExpressionContainer > LogicalExpression[operator='&&']",
					message: 'Use a ternary (cond ? <X /> : null) instead of && in JSX.',
				},
			],
		},
	},
	globalIgnores([
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
		'playwright-report/**',
		'test-results/**',
	]),
])

export default eslintConfig
