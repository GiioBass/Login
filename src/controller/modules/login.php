<?php

require_once "../autoload.php";

session_start();

$username = $_REQUEST["username"];
$password = $_REQUEST["password"];

//echo json_encode(array('username' => $username, 'password' => $password));

$sql = "SELECT * FROM users WHERE username = '$username' and password='$password'";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {

	$_SESSION["user"] = $username;
    echo json_encode(array(

        'status' => true,
        'url'    => '../src/view/home.html',
    ));
} else {

    echo json_encode(array(

        'status' => false,
    ));
}

//echo json_encode(array('aceptado' => true));
