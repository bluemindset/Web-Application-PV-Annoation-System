<?php
session_start();
$_SESSION["a"]=$_SESSION["a"]+1;

if($_SESSION["a"]<=3)
{
    $hash = $_POST["Hash"];
    $password = $_POST["Pass"];
    if(password_verify($password,$hash))
    {
        echo "true";
        $_SESSION["a"]=0;
    }
    else 
        echo "false";
}
else   
    echo"blocked";

/* Calculating Hashes before

$options = array("cost"=>4);
$hashPassword = password_hash("pass_example2",PASSWORD_BCRYPT,$options);
*/

?>