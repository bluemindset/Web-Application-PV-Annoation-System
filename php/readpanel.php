<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
include_once 'connect.php';
 
$panel->id = isset($_GET['id']) ? $_GET['id'] : die();
$panel->readOne();
echo $panel->name;

if(isset($panel->name)){
    $solar_panel = array(
        "ID" => $panel->id,
        "Name" =>  $panel->name,
        "X_cord"=>$panel->x_cord,
        "Y_cord"=>$panel->y_cord,
        "Address"=> $panel->address,
        "Operator_Name" => $panel->operator_name,
        "Commision_Date"=>$panel->commision_date,
        "Description"=> $panel->description,
        "System_Power"=> $panel->system_power,
        "Annual_Production"=> $panel->annual_production,
        "CO2"=>$panel->co2,
        "Reimbursement"=>$panel->reimbursement,
        "Panel_Modules"=>$panel->panel_modules,
        "Azimuth"=>$panel->azimuth,
        "Inclination_Angle"=>$panel->inclination_angle,
        "Communication"=>$panel->communication,
        "Inverter"=>$panel->inverter,
        "Sensors" =>$panel->sensors
    );
    
    http_response_code(200);
    echo json_encode($solar_panel);
}
 
else{
    http_response_code(404);
    echo json_encode(array("message" => "Solar Panel does not exist."));
}
?>