<?php
include_once 'database.php';
include_once 'solarpanel.php';
include_once 'users.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$database = new Database();
$db= $database->getConnection();
$user = new User($db);
$panel= new PV($db);

?>
