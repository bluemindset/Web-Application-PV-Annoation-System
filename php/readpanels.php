<?php
include_once 'connect.php';

$panelInfo = $panel->readAll();
$allrows = $panelInfo->rowCount();
$solar_all = array();
$solar_all["all"] = array();


if($allrows > 0){
    while ($row = $panelInfo->fetch(PDO::FETCH_ASSOC) ){
            array_push ($solar_all["all"],$row);
            http_response_code (200);
        }
              echo json_encode($solar_all);
}
?>