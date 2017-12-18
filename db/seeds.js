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
		isSpicy: true,
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
	imgUrl: 'https://images.cafeimports.com/23964-hawaiioriginpagemap.png',
	description:
		'Hawaiian Kona coffee is known for its simple yet rich flavor, typically light, delicate and mild with a complex aroma and taste. A good Kona coffee is clean and well-balanced with a medium body and cheerful, bright acidity yet classically balanced and often exhibiting spicy and also buttery qualities with subtle winey tones, intensely aromatic, and with a great aftertaste/finish. The finer Kona coffees are purchased from single estates rather than a mix of Kona coffees pooled for general market sale.',
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
	imgUrl: 'https://images.cafeimports.com/23965-guatemalacountrypagemap.png',
	description:
		'Antigua - The volcanic soil helps lock in moisture, as the region is sunnier and tends to get less rainfall than elsewhere, and the coffees are sweet, smooth, and good for blending or as mild, lower-acid single-origin offerings. Atitlan -  has a very rich soil composition thanks to the volcanoes that surround Lake Atitlan. The windy and wet climate contribute to the nutty, chocolate characteristics that are balanced by a lemony acid and some florals. Huehuetenango - probably the most famous (and difficult to pronounce—it is generally said “way-way-ten-AN-go”). Crisp malic and citrus acidity, full body, and toffee sweetness mark these coffees, which tend to be the most fruit-forward and can be the most complex of what Guatemala has to offer. Nuevo Oriente -  a small region to the eastern edge of the country, butting up against the Honduran border. Its climate is cloudier and rainier than some of the other regions, and the relatively stable temperatures and limited sunlight create a full-bodied coffee with loads of balance.',
	flavorProfile: [GuatemalaFlavorProfile]
})

const CostaRicaFlavorProfile = new FlavorProfile({
	body: 'Medium',
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
	name: 'Costa Rica',
	region: 'Americas',
	country: 'Costa Rica',
	imgUrl: 'https://images.cafeimports.com/23969-costaricacountrypagemap.png',
	description:
		'Costa Rica has earned its reputation for some of the best beans in Central America. The sharp acidity creates a pop in every sip and the medium body gives a fullness to its sweet flavor. The majority of coffee production takes place on small farms, or fincas. The harvested coffee cherries are then taken to be processed at state-of-the-art facilities known as beneficios. It is this quality processing and careful attention to growing methods that gives Costa Rican coffee a hearty richness and excellent aroma.',
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
	imgUrl: 'https://images.cafeimports.com/23959-mexicocountrypagemap.png',
	description:
		"Mexico is best known for producing coffee for dark roasts and blends. This is due to the fact that the majority of Mexican coffee is produced in low laying regions and is, in effect, low quality. Great Mexican coffee can be found in the country's mountain regions. This coffee is sometimes referred to as altura, another name for high-grown. The high altitude of the coffee farms produces a sharp acidity which in turn creates a snap in your mouth full of nutty flavor and a bittersweet chocolate taste.",
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
	imgUrl: 'https://images.cafeimports.com/23958-nicaraguacountrypagemap.png',
	description:
		"Nicaragua has some of the best soil in the region with the potential to produce exceptional coffee rivaling that of Costa Rica or Guatemala. Nicaraguan coffee trees produce large beans that are fairly acidic with a heavy body. Due to political unrest, Nicaragua's coffee production decreased significantly about 20 to 30 years ago forcing farmers to abandon their crops. Coffee growers began to reestablish their farms in 1990 with the return of democratic rule. Nicaraguan coffeefarmers are now taking steps toward greater environmental responsibility by growing sustainable coffee. Sustainable farming ensures quality land for future growth. It is very important in giving quality of life to workers, ensuring the quality of the environment, and producing a quality cup.",
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
	imgUrl: 'https://images.cafeimports.com/23967-elsalvadorcountrypagemap.png',
	description:
		'Coffee from El Salvador tends to be mostly undistinguished, generally softer and exhibit less acidity than the typical Central American coffees. This does vary, with some coffees exhibiting a bright acidity. However, the generally gentle acidity as well as the coffee’s balance and honey-like sweetness have made El Salvador coffees a great choice for use in coffee blends, making it smoother. Exceptions to mediocre El Salvador coffees include the high grown coffee beans from the coffee varietals,  Bourbon and Pacamara , both of which are distinguished for their gentle and pleasing yet lively and complex flavor and aroma.',
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
	imgUrl: 'https://images.cafeimports.com/23963-hondurascountrypagemap.png',
	description:
		'Coffees from Honduras are fairly standard as far as Central American coffee ratings go, on equal footing with Guatemala, El Salvador and Nicaragua. Depending on the region they’re from and the varietal, they will have certain nuances and flavors that are more prominent in some tastes than others. Coffees from Copan are known for having a chocolate flavor and balanced body, while those from Opalca are also balanced, they’re more fruity (grapes, berries) with a fine acidity. Montecillos coffees are reviewed as having a sweet, fruity fragrance that is matched by a lively acidity and orange+peach flavors. Comayagua are similar to those from Montecillos with a vibrant acidity and sweet+citric flavors that are matched by the aroma. Coffees from Agalta have tasting notes of tropical fruit and caramel that lead to a sweet aftertaste, with chocolatey aromas. Those from El Paraiso offer a balanced, sweet/citrus flavor and aroma along with a soft body and good acidity.',
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
	imgUrl: 'https://images.cafeimports.com/23957-panamacountrypagemap.png',
	description:
		'Panamanian coffee is typically of the Geisha variety. Geisah coffee plants are known for producing coffee of  light body, bright acidity and jasmine-like aroma with honey and citrus tastes creating an outstanding cup character and profile.',
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
	imgUrl: 'https://images.cafeimports.com/23956-perucountrypagemap.png',
	description:
		'Peruvian coffee is often described as having a mild character which makes it a good bean to use in blends. However, the characteristics of this coffee vary greatly depending on the region the bean is grown. The high altitude of the Andes combined with the tropical climate makes this country ideal for growing coffee. The changing elevation in the mountain ranges creates microclimates that effect the growth of the coffee bean. The higher the elevation the fuller the body of the coffee and the more flavor held in the bean.',
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
	imgUrl: 'https://images.cafeimports.com/23968-ecuadorcountrypagemap.png',
	description:
		'Ecuadorian coffees tend to be somewhat acidic with a medium body and a predictable flavor typical of South American coffees and Central American coffees coffees.',
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
	imgUrl: 'https://images.cafeimports.com/23971-brazilcountrypagemap.png',
	description:
		'About one-third of all of the world’s coffee is grown in Brazil, and much of Brazil’s premium coffee is labeled Santos after the port it is shipped through. Brazil is the largest exporter in the world, supplying approximately 60% of the world’s coffee – this is due in part to the sheer size of the country. The best Brazilian coffees have a relatively low acidity, and exhibits a nutty sweet flavor, often bittersweet with a chocolaty roast taste. The most favorable quality of a Brazilian coffee is its price – but after that, the mildness helps to balance out more intense coffee beans, making it a feature of many blends.',
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
	imgUrl: 'https://images.cafeimports.com/23961-jamaicacountrypagemap.png',
	description:
		'Jamaica Blue Mountain is a wet processed (washed) green coffee that is silky smooth and well-balanced, with an excellent full body, a classic and refined mild taste with a slightly (and unusually) sweet flavor, very rich (sometimes almost creamy) and with a complex taste that is sometimes almost chocolaty. A good Jamaica Blue Mountain coffee, despite how smooth and mild it tastes, exhibits a bright and vibrant yet smooth acidity, a clean taste with virtually no bitterness, and a bold yet sparkling aroma with a profusion of floral notes and sweet herbal and nutty overtones.',
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
	img_url: 'https://images.cafeimports.com/23966-ethiopiacountrypagemap.png',
	description:
		'Harrar coffees are dry-processed coffees and tend to come from old varietal typical coffee trees. These coffees are noted for their big body and sometimes extremely wild fruity finish. Sidamo and Yirgacheffe coffees are for the most part wet-processed coffees and both tend to have a floral/berry finish going for them depending on the given crop year.',
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
	imgUrl: 'https://images.cafeimports.com/23960-kenyacountrypagemap.png',
	description:
		'Known for their potent sweetness and powerful character, Kenyan coffee tasting notes indicate it has a resonant cup presence, exhibiting intense flavors with a distinct winey richness and dry, winey aftertaste similar to Ethiopian Harrar yet with more of a full-bodied richness than Ethiopian coffees.',
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
	imgUrl: 'https://images.cafeimports.com/23954-tanzaniacountrypagemap.png',
	description:
		'Tanzania is known for a particular type of coffee bean, peaberry, that results from the cherry of the coffee plant containing just a single round bean rather than 2 flat-sided half beans. Many believe this produces an enhanced flavor.',
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
	imgUrl:
		'https://images.cafeimports.com/26202-drcongospecialtycoffeeregionsmap.png',
	description:
		'The potential for quality coffee is high, but the political turmoil and power struggles there make stable business practices a huge challenge. ',
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
	imgUrl:
		'http://kyagalanyi.co.ug/wp-content/uploads/2014/05/2014-Uganda-coffee-map-+-KCL-sust-coffee-schemes.jpg',
	description:
		'A good brewed cup of Bugisu coffee exhibits cupping notes similar to the winey acidity of a fine East African coffee, with sweet chocolate flavor and rich texture. Generally speaking, the lower complexity and lighter body of Ugandan coffees makes them generally less distinguished than the finer coffees of neighboring Zimbabwe, Tanzania, or Kenya. The Robustas from the Lake Victoria basin are well suited to the clay-rich soils, and benefit from some high elevations in the region. They’re able to develop higher acidity than lower-altitude grown Robustas, making them a decent cup.',
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
	imgUrl: 'https://images.cafeimports.com/23838-burundicountrypagesmap.png',
	description:
		'A fine Burundi single origin coffee exhibits a clean, delicate flavor with a rich body and acidity according to cupping notes. Coffee reviews indicate that that Burundi coffees have a sweet berry tastes floral notes and berry-like aromas.',
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
	imgUrl:
		'http://1.bp.blogspot.com/-xw16IsWBOmA/UyhSN_RAmyI/AAAAAAAAVOk/6drdzuCzkhc/s1600/map_of_cameroon.jpg',
	description:
		'Cameroon Arabica coffee is best known for its rich, full body and mellow taste along with a very pleasant aroma.',
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
	imgUrl: 'https://images.cafeimports.com/23955-rwandacountrypagemap.png',
	description:
		'Rwanda coffee is often quite delicate tasting with a pleasant sweet, caramelly aroma and hints of citrus (lemon, orange). In general Rwanda coffees are more highly reviewed than the neighbouring regions of Zimbabwe and Zambia Coffees though not yet achieving the recognition of Kenya and Tanzania coffees. Rwanda also produces Fair Trade Coffees.',
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
	imgUrl:
		'http://2.bp.blogspot.com/-_ocIfTDI3fU/VO6s8ys2QVI/AAAAAAAAABk/IM6rN4DcyQ8/s1600/coffee-indonesia-map.jpg',
	description:
		'The rich, smooth body of this coffee coupled with its full flavor cannot be matched. This distinct quality is produced by a process called warehousing. Indonesian coffee farmers found that by storing the coffee beans in a warm, damp climate a deeper body and lower acidity level develops. The larger islands of Indonesia- Sumatra, Java, and Sulawesi -have a reputation for producing fine, quality coffees. Ankola and Mandheling regions grow their best-known beans.',
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
	imgUrl: 'https://images.cafeimports.com/COuntry_Page_maps_button_.jpg',
	description:
		'What makes Vietnamese coffee distinct? Vietnamese coffee is almost always Robusta, while the usual coffee bean is Arabica. Robusta is almost twice as strong caffeine wise, making it a bit more bitter, as caffeine itself is bitter. Furthermore, it has 60% less lipid (fat) and sugar than Arabica, so the taste is sharp and less casual than your usual cup of coffee. Unlike Arabica, which is mellow and easy-drinking, Robusta is often compared to burnt tires and rubbery in taste with a thick lingering taste and higher acidity. While this might turn away the head of a serial Starbucks fan, for many Vietnamese, only the strength of Robusta is the way to go. ',
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
	imgUrl: 'https://images.cafeimports.com/COuntry_Page_maps_button_-3.jpg',
	description:
		'Resting of Indian coffee may go on for as long as three years and results in a strengthening of the coffee’s sweetness, often creating intense woody and loamy sensations – and a weakening of the acidity.',
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
	imgUrl:
		'https://images.cafeimports.com/23972-papuanewguineacountrypagemap.png',
	description:
		'A good New Guinea coffee, such as Arona or Sigri, has a modest, low-toned richness, sometimes earthy, along with a low to moderate acidity. It is deeply dimensioned yet well-balanced, with mild and mellow yet broad flavors that provide a bright and clean taste – a classic, delicate sweetness complemented by an exotic, complex and fruity aroma.',
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
