<?php
class PV
{
  private $conn;
  private $table_name="solarPanels2";


  public $id;
  public $name;
  public $photo;
  public $x_cord;
  public $y_cord;
  public $address;
  public $operator_name;
  public $commision_date;
  public $description;
  public $system_power;
  public $annual_production;
  public $co2;
  public $reimbursement;
  public $panel_modules;
  public $azimuth;
  public $inclination_angle;
  public $communication;
  public $inverter;
  public $sensors;

  public function __construct($database){
    $this->conn = $database;

  }
  public function read(){
    $query = "SELECT * FROM ".$this->table_name;
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    return  $stmt;
    }
    
    
} ?>
