<?php
include_once 'database.php';
include_once 'solarpanel.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$database = new Database();
$db= $database->getConnection();
$panel= new PV($db);

?>