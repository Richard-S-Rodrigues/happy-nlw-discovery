/* Map API - Script from leafletjs.com */

// Create map
const myMap = L.map('mapId').setView([-27.222633, -49.6455874], 16)

// Create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(myMap)

// Create icon
const icon = L.icon({
	iconUrl: '/images/map-marker.svg',
	iconSize: [58, 68],
	iconAnchor: [29, 68]
})

let marker

// Create and add marker
myMap.on('click', (event) => {
	const lat = event.latlng.lat
	const lng = event.latlng.lng

	document.querySelector('[name=lat]').value = lat
	document.querySelector('[name=lng]').value = lng

	// Remove marker icon
	marker && myMap.removeLayer(marker)

	// add icon layer
	marker = L.marker([lat, lng], { icon })
	.addTo(myMap) 
})

/* ----------------------------------------------------------- */

// Add images field 
function addPhotoField() {
	// Get the Images container #images
	const container = document.querySelector('#images')

	// Get the container to duplicate .new-image
	const fieldsContainer = document.querySelectorAll('.new-upload')

	// Get the clone of the last added image
	const newFieldContainer = fieldsContainer[fieldsContainer.length - 1]
	.cloneNode(true)

	// Check if the input field is empty, if it is, don't add to the image container
	const input = newFieldContainer.children[0]
	
	if(input.value == '') {
		return
	}
	// Clean the input field before add to the image container
	input.value = ''

	// Add the clone to the image container
	container.appendChild(newFieldContainer)
}

// Remove the image field
function deleteField() {
	const span = event.currentTarget

	const fieldsContainer = document.querySelectorAll('.new-upload')

	// remove the field only if it has more than one value
	if (fieldsContainer.length < 2) {
		// Clean the field value
		span.parentNode.children[0].value = ''

		return
	} 
	
	// Delete the field
	span.parentNode.remove()
}

// Select yes or no
function toggleSelect(event) {

	// Remove the class .active from the buttons
	document.querySelectorAll('.button-select button')
	.forEach(button => button.classList.remove('active'))

	// Set the class .active in the targeted button
	const button = event.currentTarget
	button.classList.add('active')

	// Update my input hidden with the selected value
	const input = document.querySelector('[name="open_on_weekends"]')

	// Set yes or no
	input.value = button.dataset.value
}

function validate(event) {
	const lat = event.currentTarget[1].value
	const lng = event.currentTarget[2].value

	if(lat == '' && lng == '') {
		event.preventDefault()
		alert('Selecione uma localização no mapa!')
	}
}