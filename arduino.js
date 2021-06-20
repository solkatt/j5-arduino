const { Board, Led, Button } = require('johnny-five')
// import { Board, Led, Button } from 'johnny-five'

/////
const board = new Board()

let state = {
	color: '#ff0000',
}

board.on('ready', function () {
	// var a = new Led.RGB([9, 10, 11])

	const led = new Led.RGB({
		pins: {
			red: 6,
			green: 5,
			blue: 3,
		},
	})

	this.repl.inject({
		// a: a,
		led: led,
	})

	// a.strobe(500)

	// led.strobe(1000)
	led.color(state.color)
	led.intensity(30)

	led.on()

	exports.changeLedColor = (color) => {
		state.color = color
		console.log('arduino color:', color)
		led.color(state.color)

		return state.color
	}
})

exports.getButtonData = () => {
	return 'hejsan'
}
