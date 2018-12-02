
var addPanelbool = 0;

var map = L.map('mapid').setView([51.505, -0.09], 13);





L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
'Imagery � <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(map);

/*Generalized function to make element toggleDisabled.
TODO: MAKE THE BUTTON AGAIN RED IF THE USER PRESS ON
(function($) {
    $.fn.toggleDisabled = function(){
        return this.each(function(){
            this.disabled = !this.disabled;
        });
    };
})(jQuery);
//Code to use toggleDisabled
$(document).ready(function(){
  $("a").click(function(){
      $("button[type='submit']").toggleDisabled();
  });
});

*/

function addPanel(){

document.getElementById("addPanels").className= "btn-success btn-lg";

document.getElementById("mapid").style.cursor = 'crosshair';

map.on('click', 
     	function(e){
     		var coord = e.latlng.toString().split(',');
     		var lat = coord[0].split('(');
    		var lng = coord[1].split(')');
     		alert("Add Solar Panel Location on map at cordinates: \nLA: " + lat[1] + "& LO: " + lng[0]);
     		L.marker(e.latlng).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
             ;
     	});
document.getElementById('map').style.cursor = '';
}