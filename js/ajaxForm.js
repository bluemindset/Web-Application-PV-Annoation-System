
/*Gets the data from the new form 
and sends a post request to the postJason.php*/
$(document).ready(function() {
    $("#markerForm").click(function(){
        $.ajax({
            url: "postJason.php",
            type: "POST",
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
            success: function (jsonStr) {
                $("#result").text(JSON.stringify(jsonStr));
            }
        });
    });
});
