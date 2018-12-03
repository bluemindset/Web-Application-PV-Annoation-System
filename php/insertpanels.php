<?php
//$datapost  = $_POST["pData"];

include_once "solarpanel.php";
include_once "database.php";
$ndatabase = new Database();
$ndb = $ndatabase->getConnection();

$npanel = new PV($ndb);
/*Get the data from the encaspulated JSON FORM
//$datapost  = json_decode(file_get_contents("php://input"));
$datapost= array();
$datapost = json_decode($_POST['myData']);
//echo $_POST['myData'];
print_r  ($_POST);
print_r  ($datapost);
*/
$Name = $_POST["Name"];
//$Photo= $_POST["Photo"];
$X_cord = $_POST["X_cord"];
$Y_cord = $_POST["Y_cord"];
$Address = $_POST["Address"];
$Operator = $_POST["Operator_Name"];
$Commision_Date = $_POST["Commision_Date"];
$Description = $_POST["Description"];
$System_Power = $_POST["System_Power"];
$Annual_Production = $_POST["Annual_Production"];
$CO2 = $_POST["CO2"];
$Reimbursement = $_POST["Reimbursement"];
$Panel_modules = $_POST["Panel_Modules"];
$Azimuth = $_POST["Azimuth"];
$Inclination = $_POST["Inclination_Angle"];
$Communication = $_POST["Communication"];
$Inverter = $_POST["Inverter"];
$Sensors = $_POST["Sensors"];



      $npanel->name=                 $Name;
   //   $npanel->photo=                $Photo;
      $npanel->x_cord=               $X_cord;
      $npanel->y_cord=               $Y_cord;
      $npanel->address=              $Address;
      $npanel->oparetor_name=        $Oparetor;
      $npanel->commision_date=       $Commision_Date;
      $npanel->description=          $Description;
      $npanel->system_power=         $System_Power;
      $npanel->annual_production=    $Annual_Production;
      $npanel->co2=                  $CO2;
      $npanel->reimbursement=        $Reimbursement;
      $npanel->panel_modules=        $Panel_modules;
      $npanel->azimuth=              $Azimuth;
      $npanel->inclination_angle=    $Inclination;
      $npanel->communication=        $Communication;
      $npanel->inverter=             $Inverter;
      $npanel->sensors=              $Sensors ;
print($Sensors);
if($npanel->insertSql()){
   
    echo "yes";
    http_response_code(201);
}
    else{
        //echo "no";
        http_response_code(503);

    }
 

?>