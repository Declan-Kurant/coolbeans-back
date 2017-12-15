const Coffee = require('./schema')
const FlavorProfile = require('./schema')
const Coffee = require('./schema')

// The Americas

const HawaiiFlavorProfile = new FlavorProfile({
	body: 'Balanced',
	acidity: 'Medium',
	notes: {
		isFruity: false,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: true,
		isWeird: false
	}
})

const Hawaii = new Coffee({
	name: 'Hawaii',
	region: 'Americas',
	country: 'Hawaii',
	imgUrl: '#',
	description: '#',
	flavorProfile: [HawaiiFlavorProfile]
})

const GuatemalaFlavorProfile = new FlavorProfile({
	body: 'Full',
	acidity: 'Medium',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: true,
		isWeird: false
	}
})

const CostaRica = new Coffee({
	name: 'Costa Rica',
	region: 'Americas',
	country: 'Costa Rica',
	imgUrl: '#',
	description: '#',
	flavorProfile: [CostaRicaFlavorProfile]
})

const CostaRicaFlavorProfile = new FlavorProfile({
	body: 'Light',
	acidity: 'Medium',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: false,
		isSweet: true,
		isFloral: false,
		isWeird: false
	}
})

const CostaRica = new Coffee({
	name: 'Hawaii',
	region: 'Americas',
	country: 'Hawaii',
	imgUrl: '#',
	description: '#',
	flavorProfile: [HawaiiFlavorProfile]
})

const MexicoFlavorProfile = new FlavorProfile({
	body: 'Light',
	acidity: 'Low',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: true,
		isWeird: false
	}
})

const Mexico = new Coffee({
	name: 'Mexico',
	region: 'Americas',
	country: 'Mexico',
	imgUrl: '#',
	description: '#',
	flavorProfile: [MexicoFlavorProfile]
})

const NicaraguaFlavorProfile = new FlavorProfile({
	body: 'Balanced',
	acidity: 'High',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: true,
		isWeird: false
	}
})

const Nicaragua = new Coffee({
	name: 'Nicaragua',
	region: 'Americas',
	country: 'Nicaragua',
	imgUrl: '#',
	description: '#',
	flavorProfile: [NicaraguaFlavorProfile]
})

const ElSalvadorFlavorProfile = new FlavorProfile({
	body: 'Light',
	acidity: 'Low',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: true,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: true,
		isWeird: false
	}
})

const ElSalvador = new Coffee({
	name: 'El Salvador',
	region: 'Americas',
	country: 'El Salvador',
	imgUrl: '#',
	description: '#',
	flavorProfile: [ElSalvadorFlavorProfile]
})

const HondurasFlavorProfile = new FlavorProfile({
	body: 'Balanced',
	acidity: 'Low',
	notes: {
		isFruity: false,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: false,
		isWeird: false
	}
})

const Honduras = new Coffee({
	name: 'Honduras',
	region: 'Americas',
	country: 'Honduras',
	imgUrl: '#',
	description: '#',
	flavorProfile: [HondurasFlavorProfile]
})

const PanamaFlavorProfile = new FlavorProfile({
	body: 'Light',
	acidity: 'High',
	notes: {
		isFruity: false,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: true,
		isWeird: false
	}
})

const Panama = new Coffee({
	name: 'Panama',
	region: 'Americas',
	country: 'Panama',
	imgUrl: '#',
	description: '#',
	flavorProfile: [PanamaFlavorProfile]
})

const PeruFlavorProfile = new FlavorProfile({
	body: 'Balanced',
	acidity: 'Low',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: false,
		isWeird: false
	}
})

const Peru = new Coffee({
	name: 'Peru',
	region: 'Americas',
	country: 'Peru',
	imgUrl: '#',
	description: '#',
	flavorProfile: [PeruFlavorProfile]
})

const EcuadorFlavorProfile = new FlavorProfile({
	body: 'Balanced',
	acidity: 'Medium',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: false,
		isWeird: false
	}
})

const Ecuador = new Coffee({
	name: 'Ecuador',
	region: 'Americas',
	country: 'Ecuador',
	imgUrl: '#',
	description: '#',
	flavorProfile: [EcuadorFlavorProfile]
})

const BrazilFlavorProfile = new FlavorProfile({
	body: 'Balanced',
	acidity: 'Low',
	notes: {
		isFruity: false,
		isSour: true,
		isVeggie: true,
		isRoasted: true,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: false,
		isFloral: false,
		isWeird: false
	}
})

const Brazil = new Coffee({
	name: 'Brazil',
	region: 'Americas',
	country: 'Brazil',
	imgUrl: '#',
	description: '#',
	flavorProfile: [BrazilFlavorProfile]
})

const JamaicaFlavorProfile = new FlavorProfile({
	body: 'Balanced',
	acidity: 'High',
	notes: {
		isFruity: false,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: true,
		isWeird: false
	}
})

const Jamaica = new Coffee({
	name: 'Jamaica',
	region: 'Americas',
	country: 'Jamaica',
	imgUrl: '#',
	description: '#',
	flavorProfile: [JamaicaFlavorProfile]
})

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
