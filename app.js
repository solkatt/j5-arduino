const express = require('express')
let path = require('path')

const app = express()
const PORT = 8000

const arduino = require('./arduino')

// app.use('/static', express.static('public'))
app.use('/public', express.static(path.join(__dirname, './public')))
app.use(express.json())

console.log(__dirname)
app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/public/index.html`)
})

app.get('/hej', (req, res) => {
	res.send('Hejhej')
})

app.listen(PORT, () => {
	console.log(`Server running on Port ${PORT}`)
})

//// API

app.get('/btn', (req, res) => {
	const buttonData = arduino.getButtonData()
	// res.send(buttonData)
	res.json({ poop: 'Tjolahopp' })
})

console.log(arduino.getButtonData())

app.post('/ledColor', (req, res) => {
	const color = req.body.color
	handleColorChange(color)

	res.json('Najs')
})

const handleColorChange = (color) => {
	arduino.changeLedColor(color)
}
