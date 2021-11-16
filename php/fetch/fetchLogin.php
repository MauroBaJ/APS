<?php
require('../api.php');
require('../queries.php');
include './clases/Aplicante.php';
include './clases/Compra.php';
include './clases/Direccion.php';
include './clases/Producto.php';
include './clases/Tarjeta.php';
include './clases/Usuario.php';


$data = json_decode(file_get_contents('php://input'));



$email = $data->email;
$password = $data->password;

if(fetchAdmin($email, $password)){
    $response = ['loggedIn', 'ADMIN'];
    $msg = json_encode($response);
}
else if (fetchUser($email, $password)){
    $id = getUserID($email);
    $response = ['loggedIn', 'USER', $id];
    $msg = json_encode($response);
}  
else $msg = json_encode('no');

echo $msg;