const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/schema')

const Schema = require('./db/schema')
const Coffee = Schema.Coffee

const app = express()

app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => {
	res.redirect('/welcome')
})

app.get('/coffees', (req, res) => {
	Coffee.find()
		.then(coffees => {
			res.json(coffees)
		})
		.catch(err => {
			console.log(err)
		})
})

app.get('coffees/:id', (req, res) => {
	Coffee.findById(req.params.id)
		.then(coffee => {
			res.json(coffee)
		})
		.catch(err => {
			console.log(err)
		})
})

app.post('/coffees', (req, res) => {
	Coffee.create(req.body)
		.then(coffee => {
			res.json(coffee)
		})
		.catch(err => {
			console.log(err)
		})
})

app.delete('/coffees/:id', (req, res) => {
	Coffee.findByIdAndRemove(req.params.id)
		.then(coffee => {
			res.json(coffee)
		})
		.catch(err => {
			console.log(err)
		})
})

app.put('/coffees/:id', (req, res) => {
	Coffee.findByIdAndUpdate(req.body)
		.then(coffee => {
			res.json(coffee)
		})
		.catch(err => {
			console.log(err)
		})
})

app.listen(3001, () => {
	console.log('app listening on port 3001')
})
