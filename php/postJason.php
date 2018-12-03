<?php
/*Gets the data and encapsulates them into JSON*/
  $Name = $_POST["Name"];
  $X_cord = $_POST["X_cord"];
  $Y_cord = $_POST["Y_cord"];
  $Address = $_POST["Address"];
  $Operator = $_POST["Operator_Name"];
  $Commision_Date = $_POST["Commision_Date"];
  $Description = $_POST["Description"];
  $System_Power = $_POST["System_Power"];
  $Annual_production = $_POST["Annual_Production"];
  $CO2 = $_POST["CO2"];
  $Reimbursement = $_POST["Reimbursement"];
  $Panel_modules = $_POST["Panel_Modules"];
  $Azimuth = $_POST["Azimuth"];
  $Inclination = $_POST["Inclination_Angle"];
  $communication = $_POST["Communication"];
  $Inverter = $_POST["Inverter"];
  $Sensors = $_POST["Sensors"];
  print_r($_POST);
  if(isset($Name))
  {
    $data= array
    (
        "Name" => $Name,
        "X_cord" => $X_cord,
        "Y_cord" => $Y_cord,
        "Address" => $Address,
        "Operator" => $Operator,
        "Commision_Date" => $Commision_Date,
        "Description" => $Description,
        "System_Power" => $System_Powr,
        "Annual_Production" => $Annual_production,
        "CO2" => $CO2,
        "Reimbursement" => $Reimbursement,
        "Panel_Modules" => $Panel_modules,
        "Azimuth" => $Azimuth,
        "Inclination_Angle" => $Inclination,
        "Communication" => $Communication,
        "Inverter" => $Inverter,
        "Sensors" => $Sensors
    );
    echo json_encode($data);
  }

 ?>
