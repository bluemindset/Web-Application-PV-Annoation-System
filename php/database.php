<?php
    class Database{
          private  $servername = "localhost";
          private $username = "root";
          private $password = "";
          private $dbname = "solars";
          private $conn ;

          public function getConnection(){
 
            try{
                $this->conn = new PDO("mysql:host=" . $this->servername . ";dbname=" . $this->dbname, $this->username, $this->password);
                $this->conn->exec("set names utf8");
                echo "success";
            }catch(PDOException $exception){
                echo "Connection error: " . $exception->getMessage();
            }
     
            return $this->conn;
            /*
             $this->conn = null;
             $conn = new mysqli($servername, $username, $password,$dbname);
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            echo "Connected successfully";
            return $this->conn;
            $sql = "SELECT * FROM solarPanels";
            $results = $conn->query($sql);

            if($results->num_rows >0 )
                echo "i have to show";
            while($row = $results->fetch_assoc()) {
                echo "<>" . $row["id"]. " - Title: " . $row["title"];
            }
            */
        }
    }
?> 