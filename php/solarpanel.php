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
  
  public function insertSql(){


     $query = "INSERT INTO " . $this->table_name . "(Name,Photo,X_cord,Y_cord,Address,Operator_Name,Commision_Date,Description,System_Power,Annual_Production,CO2,Reimbursement,
     Panel_Modules,Azimuth,Inclination_Angle,Communication,Inverter,Sensors)
     VALUES ("."\"" . $this->name             . "\"," 
             . "\"" . $this->photo            . "\","       
                    .$this->x_cord           . ","   
                    .$this->y_cord           . ","   
             . "\"" .$this->address          . "\","   
             . "\"" .$this->operator_name    . "\","   
             . "\"" .$this->commision_date   . "\","   
             . "\"" .$this->description      . "\","   
             . "\""       .$this->system_power     . "\","   
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
     
   //  echo $query;

     
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


  public function  updateSql(){
    $this->deleteSql();
    $this->insertSql();
  }
}

?>


