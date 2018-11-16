$(document).ready(function(){

	let map = L.map('map').setView([39.728493, -121.837479], 13);

	const geojson = $.ajax({
		url:"/geojson",
		dataType: "json",
		success: console.log("Geojson data successfully loaded."),
		error: function (xhr) {
			alert(xhr.statusText)
		}
	})

	$.when(geojson).done(function(data){
		drawMap(data)
	})

	function drawMap(data) {
		addMapLayer(map);
		mapGeoJson(data, map);
	}

	function addMapLayer(map) {
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox.streets',
			accessToken: 'pk.eyJ1IjoibGFuZ3BoaWwiLCJhIjoiY2puaXg5dzluMG9neDNzcjdzd2pteWgwcSJ9.cQnlq_o61ZSe3qSRJ6mgDw'
		}).addTo(map);
	}

	function mapGeoJson(data, map) {
		L.geoJson(data, {
			onEachFeature: function(feature, featureLayer) {
				popupContent = []

				addMarker(feature, map)
				addProperties(feature, featureLayer, popupContent)
			}
		}).addTo(map);
	}

	function addMarker(feature, map) {
		coordinates = feature.geometry.coordinates
		L.marker([coordinates[1], coordinates[0]]).addTo(map);
	}

	function addProperties(feature, featureLayer, popupContent) {
		for (var key in feature.properties) {
			popupContent.push(key + ": " + feature.properties[key]);
		}
		featureLayer.bindPopup(popupContent.join("<br/>"));
	}
});
