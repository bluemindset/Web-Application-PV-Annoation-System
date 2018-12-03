<?php
include_once "solarpanel.php";
include_once "database.php";
$ndatabase = new Database();
$ndb = $ndatabase->getConnection();

$npanel = new PV($ndb);
echo "hiiiiii";
$Name = $_POST["Name"];
$npanel->name=   $Name;
echo $Name;
if($npanel->deleteSql())
       http_response_code(201);
    else
        http_response_code(503);

?>