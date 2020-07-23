<?php 

$db_host = 'localhost';
$db_username = 'geovanny';
$db_password = '00000';
$db_name = 'login';

$connection = mysqli_connect($db_host, $db_username, $db_password, $db_name);

if (!$connection) {
	echo 'Failed connection  :v ' . mysqli_errno();
}