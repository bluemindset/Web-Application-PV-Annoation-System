/*Gets the data from the new form 
and sends a post request to the postJason.php*/

$(document).ready(function() {
    var object;
    var currentmarker;
    var name;
    var Photo ;
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
    var Panel_Modules;
    var Azimuth;
    var Inclination;
    var Communication;
    var Inverter;
    var Sensors ;

    $("#cancelPanel").click(function(){
        document.getElementById('mapid').style.cursor = 'grab';
        map.closePopup();
        });
    $("#successPanel").click(function(){
        $.ajax({
            url: "http://localhost/solar/php/insertpanels.php",
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
                Photo:$("#photo").attr('src')
            },
            dataType: "JSON",
            complete: function (jsonstr) {
                window.location.reload();
                alert("Your new Solar Panel Object is saved!");                
            },
           
        });
    });

    $("#updatePanel").click(function(){
        $.ajax({
            url: "http://localhost/solar/php/updatepanels.php",
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
                    Panel_Modules: Panel_Modules,
                    Azimuth  : Azimuth,
                    Inclination_Angle :Inclination,
                    Communication :Communication,
                    Inverter :Inverter,
                    Sensors : Sensors, 
                    Photo:Photo 
                },
            dataType: "JSON",
            complete: function (jsonstr) {
                
                alert("Panel Updated");
                window.location.reload();
            },       
        });
    });

    $("#deletePanel").click(function(){
        $.ajax({
            url: "http://localhost/solar/php/deletepanels.php",
            type: "POST",
            async:false,
            data: {
                Name: name
            },
            dataType: "JSON",
            complete: function (jsonstr) {
                alert("The selected Solar Panel Object is deleted!"); 
                window.location.reload();               
            }    
        });
    });
    map.on('popupclose',function(){

        document.getElementById("deletePanel").disabled = true;
        document.getElementById("updatePanel").disabled = true;
        document.getElementById("deletePanel").style.backgroundColor = "grey";
        document.getElementById("updatePanel").style.backgroundColor = "grey";
    })
    map.on('popupopen', function(e) {

        document.getElementById("deletePanel").disabled = false;
        document.getElementById("updatePanel").disabled = false;
        document.getElementById("deletePanel").style= "default";
        document.getElementById("updatePanel").style = "default";


        var delayInMilliseconds = 100; 
        setTimeout(function() {
            var checkViewport = setInterval(function() {
            var marker = e.popup._source._popup.getContent();
            name = ( $('[name=Name]').val() );
            X_cord= ( $('[name=X_cord]').val() );
            Y_cord= ( $('[name=Y_cord]').val() );
             Photo = ( $('#photo').attr('src'));
             Address = ( $('[name=Address]').val() );
             Operator= ( $('[name=Operator_Name]').val() );
             Commision_Date = ( $('[name=Commision_Date]').val() );
             Description = ( $('[name=Description]').val() );
             System_Power =  ( $('[name=System_Power]').val() );
             Annual_Production  = ( $('[name=Annual_Production]').val() ); 
             CO2=   ($('[name=CO2]').val() );
             Reimbursement = ($('[name=Reimbursement]').val() );
             Panel_Modules= ($('[name=Panel_Modules]').val() );
             Azimuth=($('[name=Azimuth]').val() );
             Inclination = ($('[name=Inclination_Angle]').val() );
             Communication = ($('[name=Communication]').val() );
             Inverter = ($('[name=Inverter]').val() );
             Sensors = ($('[name=Sensors]').val() );
            }, 50);
        }, delayInMilliseconds);    
    });
});
