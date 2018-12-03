<!DOCTYPE html>
<html lang="en">

  <head>
  </head>

<body>
  <h1>Login</h1>

  <form action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
  	<input type="text" name="email" value="" placeholder="Email">
  	<input type="password" name="password" value="" placeholder="Password">
  	<button type="submit" name="submit">Submit</button>
  </form>
<?php
  //require_once("//database.php");
  if(isset($_POST['submit'])){
  	$email = trim($_POST['email']);
  	$password = trim($_POST['password']);

  	$sql = "select * from users where email = '".$email."'";
  	$rs = mysqli_query($conn,$sql);
  	$numRows = mysqli_num_rows($rs);
    
  	if($numRows  == 1){
  		$row = mysqli_fetch_assoc($rs);
  		if(password_verify($password,$row['password'])){
  			echo "Password verified";
  		}
  		else{
  			echo "Wrong Password";
  		}
  	}
  	else{
  		echo "No User found";
  	}
  }
 ?>
</body>
</html>
