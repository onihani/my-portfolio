import { expect, test, type Page } from '@playwright/test'

const collectConsoleErrors = (page: Page) => {
	const errors: Array<string> = []
	page.on('console', (message) => {
		if (message.type() === 'error') errors.push(message.text())
	})
	page.on('pageerror', (error) => errors.push(error.message))
	return errors
}

test('home shows the intro, selected work with screenshots, and writing', async ({ page }) => {
	const errors = collectConsoleErrors(page)
	await page.goto('/')
	await expect(page).toHaveTitle(/Nathaniel Quansah/)
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Nathaniel Quansah')
	await expect(page.getByRole('heading', { name: 'Selected work' })).toBeVisible()
	await expect(page.getByRole('heading', { level: 3, name: 'WayaSend' })).toBeVisible()
	expect(await page.locator('.shot img').count()).toBeGreaterThanOrEqual(10)
	await expect(page.getByRole('heading', { name: 'Writing' })).toBeVisible()
	expect(errors).toEqual([])
})

test('every screenshot link opens a real image', async ({ page }) => {
	await page.goto('/')
	const hrefs = await page
		.locator('a.shot')
		.evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute('href') ?? ''))
	for (const href of hrefs) {
		const response = await page.request.get(href)
		expect(response.status(), href).toBe(200)
		expect(response.headers()['content-type']).toContain('image/')
	}
})

test('the article reads on-site with highlighted code', async ({ page }) => {
	const errors = collectConsoleErrors(page)
	await page.goto('/')
	await page.getByRole('link', { name: /Fungible Tokens/ }).click()
	await expect(page).toHaveURL(/\/writing\//)
	await expect(page.getByRole('heading', { level: 1 })).toContainText('Fungible Tokens')
	await expect(page.locator('.prose pre').first()).toBeVisible()
	expect(errors).toEqual([])
})

test('unknown pages return 404', async ({ page }) => {
	const response = await page.goto('/does-not-exist')
	expect(response?.status()).toBe(404)
	await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
})

test('the page never scrolls sideways', async ({ page }) => {
	await page.goto('/')
	const overflow = await page.evaluate(
		() => document.documentElement.scrollWidth - document.documentElement.clientWidth,
	)
	expect(overflow).toBeLessThanOrEqual(0)
})
