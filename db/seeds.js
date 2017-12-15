const Coffee = require('./schema')
const FlavorProfile = require('./schema')
const Coffee = require('./schema')

// The Americas
// Africa
const CameroonFlavorProfile = new FlavorProfile({
	body: 'Full',
	acidity: 'Low',
	notes: {
		isFruity: false,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: true,
		isNuttyCocoa: false,
		isSweet: false,
		isFloral: false,
		isWeird: false
	}
})

const Cameroon = new Coffee({
	name: 'Cameroon',
	region: 'India & The Pacific',
	country: 'Cameroon',
	imgUrl: '#',
	description: '#',
	flavorProfile: [CameroonFlavorProfile]
})

const RwandaFlavorProfile = new FlavorProfile({
	body: 'Light',
	acidity: 'High',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: true,
		isNuttyCocoa: false,
		isSweet: true,
		isFloral: true,
		isWeird: false
	}
})

const Rwanda = new Coffee({
	name: 'Rwanda',
	region: 'India & The Pacific',
	country: 'Rwanda',
	imgUrl: '#',
	description: '#',
	flavorProfile: [RwandaFlavorProfile]
})

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

const VietnamFlavorProfile = new FlavorProfile({
	body: 'Full',
	acidity: 'High',
	notes: {
		isFruity: true,
		isSour: true,
		isVeggie: false,
		isRoasted: true,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: false,
		isWeird: true
	}
})

const Vietnam = new Coffee({
	name: 'Vietnam',
	region: 'India & The Pacific',
	country: 'Vietnam',
	imgUrl: '#',
	description: '#',
	flavorProfile: [VietnamFlavorProfile]
})

const IndiaFlavorProfile = new FlavorProfile({
	body: 'Light',
	acidity: 'Medium',
	notes: {
		isFruity: false,
		isSour: false,
		isVeggie: true,
		isRoasted: false,
		isSpicy: true,
		isNuttyCocoa: false,
		isSweet: true,
		isFloral: false,
		isWeird: false
	}
})

const India = new Coffee({
	name: 'India',
	region: 'India & The Pacific',
	country: 'India',
	imgUrl: '#',
	description: '#',
	flavorProfile: [IndiaFlavorProfile]
})

const PapuaNewGuineaFlavorProfile = new FlavorProfile({
	body: 'Moderate',
	acidity: 'Medium',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: true,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: false,
		isSweet: true,
		isFloral: false,
		isWeird: false
	}
})

const PapuaNewGuinea = new Coffee({
	name: 'Papua New Guinea',
	region: 'India & The Pacific',
	country: 'Papua New Guinea',
	imgUrl: '#',
	description: '#',
	flavorProfile: [PapuaNewGuineaFlavorProfile]
})
