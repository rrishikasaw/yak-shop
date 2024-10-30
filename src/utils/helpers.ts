import constants from './constants'

function getStock(day: number) {
	let milk = 0,
		skins = 0
	const herd = []

	for (const yak of constants.data) {
		// calculating milk
		let yakAge = yak.age
		if (yak.sex === 'f' && yak.age < 10) {
			for (let i = 1; i <= day && yakAge <= 10; i++) {
				milk += 50 - yakAge * 100 * 0.03
				yakAge += 0.01
			}
		}
		// console.log({yakAge: +yakAge.toFixed(2)});

		// calculating skins
		const yakDetails = {
			name: yak.name,
			age: yak.age,
			'age-last-shaved': yak.age
		}
		herd.push(yakDetails)
		yakAge = yak.age
		let yakSkins = 0
		if (yak.age < 10) {
			let minimumDay = +(8 + yakAge * 100 * 0.01).toFixed(2)
			for (let i = 1; i <= day && yakAge < 10; i++) {
				let difference = +((yakAge - yak.age) * 100).toFixed(2)
				let remainder = +(difference % minimumDay).toFixed(2)
				// console.log({minimumDay, difference, remainder});
				if (remainder === 0) {
					yakSkins++
					skins++
					minimumDay = +(8 + yakAge * 100 * 0.01).toFixed(2)
					yakDetails['age-last-shaved'] = +yakAge.toFixed(2)
					// console.log({minimumDay, difference, remainder});
				}
				yakAge += 0.01
				yakDetails.age = +yakAge.toFixed(2)
			}
		}
		// console.log({yakSkins});
	}
	// console.log({milk: +milk.toFixed(2)});

	const stock = { milk: +milk.toFixed(2), skins }

	return { stock, herd }
}

const helpers = {
	getStock
}

export default helpers
