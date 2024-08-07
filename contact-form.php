<?php
//Connect to MySQL
$conn = mysqli_connect("localhost", "username", "password", "database_name");

//Check connection
if(!$conn) {
    die("Connection failed: ". mysqli_connect_error());
}

//Get form data
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"]

//Insert form data
$sql = "INNSERT INTO contacts (name, email, message) VALUE ('$name','$email', '$message')";

if(mysql_query($conn, $sql)) {
   echo "Form submitted successfully!";
}
else {
  echo "Error: ".mysqli_error($conn);
}

//close connestion
mysqli_close($conn);
?>