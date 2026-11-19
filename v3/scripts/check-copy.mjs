// Copy rule: no em dashes anywhere in site text. Fails CI if one sneaks in.
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const roots = ['src']
const extensions = new Set(['.ts', '.tsx', '.md', '.mdx', '.css'])
const offenders = []

const walk = async (directory) => {
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		const full = path.join(directory, entry.name)
		if (entry.isDirectory()) await walk(full)
		else if (extensions.has(path.extname(entry.name))) {
			const lines = (await readFile(full, 'utf8')).split('\n')
			lines.forEach((line, index) => {
				if (line.includes('—')) offenders.push(`${full}:${index + 1}`)
			})
		}
	}
}

for (const root of roots) await walk(root)

if (offenders.length > 0) {
	console.error(`Em dashes found (use commas, periods or colons):\n${offenders.join('\n')}`)
	process.exit(1)
}
console.log('Copy check passed: no em dashes.')
