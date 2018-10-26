$(document).ready(function(){

	drawMap()

	function drawMap() {
		let map = L.map('map').setView([39.728493, -121.837479], 13);
		let geoJson =
		createLayer(map)
	}

	function createLayer(map) {
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox.streets',
	    accessToken: 'pk.eyJ1IjoibGFuZ3BoaWwiLCJhIjoiY2puaXg5dzluMG9neDNzcjdzd2pteWgwcSJ9.cQnlq_o61ZSe3qSRJ6mgDw'
		}).addTo(map);
	}
	
});