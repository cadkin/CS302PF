/*
 the script mus be loaded after the map div is defined.
 otherwise this will not work (we would need a listener to
 wait for the DOM to be fully loaded).

 Just put the script tag below the map div.

 The source code below is the example from the leaflet start page.
 */

var map = L.map('map', {
    fullscreenControl: {
        pseudoFullscreen: true // if true, fullscreen to page width and height
    }
}).setView([1.0, 0.0], 0.0);

L.tileLayer('leaflet-tiles/{z}/{x}/{y}.jpg', {
		attribution: 'Aiden Rutter and Cameron Adkins'
}).addTo(map);

L.marker([-0.085938,-0.55908]).addTo(map)
		.bindPopup('My character.')
        .openPopup();
        
map.toggleFullscreen(); // Either go fullscreen, or cancel the existing fullscreen.

