// const { response } = require('express')

const btnDataContainer = document.querySelector('.btn-data-container')

// let state = {
// 	btnData: '',
// }

const init = async () => {
	let btnData

	btnData = await getBtnData()

	console.log(btnData)
}

// const getBtnData = async () => {
// 	let btnData = ''

// 	try {
// 		await fetch('http://localhost:8000/btn').then((res) => {
// 			btnData = res
// 		})
// 	} catch (err) {
// 		console.log(err)
// 	}

// 	return btnData
// }

////////////

// fetch('http://localhost:8000/btn', {
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Accept: 'application/json',
// 	},
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))

const postData = async (data) => {
	const reponse = await fetch('http://localhost:8000/ledColor', {
		method: 'POST',
		mode: 'cors',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
}

// fetch('http://localhost:8000/ledColor', {
// 	method: 'POST',
// 	mode: 'cors',
// 	body: JSON.stringify({ bajskorv: 'bajsen' }),
// 	credentials: 'same-origin',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		Accept: 'application/json',
// 	},
// })
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))

// DOM

const inputField = document.querySelector('.input-field')
const submitBtn = document.querySelector('.submit-button')

let text = ''

inputField.addEventListener('input', (e) => {
	text = e.target.value
	console.log(text)
})
submitBtn.addEventListener('click', async () => {
	await postData({ color: text })
})
