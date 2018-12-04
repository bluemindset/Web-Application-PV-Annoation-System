<!DOCTYPE html>
<?php
session_start();
if($_SESSION["first"]!=1)
  $_SESSION["a"]=0;
if(isset($_POST['loginButton']))
  $_SESSION["first"]=1;
?>
<html>
<head>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="/solar/css/login.css" rel="stylesheet">
</head>
<body>
<section class="login-block">
    <div class="container">
	<div class="row">
		<div class="col-md-4 login-sec">
		    <h2 class="text-center">Login Now</h2>
		    <form class="login-form" action="<?php echo $_SERVER['PHP_SELF']?>" method="post">
  <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Username</label>
    <input type="text" class="form-control" placeholder="" name="username" id="username">

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" class="text-uppercase">Password</label>
    <input type="password" class="form-control" placeholder="" name="password" id="password">
  </div>
    <div class="form-check">
      <input type="submit" class="btn btn-login float-right" value="Sumbit" id = "loginButton" name="loginButton">
  </div>
</form>
		</div>
		<div class="col-md-8 banner-sec">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                 
    <div class="carousel-item active">
      <img class="d-block img-fluid" src="/solar/img/solar3.jpg" style="width:100%;" >

		</div>
	</div>
</div>
</section>
    <script src="js/ajaxUsers.js"></script>

</body>
</html>
