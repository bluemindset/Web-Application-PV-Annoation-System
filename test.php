<?php
/*This is the example of the authentication*/
$options = array("cost"=>4);
$hashPassword = password_hash("pass_example2",PASSWORD_BCRYPT,$options);
echo $hashPassword;
?>
