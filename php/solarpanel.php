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

 public function readOne(){
 
      $query = "SELECT
                 *
              FROM
                  " . $this->table_name . " p
              WHERE
                  p.id = ? ";
              
      $stmt = $this->conn->prepare( $query );
      $stmt->bindParam(1, $this->id);
      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
       $this->ID = $row['id'];
       $this->name =  $row['name'];
       $this->X_cord =$row['X_cord'];
       $this->Y_cord =$row['Y_cord'];
       $this->Address =$row['Address'];
       $this->Oparetor_Name =$row['Operator_Name'];
       $this->Commision_Date =$row['Commision_Date'];
       $this->Description = $row['Description'];
       $this->System_Power =$row['System_Power'];
       $this->Annual_Production=$row["Annual_Production"];
       $this->CO2 =$row['CO2'];
       $this->Reimbursement =$row['Reimbursement'];
       $this->Panel_Modules =$row['Panel_Modules'];
       $this->Azimuth =$row['Azimuth'];
       $this->Inclination_Angle = $row['Inclination_Angle'];
       $this->Communication =$row['Communication'];
       $this->Inverter=$row['Inverter'];
       $this->Sensors =$row['Sensors'];
  }
    
} ?>
