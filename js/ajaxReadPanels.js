
$(document).ready(function(){
    alert("error");
   

                    $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: "http://localhost/solarpanels/php/readpanels.php",
                        success:function(data){ 
                            var datastr = JSON.stringify(data) 
                            var allPanels = JSON.parse(datastr);
                            for (var key in allPanels) {
                                if (allPanels.hasOwnProperty(key)) {
                                  var panel  = allPanels[key];
                                  console.log(panel[0].Name);
                                  var content = "<div id=\"result\"</div><form  name=\"marker\" id=\"markerForm\" method=\"post\">"+"<label>Name</label> "+"  <input type=\"text\" placeholder=\"Enter Name:\" name=\"Name\" required>"+
                                  "<br><label>X-cord</label> "+"   <input type=\"text\" placeholder=\"X-cord:\" size=\"6\" name=\"X_cord\" required>"+
                                  "<br><label>Y-cord</label> "+"   <input type=\"text\" placeholder=\"Y-cord:\" size=\"6\" name=\"Y_cord\" required>"+
                                  "<br><label>Address</label> "+"   <input type=\"text\" placeholder=\"Enter Address:\" name=\"Address\" required>"+
                                  "<br><label>Operator Name</label>"+"     <input type=\"text\" placeholder=\"Enter Operator name:\" name=\"Operator_Name\" size=\"20\" required>"+
                                  "<br><label>Commision Date</label>"+"     <input type=\"date\" name=\"Commision_Date\" required>"+
                                  "<br><label>Description</label>"+"        <textarea style=\"resize:none;\" cols=\"40\" rows=\"5\" placeholder=\"Enter a Description:\" name=\"Description\" required></textarea>"+
                                  "<br><label>System Power</label>"+"        <input type=\"text\" placeholder=\"Enter System Power:\" name=\"System_Power\" size=\"20\" required>"+
                                  "<br><label>Annual Production</label>"+"      <input type=\"text\" placeholder=\"in kWh:\" name=\"Annual_Production\" size=\"10\" required>"+
                                  "<br><label>CO2 avoided</label>"+"      <input type=\"text\" placeholder=\"in kWh:\" name=\"CO2\" size=\"10\" required>"+
                                  "<br><label>Reimbursement</label>"+"      <input type=\"text\" placeholder=\"in euro:\" name=\"Reimbursement\" size=\"8\" required>"+
                                  "<br><label>System Panel Modules</label>"+"     <input type=\"text\" placeholder=\"Enter Panel Modules:\" name=\"Panel_Modules\" size=\"15\" required>"+
                                  "<br><label>Azimuth Angle</label>"+"          <input type=\"text\" placeholder=\"Enter azimuth:\" name=\"Azimuth\" size=\"12\" required>"+
                                  "<br><label>Inclination Angle</label>"+"       <input type=\"text\" placeholder=\"Enter Inclination Angle:\" name=\"Inclination_Angle\" size=\"20\" required>"+
                                  "<br><label>Communication</label>"+"       <input type=\"text\" placeholder=\"Enter Communication:\" name=\"Communication\" size=\"15\" required>"+
                                  "<br><label>Inverter</label>"+"      <input type=\"text\" placeholder=\"Enter Inverter:\" name=\"Inverter\" size=\"15\" required>"+
                                  "<br><label>Sensors</label>"+"      <input type=\"text\" placeholder=\"Enter Sensors:\" name=\"Sensors\" size=\"10\" required>" 
                                }
                            }
                        }
                        
                    });
});
