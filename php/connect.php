<?php
    class Database{
          private  $servername = "localhost";
          private $username = "root";
          private $password = "";
          private $dbname = "solars";
          private $conn ;

          public function getConnection(){
            $conn = new mysqli($servername, $username, $password,$dbname);
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            echo "Connected successfully";
            return $this->conn;
            /*
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