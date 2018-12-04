/*Gets the data from the new form 
and sends a post request to the postJason.php*/

$(document).ready(function() {
    var object;
    var currentmarker;
    var name;
    var Photo;
    var X_cord;
    var Y_cord;
    var Address;
    var Operator;
    var Commision_Date;
    var Description;
    var System_Power;
    var Annual_Production;
    var CO2;
    var Reimbursement;
    var Panel_modules;
    var Azimuth;
    var Inclination;
    var Communication;
    var Inverter;
    var Sensors ;
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

    $("#update").click(function(){
        $.ajax({
            url: "http://localhost/solarpanels/php/updatepanels.php",
            type: "POST",
            async:false,
            data: { 
                Name: name,                                          
                X_cord:  X_cord,
                Y_cord: Y_cord,
                 Address: Address,                                  
                 Operator_Name: Operator,
                 Commision_Date:Commision_Date,
                 Description:Description, 
                 System_Power:System_Power,
                 Annual_Production :Annual_Production , 
                 CO2: CO2,
                 Reimbursement : Reimbursement,
                 Panel_Modules: Panel_modules,
                 Azimuth  : Azimuth,
                 Inclination_Angle :Inclination,
                 Communication :Communication,
                 Inverter :Inverter,
                 Sensors : Sensors 
               
                },
            dataType: "JSON",
            complete: function (jsonstr) {
                
                alert(JSON.stringify(jsonstr));
                window.location.reload();
            },       
        });

    });
    $("#deleteb").click(function(){
        $.ajax({
            url: "http://localhost/solarpanels/php/deletepanels.php",
            type: "POST",
            async:false,
            data: {
                Name: Name
            },
            dataType: "JSON",
            complete: function (jsonstr) {
                
                alert(JSON.stringify(jsonstr));
                window.location.reload();
            },       
        });

    });

    map.on('popupopen', function(e) {
            var delayInMilliseconds = 500; 
            setTimeout(function() {
                var checkViewport = setInterval(function() {
                var marker = e.popup._source._popup.getContent();
                name = ( $('[name=Name]').val() );
                X_cord= ( $('[name=X_cord]').val() );
                Y_cord= ( $('[name=Y_cord]').val() );
                 //Photo = ( $('[name=Photo]').val() );
                 Address = ( $('[name=Address]').val() );
                 Oparetor= ( $('[name=Operator_Name]').val() );
                 Commision_Date = ( $('[name=Commision_Date]').val() );
                 Description = ( $('[name=Description]').val() );
                 System_Power =  ( $('[name=System_Power]').val() );
                 Annual_Production  = ( $('[name=Annual_Production]').val() ); 
                 CO2=   ($('[name=co2]').val() );
                 Reimbursement = ($('[name=Reimbursement]').val() );
                 Panel_modules= ($('[name=Panel_modules]').val() );
                 Azimuth=($('[name=Azimuth]').val() );
                 Inclination = ($('[name=Inclination]').val() );
                 Communication = ($('[name=Communication]').val() );
                 Inverter = ($('[name=Inverter]').val() );
                 Sensors = ($('[name=Sensors]').val() );
                }, 50);
                alert(name);
                
            }, delayInMilliseconds);    
        });
});
