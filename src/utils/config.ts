import fs from 'fs'
import constants from './constants'

function initFileSetup() {
	let file
	process.argv.forEach((arg) => {
		if (arg.startsWith('--file=')) {
			file = arg.split('=')[1]
		}
	})

	if (!file) {
		console.log('USAGE: npm run dev -- --config=./path/to/file.json')
		process.exit(1)
	}

	const data = fs.readFileSync(file, 'utf8')
	constants.data = JSON.parse(data).herd
}

const config = {
  initFileSetup
}

export default config