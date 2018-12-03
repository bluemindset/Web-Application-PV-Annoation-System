<?php
class PV
{
  private $conn;
  private $table_name="solarPV";
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
  public function readAll(){
    $query = "SELECT * FROM ".$this->table_name;
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
    return  $stmt;
  }

 public function readOne($readID){
      $query = "SELECT * FROM " . $this->table_name . " WHERE id = ? ";
      $stmt = $this->conn->prepare( $query );
      $stmt->bindParam(1, $this->id);
      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
       $this->id = $row['ID'];
       $this->name =  $row['Name'];
       $this->photo = $row['Photo'];
       $this->x_cord =$row['X_cord'];
       $this->y_cord =$row['Y_cord'];
       $this->address =$row['Address'];
       $this->oparetor_name =$row['Operator_Name'];
       $this->commision_date =$row['Commision_Date'];
       $this->description = $row['Description'];
       $this->system_power =$row['System_Power'];
       $this->annual_production=$row["Annual_Production"];
       $this->co2 =$row['CO2'];
       $this->reimbursement =$row['Reimbursement'];
       $this->panel_modules =$row['Panel_Modules'];
       $this->azimuth =$row['Azimuth'];
       $this->inclination_angle = $row['Inclination_Angle'];
       $this->communication =$row['Communication'];
       $this->inverter=$row['Inverter'];
       $this->sensors =$row['Sensors'];
  }
  public function insertSql(){
     $query = "INSERT INTO " . $this->table_name . "(Name,X_cord,Y_cord,Address,Operator_Name,Commision_Date,Description,System_Power,Annual_Production,CO2,Reimbursement,
     Panel_Modules,Azimuth,Inclination_Angle,Communication,Inverter,Sensors)
     VALUES ("."\"" . $this->name             . "\"," 
            // . "\"" . $this->photo            . "\","       
                    .$this->x_cord           . ","   
                    .$this->y_cord           . ","   
             . "\"" .$this->address          . "\","   
             . "\"" .$this->oparetor_name    . "\","   
             . "\"" .$this->commision_date   . "\","   
             . "\"" .$this->description      . "\","   
             . "\""       .$this->system_power     . ".\","   
             . "\""       .$this->annual_production. "\","   
             . "\""       .$this->co2              . "\","  
             . "\""      .$this->reimbursement    . "\","  
             . "\""       .$this->panel_modules    . "\","   
             . "\""       .$this->azimuth          . "\","   
             . "\""       .$this->inclination_angle. "\","
             . "\"" .$this->communication    . "\","   
             . "\"" .$this->inverter         . "\","   
             . "\"" .$this->sensors          . "\""    
     ." )";
     
     echo $query;

     
     $sendquery = $this->conn->prepare($query);
    if($sendquery->execute()){
      return true;
    }
    return false;
  }

public function deleteSql(){
     $query = "DELETE FROM " . $this->table_name . " WHERE name = " . "\"". $this->name  ."\"";
     echo $query;
     $sendquery = $this->conn->prepare($query);
    if($sendquery->execute()){
      return true;
    }
    return false;
  }
} 

?>


