<?php
$sql = "INSERT INTO solarPanels (ID,Name,X_cord,Y_cord,Address,Operator_Name,Commision_Date,Description,System_Power,Annual_Production,CO2,Reimbursement,
Panel_Modules,Azimuth,Inclination_Angle,Communication,Inverter,Sensors)

VALUES ($_SESSION[""], 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>