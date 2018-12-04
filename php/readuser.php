<?php
session_start();
include_once 'connect.php';

$userInfo = $user->readAll();
$allrows = $userInfo->rowCount();
$user = array();
$user["all"] = array();


if($allrows > 0){
            while($row = $userInfo->fetch(PDO::FETCH_ASSOC)){
                array_push ($user["all"],$row);
                http_response_code (200);
            }
            echo json_encode($user);
}
?>