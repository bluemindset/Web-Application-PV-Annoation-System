/*Gets the data from the new form 
and sends a post request to the postJason.php*/

$(document).ready(function() {
    var object;
    var choice;
    var currentmarker;
    $("#button1").click(function(){
        $.ajax({
            url: "http://localhost/solarpanels/php/insertpanels.php",
            type: "POST",
            async:false,
            data: {
                Name: $("#Name").val(),
                X_cord: $("#X_cord").val(),
                Y_cord: $("#Y_cord").val(),
                Address: $("#Address").val(),
                Operator_Name: $("#Operator_Name").val(),
                Commision_Date: $("#Commision_Date").val(),
                Description: $("#Description").val(),
                System_Power: $("#System_Power").val(),
                Annual_Production: $("#Annual_Production").val(),
                CO2: $("#CO2").val(),
                Reimbursement: $("#Reimbursement").val(),
                Panel_Modules: $("#Panel_Modules").val(),
                Azimuth: $("#Azimuth").val(),
                Inclination_Angle: $("#Inclination_Angle").val(),
                Communication: $("#Communication").val(),
                Inverter: $("#Inverter").val(),
                Sensors:$("#Sensors").val(),
            },
            dataType: "JSON",
            complete: function (jsonstr) {
                alert(JSON.stringify(jsonstr));
                object = jsonstr;
                $("#result").text(JSON.stringify(jsonstr));
                
            },       
        });


    });

    $("#deleteb").click(function(){
        $.ajax({
            url: "http://localhost/solarpanels/php/deletepanels.php",
            type: "POST",
            async:false,
            data: {
                Name: choice
            },
            dataType: "JSON",
            complete: function (jsonstr) {
                
                alert(JSON.stringify(jsonstr));
                        map.removeLayer(currentmarker);
            },       
        });

    });
    
    var marker;
    map.on('click', function (e) {
        if (marker) { // check
            map.removeLayer(e.marker); // remove
        }
    });

    map.on('popupopen', function(e) {
            var delayInMilliseconds = 1000; 
            setTimeout(function() {
                map.removeLayer(e.marker);
                var marker = e.popup._source._popup.getContent();
                var ch = ( $('[name=Name]').val() );
                choice = ch;
                alert(choice);
            }, delayInMilliseconds);    
        });
});
