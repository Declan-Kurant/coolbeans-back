const mongoose = require('./connection')

const FlavorProfileSchema = new mongoose.Schema({
	body: {
		type: String,
		enum: ['Light', 'Balanced', 'Full'],
		required: [true, 'Please specify Light, Balanced, or Full for body.']
	},
	acidity: {
		type: String,
		enum: ['Low', 'Medium', 'High'],
		required: [true, 'Please pick Low, Medium, or High for acidity.']
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

const CoffeeSchema = new mongoose.Schema({
	name: String,
	region: String,
	country: String,
	imgUrl: String,
	description: String,
	flavorProfile: [FlavorProfileSchema]
})

const Coffee = mongoose.model('Coffee', CoffeeSchema)
const FlavorProfile = mongoose.model('FlavorProfile', FlavorProfileSchema)

module.exports = {
	Coffee,
	FlavorProfile
}
