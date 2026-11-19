import { defineConfig, devices } from '@playwright/test'

const port = Number(process.env.PORT ?? 3200)
const isCI = Boolean(process.env.CI)

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: isCI,
	retries: isCI ? 1 : 0,
	reporter: isCI ? [['github'], ['html', { open: 'never' }]] : 'list',
	use: {
		baseURL: `http://localhost:${port}`,
		trace: 'retain-on-failure',
	},
	projects: [
		{
			name: 'desktop',
			use: { ...devices['Desktop Chrome'], channel: isCI ? undefined : 'chrome' },
		},
		{
			name: 'mobile',
			use: { ...devices['Pixel 7'], channel: isCI ? undefined : 'chrome' },
		},
	],
	webServer: {
		command: `npm run start -- -p ${port}`,
		url: `http://localhost:${port}`,
		reuseExistingServer: !isCI,
		timeout: 120_000,
	},
})
