<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once 'connect.php';

$user->username = isset($_GET['username']) ? $_GET['password'] : die();
$user->readOne($user->username);
echo $user->name;

if(isset($user->name)){
    $user_info = array(
        "username" => $user->username,
        "name" =>  $user->name,
        "email"=>$user->email,
        "password" =>$user->password
    );

    http_response_code(200);
    echo json_encode($user);
}

else{
    http_response_code(404);
    echo json_encode(array("message" => "User does not exist."));
}
?>
