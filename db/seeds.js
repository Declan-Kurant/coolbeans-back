const Schema = require('./schema')

const Coffee = Schema.Coffee
const FlavorProfile = Schema.FlavorProfile

// Americas
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

const Guatemala = new Coffee({
	name: 'Guatemala',
	region: 'Americas',
	country: 'Guatemala',
	imgUrl: '#',
	description: '#',
	flavorProfile: [GuatemalaFlavorProfile]
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
const EthiopiaFlavorProfile = new FlavorProfile({
	body: 'Full',
	acidity: 'Low',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: false,
		isSweet: false,
		isFloral: true,
		isWeird: false
	}
})
const Ethiopia = new Coffee({
	name: 'Ethiopia',
	region: 'Africa',
	country: 'Ethiopia',
	img_url: '#',
	description:
		'Harrar coffees are dry-processed coffees and tend to come from old varietal typica coffee trees. These coffees are noted for their big body and sometimes extremely wild fruity finish. Sidamo and Yirgacheffe coffees are for the most part wet-processed coffees and both tend to have a floral/berry finish going for them depending on the given crop year.',
	flavorProfile: [EthiopiaFlavorProfile]
})

const KenyaFlavorProfile = new FlavorProfile({
	body: 'Balanced',
	acidity: 'High',
	notes: {
		isFruity: true,
		isSour: true,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: false,
		isSweet: false,
		isFloral: false,
		isWeird: false
	}
})
const Kenya = new Coffee({
	name: 'Kenya',
	region: 'Africa',
	country: 'Kenya',
	imgUrl: '#',
	description:
		'Few display the shadow defects and off-tastes that often mar coffees from other origins.',
	flavorProfile: [KenyaFlavorProfile]
})

const TanzaniaFlavorProfile = new FlavorProfile({
	body: 'Balanced',
	acidity: 'High',
	notes: {
		isFruity: true,
		isSour: true,
		isVeggie: false,
		isRoasted: true,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: false,
		isFloral: false,
		isWeird: true
	}
})
const Tanzania = new Coffee({
	name: 'Tanzania',
	region: 'Africa',
	country: 'Tanzania',
	imgUrl: '#',
	description:
		'It is important to note that Tanzania is known for a particular type of coffee bean, peaberry, that results from the cherry of the coffee plant containing just a single round bean rather than 2 flat-sided half beans. Many believe this produces an enhanced flavor.',
	flavorProfile: [TanzaniaFlavorProfile]
})

const CongoFlavorProfile = new FlavorProfile({
	body: 'Full',
	acidity: 'High',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: false,
		isFloral: false,
		isWeird: false
	}
})
const Congo = new Coffee({
	name: 'Congo',
	region: 'Africa',
	country: 'Congo',
	imgUrl: '#',
	description: 'typically dry harvest',
	flavorProfile: [CongoFlavorProfile]
})

const UgandaFlavorProfile = new FlavorProfile({
	body: 'Balanced',
	acidity: 'High',
	notes: {
		isFruity: true,
		isSour: false,
		isVeggie: true,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: false,
		isSweet: false,
		isFloral: true,
		isWeird: false
	}
})
const Uganda = new Coffee({
	name: 'Uganda',
	region: 'Africa',
	country: 'Uganda',
	imgUrl: '#',
	description: '#',
	flavorProfile: [UgandaFlavorProfile]
})

const BurundiFlavorProfile = new FlavorProfile({
	body: 'Full',
	acidity: 'High',
	notes: {
		isFruity: false,
		isSour: true,
		isVeggie: false,
		isRoasted: false,
		isSpicy: false,
		isNuttyCocoa: true,
		isSweet: true,
		isFloral: true,
		isWeird: false
	}
})
const Burundi = new Coffee({
	name: 'Burundi',
	region: 'Africa',
	country: 'Burundi',
	imgUrl: '#',
	description: '#',
	flavorProfile: [BurundiFlavorProfile]
})

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

let coffees = [
	Hawaii,
	Guatemala,
	CostaRica,
	Mexico,
	Nicaragua,
	ElSalvador,
	Honduras,
	Panama,
	Peru,
	Ecuador,
	Brazil,
	Jamaica,
	Ethiopia,
	Kenya,
	Tanzania,
	Congo,
	Uganda,
	Burundi,
	Cameroon,
	Rwanda,
	Indonesia,
	Vietnam,
	India,
	PapuaNewGuinea
]

Coffee.remove({})
	.catch(err => console.log(err))
	.then(() => {
		console.log('coffees removed successfully')

		coffees.forEach((coffee, i) => {
			coffees[i].save((err, coffee) => {
				err ? console.log('error creating coffee') : console.log(coffee)
			})
		})
	})
