<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "solars";

$conn = new mysqli($servername, $username, $password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";


$sql = "SELECT * FROM solarPanels";
$results = $conn->query($sql);

if($results->num_rows >0 )
    echo "i have to show";
while($row = $results->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Title: " . $row["title"];
}

?> 