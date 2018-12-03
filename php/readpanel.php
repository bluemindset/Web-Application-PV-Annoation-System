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
 
if($panel->name!=null){
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
    echo "hssellos";

    // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($product_arr);
}
 
else{
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user product does not exist
    echo json_encode(array("message" => "Solar Panel does not exist."));
}
?>