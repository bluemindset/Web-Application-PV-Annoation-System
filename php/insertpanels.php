<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once "solarpanel.php";
include_once "database.php";
$database = new Database();
$db = $database->getConnection();

$panel = new PV($db);
/*Get the data from the encaspulated JSON FORM*/
$datapost  = json_decode(file_get_contents("http://localhost/solarpanels/php/postJason.php"));


      $panel->name=                 $datapost->Name;
      $panel->photo=                $datapost->Photo;
      $panel->x_cord=               $datapost->X_cord;
      $panel->y_cord=               $datapost->Y_cord;
      $panel->address=              $datapost->Address;
      $panel->oparetor_name=        $datapost->Oparetor_Name;
      $panel->commision_date=       $datapost->Commision_Date;
      $panel->description=          $datapost->Description;
      $panel->system_power=         $datapost->System_Power;
      $panel->annual_production=    $datapost->Annual_Production;
      $panel->co2=                  $datapost->CO2;
      $panel->reimbursement=        $datapost->Reimbursement;
      $panel->panel_modules=        $datapost->Panel_Modules;
      $panel->azimuth=              $datapost->Azimuth;
      $panel->inclination_angle=    $datapost->Inclination_Angle;
      $panel->communication=        $datapost->Communication;
      $panel->inverter=             $datapost->Inverter;
      $panel->sensors=              $datapost->Sensors ;

if($panel->insertSql()){
   
    echo "yes";
    http_response_code(201);
}
    else{
        echo "no";
        http_response_code(503);

    }


?>