/* Map API - Script from leafletjs.com */

const options = {
	dragging: false,
	touchZoom: false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
	zoomControl: false
}

// Get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng


// Create map
const myMap = L.map('mapId', options).setView([lat, lng], 16)

// Create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(myMap)

// Create icon
const icon = L.icon({
	iconUrl: '/images/map-marker.svg',
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2]
})


// Create and add marker
L
.marker([lat, lng], { icon })
.addTo(myMap)

/* ----------------------------------------------------------- */


/*  Image Gallery */
function selectImage(event) {
	const button = event.currentTarget

	// Remove .active classes
	const buttons = document.querySelectorAll('.images button')
	buttons.forEach(button => {
		button.classList.remove('active')
	})

	// Select the target image
	const image = button.children[0]
	const imageContainer = document.querySelector('.orphanage-details > img')

	// Updates the image container
	imageContainer.src = image.src

	// Add the .active class to the clicked button
	button.classList.add('active')
}