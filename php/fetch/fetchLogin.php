<?php
require('../api.php');
require('../auth.php');
require('./queries.php');

$data = json_decode(file_get_contents('php://input'));
$email = $data->email;
$password = $data->password;
echo $email;
echo $password;

fetchUser($email, $password);