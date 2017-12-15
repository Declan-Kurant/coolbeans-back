const mongoose = require('./connection.js')

const CoffeeSchema = new mongoose.Schema({
	name: String,
	region: String,
	country: String,
	imgUrl: String,
	description: String,
	flavorProfile: FlavorProfile
})

const FlavorProfileSchema = new mongoose.Schema({
	body: {
		isFull: Boolean,
		isBal: Boolean,
		isLight: Boolean
	},
	acidity: {
		isHigh: Boolean,
		isMed: Boolean,
		isLow: Boolean
	},
	notes: {
		isFruity: Boolean,
		isSour: Boolean,
		isVeggie: Boolean,
		isRoasted: Boolean,
		isSpicy: Boolean,
		isNuttyCocoa: Boolean,
		isSweet: Boolean,
		isFloral: Boolean,
		isWeird: Boolean
	}
})

const Coffee = mongoose.model('Coffee', CoffeeSchema)

const FlavorProfile = mongoose.model('FlavorProfile', FlavorProfileSchema)
