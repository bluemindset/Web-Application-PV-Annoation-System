$(document).ready(function(){
                 $.ajax({
                        type: 'GET',
                        dataType: 'json',
                        url: "http://localhost/solarpanels/php/test.json",
                        success:function(data){
                            var datastr = JSON.stringify(data)
                            var allPanels = JSON.parse(datastr);
                            $("body").append(JSON.stringify(data));
                            for (var key in allPanels) {
                                if (allPanels.hasOwnProperty(key)) {
                                  var panel  = allPanels[key];
                                  for(var i=0;i<panel.length;i++)
                                  {
                                        var content = "<div id=\"result\"</div><form action=\"\" name=\"marker\" id=\"markerForm\" method=\"post\">"+
                                        "<label>Name</label> "+"  <input type=\"text\" value="+panel[i].Name+" name=\"Name\" required>"+
                                        "<br><label>X-cord</label> "+"   <input type=\"text\" value="+panel[i].X_cord+" size=\"6\" name=\"X_cord\" required>"+
                                        "<br><label>Y-cord</label> "+"   <input type=\"text\" value="+panel[i].Y_cord+" size=\"6\" name=\"Y_cord\" required>"+
                                        "<br><label>Address</label> "+"   <input type=\"text\" value="+panel[i].Address+" name=\"Address\" required>"+
                                        "<br><label>Operator Name</label>"+"     <input type=\"text\" value="+panel[i].Operator_Name+" name=\"Operator_Name\" size=\"20\" required>"+
                                        "<br><label>Commision Date</label>"+"     <input type=\"date\" name="+panel[i].Commision_Date+" required>"+
                                        "<br><label>Description</label>"+"        <textarea style=\"resize:none;\" cols=\"40\" rows=\"5\" value="+panel[i].Description+" name=\"Description\" required></textarea>"+
                                        "<br><label>System Power</label>"+"        <input type=\"text\" value="+panel[i].System_Power+" name=\"System_Power\" size=\"20\" required>"+
                                        "<br><label>Annual Production</label>"+"      <input type=\"text\" value="+panel[i].Annual_Production+" name=\"Annual_Production\" size=\"10\" required>"+
                                        "<br><label>CO2 avoided</label>"+"      <input type=\"text\" value="+panel[i].CO2+" name=\"CO2\" size=\"10\" required>"+
                                        "<br><label>Reimbursement</label>"+"      <input type=\"text\" value="+panel[i].Reimbursement+" name=\"Reimbursement\" size=\"8\" required>"+
                                        "<br><label>System Panel Modules</label>"+"     <input type=\"text\" value="+panel[i].Panel_Modules+" name=\"Panel_Modules\" size=\"15\" required>"+
                                        "<br><label>Azimuth Angle</label>"+"          <input type=\"text\" value="+panel[i].Azimuth+" name=\"Azimuth\" size=\"12\" required>"+
                                        "<br><label>Inclination Angle</label>"+"       <input type=\"text\" value="+panel[i].Inclination_Angle+" name=\"Inclination_Angle\" size=\"20\" required>"+
                                        "<br><label>Communication</label>"+"       <input type=\"text\" value="+panel[i].Communication+" name=\"Communication\" size=\"15\" required>"+
                                        "<br><label>Inverter</label>"+"      <input type=\"text\" value="+panel[i].Inverter+" name=\"Inverter\" size=\"15\" required>"+
                                        "<br><label>Sensors</label>"+"      <input type=\"text\" value="+panel[i].Sensors+" name=\"Sensors\" size=\"10\" required>"+
                                        "<br><input type=\"submit\" value=\"Edit Form\">"+"    <input type=\"button\" value=\"Cancel\"></form>";


                                        var popup=L.popup({maxHeight:300}).setContent(content);//alert(content);
                                        L.marker([panel[i].X_cord,panel[i].Y_cord]).addTo(map).bindPopup(popup);
                                    }
                                }
                            }
                        }


                    });
    } );