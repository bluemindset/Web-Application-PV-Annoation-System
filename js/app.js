var addPanelbool = 0;
var onetime = 0;

var map = L.map('mapid').setView([35, 33.3], 9);





L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
'Imagery � <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(map);



function addPanel(){

document.getElementById("addPanels").className= "btn-success btn-lg";

document.getElementById("mapid").style.cursor = 'crosshair';
  map.on('click',
                function(e){

                    var coord = e.latlng.toString().split(',');
                    var lat = coord[0].split('(');
                    var lng = coord[1].split(')');
                    var content = "<div id=\"result\"</div><form  name=\"marker\" id=\"markerForm\" method=\"post\">"+
                                  "<label>Name</label> "+"  <input type=\"text\" placeholder=\"Enter Name:\" id=\"Name\" name=\"Name\" required>"+
                                  "<br><label>X-cord</label> "+"   <input type=\"text\" value="+lat[1]+" size=\"6\" id=\"X_cord\" name=\"X_cord\" required>"+
                                  "<br><label>Y-cord</label> "+"   <input type=\"text\" value="+lng[0]+" size=\"6\" id=\"Y_cord\" name=\"Y_cord\" required>"+
                                  "<br><label>Address</label> "+"   <input type=\"text\" placeholder=\"Enter Address:\"id=\"Address\" name=\"Address\" required>"+
                                  "<br><label>Operator Name</label>"+"     <input type=\"text\" placeholder=\"Enter Operator name:\" id=\"Operator_Name\" name=\"Operator_Name\" size=\"20\" required>"+
                                  "<br><label>Commision Date</label>"+"     <input type=\"date\" name=\"Commision_Date\" id=\"Commision_Date\" required>"+
                                  "<br><label>Description</label>"+"        <textarea style=\"resize:none;\" cols=\"40\" rows=\"5\" id=\"Description\" placeholder=\"Enter a Description:\" name=\"Description\" required></textarea>"+
                                  "<br><label>System Power</label>"+"        <input type=\"text\" placeholder=\"Enter System Power:\" id=\"System_Power\" name=\"System_Power\" size=\"20\" required>"+
                                  "<br><label>Annual Production</label>"+"      <input type=\"text\" placeholder=\"in kWh:\" id=\"Annual_Production\" name=\"Annual_Production\" size=\"10\" required>"+
                                  "<br><label>CO2 avoided</label>"+"      <input type=\"text\" placeholder=\"in kWh:\" name=\"CO2\" id=\"CO2\" size=\"10\" required>"+
                                  "<br><label>Reimbursement</label>"+"      <input type=\"text\" placeholder=\"in euro:\" id=\"Reimbursement\" name=\"Reimbursement\" size=\"8\" required>"+
                                  "<br><label>System Panel Modules</label>"+"     <input type=\"text\" placeholder=\"Enter Panel Modules:\" id=\"Panel_Modules\" name=\"Panel_Modules\" size=\"15\" required>"+
                                  "<br><label>Azimuth Angle</label>"+"          <input type=\"text\" placeholder=\"Enter azimuth:\" id=\"Azimuth\" name=\"Azimuth\" size=\"12\" required>"+
                                  "<br><label>Inclination Angle</label>"+"       <input type=\"text\" placeholder=\"Enter Inclination Angle:\" id=\"Inclination_Angle\" name=\"Inclination_Angle\" size=\"20\" required>"+
                                  "<br><label>Communication</label>"+"       <input type=\"text\" placeholder=\"Enter Communication:\" id=\"Communication\" name=\"Communication\" size=\"15\" required>"+
                                  "<br><label>Inverter</label>"+"      <input type=\"text\" placeholder=\"Enter Inverter:\" id=\"Inverter\" name=\"Inverter\" size=\"15\" required>"+
                                  "<br><label>Sensors</label>"+"      <input type=\"text\" placeholder=\"Enter Sensors:\"id=\"Sensors\" name=\"Sensors\" size=\"10\" required>"+
                                  "<br><input type=\"button\" value=\"Sumbit\" id=\"submit\">"+" <input type=\"button\" value=\"Cancel\"></form>";
                    var popup = L.popup( {maxHeight:300 }).setContent(content);
                    alert("Add Solar Panel Location on map at cordinates: \nLA: " + lat[1] + " & LO: " + lng[0]);
                    L.marker(e.latlng).addTo(map).bindPopup(popup).openPopup();
               });
document.getElementById('map').style.cursor = '';
}