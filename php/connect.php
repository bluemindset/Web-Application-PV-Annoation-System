<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'connect.php';
include_once 'solarPanels.php';
$database = new Database();
$db= $database->getConnection();
$panel= new PV($db);


?>