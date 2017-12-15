const Coffee = require('./schema')
const FlavorProfile = require('./schema')
const Coffee = require('./schema')

// The Americas
// Africa
// India & The Pacific
const IndonesiaFlavorProfile = new FlavorProfile({
	body: 'Full',
	acidity: 'Low',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: true,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: false,
		isFloral: false,
		isWeird: false
	}
})

const Indonesia = new Coffee({
	name: 'Indonesia',
	region: 'India & The Pacific',
	country: 'Indonesia',
	imgUrl: '#',
	description: '#',
	flavorProfile: [IndonesiaFlavorProfile]
})
