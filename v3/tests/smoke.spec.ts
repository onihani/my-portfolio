import { expect, test, type Page } from '@playwright/test'

const collectConsoleErrors = (page: Page) => {
	const errors: Array<string> = []
	page.on('console', (message) => {
		if (message.type() === 'error') errors.push(message.text())
	})
	page.on('pageerror', (error) => errors.push(error.message))
	return errors
}

test('home shows the intro and the work with screenshots', async ({ page }) => {
	const errors = collectConsoleErrors(page)
	await page.goto('/')
	await expect(page).toHaveTitle(/Nathaniel Quansah/)
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Nathaniel Quansah')
	await expect(page.getByRole('heading', { level: 2, name: 'Selected work' })).toBeVisible()
	await expect(page.getByRole('heading', { level: 3, name: 'WayaSend' })).toBeVisible()
	expect(await page.locator('.shot img').count()).toBeGreaterThanOrEqual(10)
	expect(errors).toEqual([])
})

test('screenshots run from the landing page to the app', async ({ page }) => {
	await page.goto('/')
	const firstShot = page
		.getByRole('region', { name: 'WayaSend screenshots' })
		.locator('img')
		.first()
	await expect(firstShot).toHaveAttribute('alt', 'WayaSend landing page')
})

test('the step controls move through a project', async ({ page, isMobile }) => {
	test.skip(isMobile, 'Swiping covers this on touch screens')
	await page.goto('/')
	const panel = page.locator('article', { has: page.getByRole('heading', { name: 'WayaSend' }) })
	await expect(panel.getByText('1 / 4')).toBeVisible()
	await panel.getByRole('button', { name: 'Next screenshot' }).click()
	await expect(panel.getByText('2 / 4')).toBeVisible()
})

test('every screenshot link opens a real image', async ({ page }) => {
	await page.goto('/')
	const hrefs = await page
		.locator('a.shot-link')
		.evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute('href') ?? ''))
	// Live previews link to the site itself; the rest open the full screenshot
	const imageHrefs = hrefs.filter((href) => href.startsWith('/'))
	expect(imageHrefs.length).toBeGreaterThanOrEqual(8)
	for (const href of imageHrefs) {
		const response = await page.request.get(href)
		expect(response.status(), href).toBe(200)
		expect(response.headers()['content-type']).toContain('image/')
	}
})

test('navigation reaches about and writing', async ({ page }) => {
	const errors = collectConsoleErrors(page)
	await page.goto('/')
	await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'About' }).click()
	await expect(page).toHaveURL(/\/about$/)
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('About')
	await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible()
	await page
		.getByRole('navigation', { name: 'Main' })
		.getByRole('link', { name: 'Writing' })
		.click()
	await expect(page).toHaveURL(/\/writing$/)
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Writing')
	expect(errors).toEqual([])
})

test('the article reads on-site with highlighted code', async ({ page }) => {
	const errors = collectConsoleErrors(page)
	await page.goto('/writing')
	await page.getByRole('link', { name: /Fungible Tokens/ }).click()
	await expect(page).toHaveURL(/\/writing\/.+/)
	await expect(page.getByRole('heading', { level: 1 })).toContainText('Fungible Tokens')
	await expect(page.locator('.prose pre').first()).toBeVisible()
	expect(errors).toEqual([])
})

test('the theme toggle switches and remembers the choice', async ({ page }) => {
	await page.emulateMedia({ colorScheme: 'light' })
	await page.goto('/')
	await page.getByRole('button', { name: 'Switch to dark mode' }).click()
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
	await page.reload()
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
	await page.getByRole('button', { name: 'Switch to light mode' }).click()
	await expect(page.locator('html')).not.toHaveAttribute('data-theme', /.+/)
})

test('unknown pages return 404', async ({ page }) => {
	const response = await page.goto('/does-not-exist')
	expect(response?.status()).toBe(404)
	await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
})

for (const path of ['/', '/about', '/writing']) {
	test(`${path} never scrolls sideways`, async ({ page }) => {
		await page.goto(path)
		const overflow = await page.evaluate(
			() => document.documentElement.scrollWidth - document.documentElement.clientWidth,
		)
		expect(overflow).toBeLessThanOrEqual(0)
	})
}
