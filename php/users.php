<?php
session_start();
class User
{
  private $conn;
  private $table_name="users_S";
  public $name;
  public $username;
  public $email;
  public $password;

  public function __construct($database){
    $this->conn = $database;
  }

public function readAll()
{
  $query ="SELECT UserName,HashedP FROM ".$this->table_name;
  $stmt = $this->conn->prepare($query);
  $stmt->execute();
  return $stmt;

}
public function readOne($username){
     $query = "SELECT * FROM " . $this->table_name . " WHERE username =".$username;
     $stmt = $this->conn->prepare( $query );
     $stmt->bindParam(1, $this->username);
     $stmt->execute();
     $row = $stmt->fetch(PDO::FETCH_ASSOC);
      $this->username = $row['username'];
      $this->name =  $row['name'];
      $this->email = $row['email'];
      $this->password =$row['password'];
 }

} ?>