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
	iconAnchor: [29, 68],
	popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {

	// Create popup overlay
	const popup = L.popup({
		closeButton: false,
		className: 'map-popup',
		minWidth: 240,
		minHeight: 240

	}).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg" > </a>`)



	L
	.marker([lat, lng], { icon })
	.addTo(myMap)
	.bindPopup(popup)

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
	const orphanage = {
		id: span.dataset.id,
		name: span.dataset.name,
		lat: span.dataset.lat,
		lng: span.dataset.lng
	}

	addMarker(orphanage)
})


/* ----------------------------------------------------------- */
